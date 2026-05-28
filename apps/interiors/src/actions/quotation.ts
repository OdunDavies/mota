'use server';

import { createAdminClient } from '@sarkimota/database';
import { z } from 'zod';

const quotationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  propertyType: z.string().optional(),
  propertySize: z.string().optional(),
  budget: z.string().optional(),
  details: z.string().optional(),
});

export async function submitQuotation(formData: FormData) {
  const parsed = quotationSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    propertyType: formData.get('property-type'),
    propertySize: formData.get('property-size'),
    budget: formData.get('budget'),
    details: formData.get('details'),
  });

  if (!parsed.success) {
    const firstError = parsed.error?.errors?.[0];
    throw new Error(firstError?.message ?? 'Validation failed');
  }

  const db = createAdminClient();
  const { data: sub } = await db.from('subsidiaries').select('id').eq('slug', 'interiors').single();
  if (!sub) throw new Error('Subsidiary not found');

  const scope = formData.getAll('scope') as string[];

  const { error } = await db.from('inquiries').insert({
    subsidiary_id: sub.id,
    type: 'quotation',
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone || null,
    message: parsed.data.details || null,
    source: 'interiors-website',
    metadata: {
      propertyType: parsed.data.propertyType,
      propertySize: parsed.data.propertySize,
      budget: parsed.data.budget,
      scope,
    },
  });

  if (error) throw new Error(error.message);
}
