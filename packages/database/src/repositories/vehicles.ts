import type { DbClient, VehicleRow, VehicleInsert, VehicleUpdate } from './types';

export const vehicleRepository = {
  async findAll(client: DbClient, options?: {
    limit?: number;
    offset?: number;
    status?: string;
    condition?: string;
    featured?: boolean;
    subsidiaryId?: string;
  }) {
    let query = client
      .from('vehicles')
      .select('*, vehicle_images(*)')
      .order('created_at', { ascending: false });

    if (options?.status) query = query.eq('status', options.status);
    if (options?.condition) query = query.eq('condition', options.condition);
    if (options?.featured !== undefined) query = query.eq('featured', options.featured);
    if (options?.subsidiaryId) query = query.eq('subsidiary_id', options.subsidiaryId);

    const { data, error } = await query
      .range(options?.offset ?? 0, (options?.offset ?? 0) + (options?.limit ?? 12) - 1);

    if (error) throw error;
    return { data: data as (VehicleRow & { vehicle_images: import('../schema').Database['public']['Tables']['vehicle_images']['Row'][] })[], error };
  },

  async findBySlug(client: DbClient, slug: string) {
    const { data, error } = await client
      .from('vehicles')
      .select('*, vehicle_images(*), vehicle_features(*)')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return { data, error };
  },

  async findById(client: DbClient, id: string) {
    const { data, error } = await client
      .from('vehicles')
      .select('*, vehicle_images(*), vehicle_features(*)')
      .eq('id', id)
      .single();

    if (error) throw error;
    return { data, error };
  },

  async create(client: DbClient, vehicle: VehicleInsert) {
    const { data, error } = await client
      .from('vehicles')
      .insert(vehicle)
      .select()
      .single();

    if (error) throw error;
    return { data, error };
  },

  async update(client: DbClient, id: string, vehicle: VehicleUpdate) {
    const { data, error } = await client
      .from('vehicles')
      .update(vehicle)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error };
  },

  async remove(client: DbClient, id: string) {
    const { error } = await client
      .from('vehicles')
      .update({ status: 'sold' })
      .eq('id', id);

    if (error) throw error;
  },

  async getFeatured(client: DbClient, limit = 6) {
    return this.findAll(client, { featured: true, limit, status: 'available' });
  },
};
