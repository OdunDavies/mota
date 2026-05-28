import { createAdminClient } from '@sarkimota/database';

const db = () => createAdminClient();

export async function getSubsidiaries() {
  const { data } = await db().from('subsidiaries').select('*').eq('is_active', true).order('sort_order');
  return data ?? [];
}

export async function getLeadership() {
  const { data } = await db().from('leadership').select('*').eq('is_active', true).order('sort_order');
  return data ?? [];
}

export async function getTestimonials() {
  const { data } = await db().from('testimonials').select('*').order('sort_order');
  return data ?? [];
}

export async function getCompanyInfo() {
  const { data } = await db().from('company_info').select('*');
  const map: Record<string, unknown> = {};
  if (data) for (const row of data) map[row.key] = row.value;
  return map;
}
