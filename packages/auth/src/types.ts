import type { Database } from '@sarkimota/database';

export type UserProfile = Database['public']['Tables']['profiles']['Row'];

export interface SessionWithProfile {
  user: UserProfile;
  session: import('@supabase/supabase-js').Session | null;
}
