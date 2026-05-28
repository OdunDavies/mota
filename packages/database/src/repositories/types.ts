import type { Database } from '../schema';

export type DbClient = import('@supabase/supabase-js').SupabaseClient<Database>;

export type VehicleRow = Database['public']['Tables']['vehicles']['Row'];
export type VehicleInsert = Database['public']['Tables']['vehicles']['Insert'];
export type VehicleUpdate = Database['public']['Tables']['vehicles']['Update'];

export type ProjectRow = Database['public']['Tables']['interior_projects']['Row'];
export type ProjectInsert = Database['public']['Tables']['interior_projects']['Insert'];
export type ProjectUpdate = Database['public']['Tables']['interior_projects']['Update'];

export type InquiryRow = Database['public']['Tables']['inquiries']['Row'];
export type InquiryInsert = Database['public']['Tables']['inquiries']['Insert'];

export type ProfileRow = Database['public']['Tables']['profiles']['Row'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];
