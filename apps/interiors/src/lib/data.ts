import { createAdminClient } from '@sarkimota/database';

const db = () => createAdminClient();

export async function getProjects(options?: { featured?: boolean; limit?: number }) {
  let query = db()
    .from('interior_projects')
    .select('*, project_images(*)')
    .in('status', ['completed', 'review'])
    .order('created_at', { ascending: false });

  if (options?.featured) query = query.eq('featured', true);
  if (options?.limit) query = query.limit(options.limit);

  const { data } = await query;
  return data ?? [];
}

export async function getProjectBySlug(slug: string) {
  const { data } = await db()
    .from('interior_projects')
    .select('*, project_images(*), project_services(*, services(*))')
    .eq('slug', slug)
    .single();
  return data;
}

export async function getServices() {
  const { data } = await db()
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');
  return data ?? [];
}

export async function getTestimonials() {
  const { data } = await db().from('testimonials').select('*').order('sort_order');
  return data ?? [];
}

export async function getLeadership() {
  const { data } = await db().from('leadership').select('*').eq('is_active', true).order('sort_order');
  return data ?? [];
}

export async function getCompanyInfo() {
  const { data } = await db().from('company_info').select('*');
  const map: Record<string, unknown> = {};
  if (data) for (const row of data) map[row.key] = row.value;
  return map;
}
