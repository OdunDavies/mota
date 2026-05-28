'use server';

import { createAdminClient } from '@sarkimota/database';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export async function submitContact(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    const firstError = parsed.error?.errors?.[0];
    throw new Error(firstError?.message ?? 'Validation failed');
  }

  const db = createAdminClient();
  const { data: sub } = await db.from('subsidiaries').select('id').eq('slug', 'corporate').single();
  if (!sub) throw new Error('Subsidiary not found');

  const { error } = await db.from('inquiries').insert({
    subsidiary_id: sub.id,
    type: 'corporate',
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone || null,
    message: parsed.data.message,
    source: 'corporate-website',
  });

  if (error) throw new Error(error.message);
}
