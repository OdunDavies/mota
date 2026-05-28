# SarkiMota Group — Enterprise Architecture

## Overview

SarkiMota Group of Companies (GOC) is a premium Nigerian holding company operating two subsidiaries:
- **SarkiMota Automotive** — Luxury vehicle sales, financing, and aftermarket services
- **SarkiMota Interiors** — Premium interior design, fit-out, and lifestyle solutions

This monorepo hosts the complete digital infrastructure for the group: a unified, scalable,
enterprise-grade ecosystem powering the parent brand, both subsidiaries, and internal operations.

## Architectural Principles

1. **Supabase-First** — PostgreSQL, Auth, RLS, Storage, Edge Functions. No custom API servers.
2. **Monorepo Isolation** — Each app deploys independently; shared packages ensure consistency.
3. **Typed End-to-End** — Generated Supabase types flow through the entire stack. No `any`.
4. **Edge-Ready** — Server components and edge functions where possible; minimal client runtime.
5. **Premium by Default** — Every UI decision targets luxury, speed, and trust.
6. **Auditability** — Every business action is logged; RLS enforces access boundaries.
7. **Extensibility** — Subsidiaries are first-class citizens; adding a third subsidiary is a config change.

## Monorepo Structure

```
├── apps/
│   ├── corporate/        — Parent brand site (Next.js App Router)
│   ├── automotive/       — Automotive subsidiary (Next.js App Router)
│   ├── interiors/        — Interior design subsidiary (Next.js App Router)
│   └── admin/            — Enterprise operations dashboard (Next.js App Router)
├── packages/
│   ├── ui/               — Shared component library (shadcn/ui + custom)
│   ├── config/           — Shared config (Tailwind, PostCSS, env)
│   ├── database/         — Supabase client, types, repositories, migrations
│   ├── auth/             — Auth helpers, RBAC utilities, middleware
│   ├── analytics/        — PostHog + custom event abstractions
│   ├── types/            — Domain-specific TypeScript interfaces
│   └── utils/            — Shared utility functions
├── tooling/
│   ├── eslint/           — Shared ESLint configuration
│   ├── typescript/       — Shared tsconfig bases
│   └── tailwind/         — Shared Tailwind preset
├── supabase/
│   ├── migrations/       — Database migrations
│   ├── seed/             — Seed data scripts
│   └── functions/        — Supabase Edge Functions
└── turbo.json            — Turborepo pipeline configuration
```

## Technology Stack

| Layer        | Technology                                   |
|-------------|----------------------------------------------|
| Framework    | Next.js 14 (App Router)                      |
| Language     | TypeScript 5 (strict mode)                   |
| Styling      | TailwindCSS 3 + shadcn/ui + Framer Motion    |
| Database     | Supabase (PostgreSQL 15)                     |
| Auth         | Supabase Auth + custom RBAC                  |
| Storage      | Supabase Storage + Cloudinary                |
| Email        | Resend                                       |
| Cache        | Upstash Redis                                |
| Analytics    | PostHog                                      |
| Monitoring   | Sentry                                       |
| AI           | OpenAI API                                   |
| Orchestration| Turborepo + pnpm workspaces                  |
| Deployment   | Vercel (all apps)                            |

## Database Architecture

### Schema Design Principles

- **Normalized to 3NF** with selective denormalization for read-heavy paths
- **UUID primary keys** across all tables (security, distributed-friendly)
- **RLS enforced at table level** — no bypass possible
- **Soft deletes** via `deleted_at` timestamps
- **Audit columns** (`created_at`, `updated_at`, `created_by`, `updated_by`) on all business tables
- **Composite indexes** on all foreign-key + status query patterns

### Core Tables

| Table               | Purpose                                    |
|--------------------|--------------------------------------------|
| `profiles`          | Extended user profile data                 |
| `roles`             | RBAC role definitions                      |
| `user_roles`        | User-role assignments                      |
| `subsidiaries`      | Subsidiary registry (automotive, interiors)|
| `vehicles`          | Automotive inventory                       |
| `vehicle_images`    | Vehicle media (galleries, thumbnails)      |
| `vehicle_features`  | Feature specifications per vehicle         |
| `interior_projects` | Interior design project records            |
| `project_images`    | Project media (before/after, galleries)    |
| `project_services`  | Services rendered per project              |
| `services`          | Service catalog                            |
| `inquiries`         | Unified inquiry/lead capture               |
| `test_drives`       | Automotive test-drive bookings             |
| `consultations`     | Interior design consultation bookings      |
| `crm_contacts`      | CRM contact records                        |
| `crm_interactions`  | CRM interaction history                    |
| `crm_leads`         | Lead pipeline management                   |
| `faqs`              | Structured FAQ content                     |
| `testimonials`      | Customer testimonials                      |
| `leadership`        | Executive/leadership profiles              |
| `company_info`      | Structured company information             |
| `audit_logs`        | Immutable audit trail                      |
| `analytics_events`  | Custom analytics event store               |

## Authentication & Authorization

### Auth Flow
1. Supabase Auth handles registration, login, OAuth, magic links
2. On sign-up, a `profiles` row is created via database trigger
3. RBAC is enforced via:
   - **RLS policies** at the database level
   - **Middleware** for route protection (Next.js middleware)
   - **Server actions** for business logic authorization
   - **Client-side** for UI conditional rendering only

### Role Hierarchy
```
super_admin    — Full system access
group_admin   — Cross-subsidiary operations
subsidiary_admin — Single-subsidiary administration
staff         — Operational employee
customer      — End user
```

## Subsidiary Architecture

Each subsidiary is a separate Next.js app with:
- Its own domain/subdomain
- Independent deployment
- Shared authentication (Supabase project)
- Shared design system
- Scoped RLS policies

Adding a new subsidiary:
1. Create `apps/new-subsidiary/`
2. Add subsidiary record to `subsidiaries` table
3. Configure RLS policy for `subsidiary_id`
4. Deploy independently

## Design System

### Tokens
- **Colors**: Warm black (#0A0A0A), Ivory (#F5F0EB), Gold (#C9A96E), and semantic variants
- **Typography**: Inter (UI), Playfair Display (editorial)
- **Spacing**: 4px base unit, 8px grid
- **Radius**: 6px (UI), 12px (cards), 24px (modals)
- **Shadows**: Multi-layered for depth without heaviness

### Component Principles
- Server components by default
- Client boundaries only where interactivity is required
- Framer Motion for entrance/exit animations only — not layout
- Every component is typed and documented

## Deployment Architecture

```
Vercel
├── sarkimota.com        → apps/corporate
├── automotive.sarkimota.com → apps/automotive
├── interiors.sarkimota.com  → apps/interiors
└── admin.sarkimota.com     → apps/admin

Supabase (shared)
├── PostgreSQL
├── Auth
├── Storage
└── Edge Functions

Cloudinary (shared media CDN)
Resend (shared email)
Upstash Redis (shared cache)
```

## Performance Targets

| Metric    | Target |
|-----------|--------|
| Lighthouse Performance | ≥95    |
| Lighthouse Accessibility | ≥95 |
| First Contentful Paint | ≤1.0s |
| Largest Contentful Paint | ≤1.5s |
| Cumulative Layout Shift | ≤0.05 |
| First Input Delay | ≤50ms |
| Time to Interactive | ≤2.0s |

## Security Posture

- All API routes protected by RLS + middleware
- Rate limiting via Upstash on all mutation endpoints
- Input validation via Zod on every server action
- File upload validation (type, size, scan)
- CORS configured per-environment
- Audit logging on all CUD operations
- Secrets managed via Vercel Environment Variables
- No sensitive data in client bundles
