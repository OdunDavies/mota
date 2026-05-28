import type { DbClient, ProfileRow, ProfileUpdate } from './types';

export const profileRepository = {
  async findByEmail(client: DbClient, email: string) {
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .eq('email', email)
      .single();

    return { data, error };
  },

  async findById(client: DbClient, id: string) {
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    return { data, error };
  },

  async update(client: DbClient, id: string, profile: ProfileUpdate) {
    const { data, error } = await client
      .from('profiles')
      .update(profile)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error };
  },
};
