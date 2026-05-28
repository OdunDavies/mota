import type { DbClient, InquiryRow, InquiryInsert } from './types';

export const inquiryRepository = {
  async create(client: DbClient, inquiry: InquiryInsert) {
    const { data, error } = await client
      .from('inquiries')
      .insert(inquiry)
      .select()
      .single();

    if (error) throw error;
    return { data, error };
  },

  async findAll(client: DbClient, options?: {
    limit?: number;
    offset?: number;
    status?: string;
    subsidiaryId?: string;
    type?: string;
  }) {
    let query = client
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (options?.status) query = query.eq('status', options.status);
    if (options?.subsidiaryId) query = query.eq('subsidiary_id', options.subsidiaryId);
    if (options?.type) query = query.eq('type', options.type);

    const { data, error } = await query
      .range(options?.offset ?? 0, (options?.offset ?? 0) + (options?.limit ?? 50) - 1);

    if (error) throw error;
    return { data, error };
  },

  async updateStatus(client: DbClient, id: string, status: string) {
    const { data, error } = await client
      .from('inquiries')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error };
  },
};
