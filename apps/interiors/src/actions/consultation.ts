'use server';

import { createAdminClient } from '@sarkimota/database';
import { z } from 'zod';

const consultationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Phone is required'),
  projectType: z.string().optional(),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().optional(),
});

export async function submitConsultation(formData: FormData) {
  const parsed = consultationSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    projectType: formData.get('project-type'),
    preferredDate: formData.get('date'),
    preferredTime: formData.get('time'),
    budgetRange: formData.get('budget'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    const firstError = parsed.error?.errors?.[0];
    throw new Error(firstError?.message ?? 'Validation failed');
  }

  const db = createAdminClient();
  const { data: sub } = await db.from('subsidiaries').select('id').eq('slug', 'interiors').single();
  if (!sub) throw new Error('Subsidiary not found');

  const { error } = await db.from('consultations').insert({
    subsidiary_id: sub.id,
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    project_type: parsed.data.projectType || null,
    preferred_date: parsed.data.preferredDate,
    preferred_time: parsed.data.preferredTime || null,
    budget_range: parsed.data.budgetRange || null,
    message: parsed.data.message || null,
  });

  if (error) throw new Error(error.message);
}
