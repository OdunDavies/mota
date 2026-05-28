export { createClient } from './src/client';
export { createServerClient } from './src/server';
export { createMiddlewareClient } from './src/middleware';
export { AuthProvider } from './src/auth-provider';
export { requireAuth, requireRole } from './src/guards';
export type { UserProfile, SessionWithProfile } from './src/types';
