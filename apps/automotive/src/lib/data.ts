import { createAdminClient } from '@sarkimota/database';

const db = () => createAdminClient();

export async function getVehicles(options?: { featured?: boolean; limit?: number }) {
  let query = db()
    .from('vehicles')
    .select('*, vehicle_images(*)')
    .eq('status', 'available')
    .order('created_at', { ascending: false });

  if (options?.featured) query = query.eq('featured', true);
  if (options?.limit) query = query.limit(options.limit);

  const { data } = await query;
  return data ?? [];
}

export async function getVehicleBySlug(slug: string) {
  const { data } = await db()
    .from('vehicles')
    .select('*, vehicle_images(*), vehicle_features(*)')
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
