import type { DbClient, ProjectRow, ProjectInsert, ProjectUpdate } from './types';

export const projectRepository = {
  async findAll(client: DbClient, options?: {
    limit?: number;
    offset?: number;
    projectType?: string;
    status?: string;
    featured?: boolean;
    subsidiaryId?: string;
  }) {
    let query = client
      .from('interior_projects')
      .select('*, project_images(*), project_services(*, services(*))')
      .order('created_at', { ascending: false });

    if (options?.projectType) query = query.eq('project_type', options.projectType);
    if (options?.status) query = query.eq('status', options.status);
    if (options?.featured !== undefined) query = query.eq('featured', options.featured);
    if (options?.subsidiaryId) query = query.eq('subsidiary_id', options.subsidiaryId);

    const { data, error } = await query
      .range(options?.offset ?? 0, (options?.offset ?? 0) + (options?.limit ?? 12) - 1);

    if (error) throw error;
    return { data, error };
  },

  async findBySlug(client: DbClient, slug: string) {
    const { data, error } = await client
      .from('interior_projects')
      .select('*, project_images(*), project_services(*, services(*))')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return { data, error };
  },

  async create(client: DbClient, project: ProjectInsert) {
    const { data, error } = await client
      .from('interior_projects')
      .insert(project)
      .select()
      .single();

    if (error) throw error;
    return { data, error };
  },

  async update(client: DbClient, id: string, project: ProjectUpdate) {
    const { data, error } = await client
      .from('interior_projects')
      .update(project)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error };
  },
};
