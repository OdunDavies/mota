import { redirect } from 'next/navigation';
import { createServerClient } from './server';
import type { RoleType } from '@sarkimota/types';

export async function requireAuth() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (!profile) {
    redirect('/auth/login');
  }

  return profile;
}

export async function requireRole(allowedRoles: RoleType[]) {
  const profile = await requireAuth();

  if (!allowedRoles.includes(profile.role as RoleType)) {
    redirect('/403');
  }

  return profile;
}
