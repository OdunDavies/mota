# SarkiMota Group of Companies — Digital Ecosystem

A production-grade enterprise digital infrastructure for a premium Nigerian holding company with automotive and interior design subsidiaries.

## Architecture

```
apps/
  corporate/    — Parent brand platform (sarkimota.com)
  automotive/   — Automotive subsidiary (automotive.sarkimota.com)
  interiors/    — Interior design subsidiary (interiors.sarkimota.com)
  admin/        — Enterprise operations dashboard (admin.sarkimota.com)

packages/
  ui/           — Shared component library (shadcn/ui + custom)
  config/       — Site configuration, constants
  database/     — Supabase client, schema types, repositories
  auth/         — Auth helpers (client/server/middleware), RBAC
  analytics/    — PostHog analytics abstraction
  types/        — Domain TypeScript interfaces
  utils/        — Utility functions (cn, formatting, etc.)

tooling/
  eslint/       — Shared ESLint configuration
  typescript/   — Shared tsconfig base configs
  tailwind/     — Shared TailwindCSS preset (theme tokens)

supabase/
  migrations/   — Database migrations (schema + RLS + triggers)
  seed/         — Seed data scripts
  functions/    — Edge Functions (process-inquiry, ai-recommend)
```

## Tech Stack

| Layer          | Technology                                |
|---------------|-------------------------------------------|
| Framework      | Next.js 14 (App Router)                   |
| Language       | TypeScript 5 (strict)                     |
| Styling        | TailwindCSS 3 + shadcn/ui + Framer Motion |
| Database       | Supabase (PostgreSQL 15)                  |
| Auth           | Supabase Auth + RBAC + RLS                |
| Storage        | Supabase Storage + Cloudinary             |
| Email          | Resend                                    |
| Cache          | Upstash Redis                             |
| Analytics      | PostHog                                   |
| Monitoring     | Sentry                                    |
| AI             | OpenAI API                                |
| Orchestration  | Turborepo + pnpm workspaces               |
| Deployment     | Vercel                                    |

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- Supabase CLI

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables (copy and fill in)
cp .env.example .env.local

# Start Supabase locally
supabase start

# Run database migrations
supabase db push

# Generate TypeScript types
pnpm db:generate

# Seed development data
pnpm db:seed

# Start all apps in development mode
pnpm dev
```

### Individual App Development

```bash
# Corporate site (port 3001)
pnpm --filter corporate dev

# Automotive site (port 3002)
pnpm --filter automotive dev

# Interiors site (port 3003)
pnpm --filter interiors dev

# Admin dashboard (port 3004)
pnpm --filter admin dev
```

## Database

### Key Tables

- `profiles` — Extended user profiles (extends auth.users)
- `subsidiaries` — Subsidiary registry
- `vehicles` — Automotive inventory with full specs
- `vehicle_images` — Vehicle media galleries
- `vehicle_features` — Feature specifications
- `interior_projects` — Design project records
- `project_images` — Project media (before/after)
- `services` — Service catalog per subsidiary
- `inquiries` — Unified inquiry/lead capture
- `test_drives` — Automotive test drive bookings
- `consultations` — Interior design consultations
- `crm_contacts` — CRM contact records
- `crm_leads` — Lead pipeline management
- `crm_interactions` — Interaction history
- `audit_logs` — Immutable audit trail
- `analytics_events` — Custom event store

### RLS Policy Summary

- **Public**: Read access to available vehicles, published projects, active services
- **Authenticated Users**: Can manage own profiles and saved vehicles
- **Staff+**: CRUD access to all business entities within their subsidiary scope
- **Admin+**: Full cross-subsidiary access, audit log viewing
- **Audit logs**: Append-only for all users, select-only for admin roles

## Authentication & RBAC

### Roles

| Role             | Scope                                    |
|-----------------|------------------------------------------|
| `super_admin`    | Full system access                       |
| `group_admin`    | Cross-subsidiary operations              |
| `subsidiary_admin` | Single-subsidiary administration       |
| `staff`          | Operational employee                     |
| `customer`       | End user (default on signup)             |

### Auth Flow

1. User signs up via Supabase Auth
2. `handle_new_user()` trigger auto-creates profile row
3. RLS policies enforce access at database level
4. Next.js middleware handles route protection
5. Server actions verify authorization

## Design System

### Theme Tokens

- **Warm Black**: `#0A0A0A` (backgrounds, dark mode)
- **Ivory**: `#F5F0EB` (light backgrounds)
- **Gold**: `#C9A96E` (accents, CTAs)
- **Fonts**: Inter (UI), Playfair Display (editorial)

### Component Library

All UI components are in `packages/ui/` and built on Radix UI primitives:
- Button, Badge, Card, Input, Select, Textarea
- Dialog, DropdownMenu, Tabs, Toast, Tooltip
- Container, Section, PageHeader
- NavigationMenu, AnimatedText, MotionDiv

## Deployment

Each app deploys independently to Vercel:

```bash
# Deploy corporate
vercel --cwd apps/corporate --prod

# Deploy automotive
vercel --cwd apps/automotive --prod

# Deploy interiors
vercel --cwd apps/interiors --prod

# Deploy admin
vercel --cwd apps/admin --prod
```

### Environment Variables

Required across all apps:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `RESEND_API_KEY`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `SENTRY_DSN`
- `OPENAI_API_KEY`

## Security

- All database access protected by RLS
- Middleware adds security headers (CSP, HSTS, X-Frame-Options)
- Input validation via Zod on server actions
- Rate limiting on mutation endpoints (Upstash)
- File upload validation (type, size)
- Audit logging on all CUD operations
- No sensitive data in client bundles

## Performance Targets

| Metric    | Target |
|-----------|--------|
| Lighthouse Performance | ≥95 |
| LCP | ≤1.5s |
| CLS | ≤0.05 |
| FID | ≤50ms |

## License

Proprietary — SarkiMota Group of Companies
