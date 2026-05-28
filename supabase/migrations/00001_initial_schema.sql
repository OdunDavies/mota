-- ============================================================
-- SARKIMOTA GROUP — ENTERPRISE DATABASE SCHEMA
-- ============================================================

-- 0. EXTENSIONS
create extension if not exists "uuid-ossp" with schema extensions;
create extension if not exists "pgcrypto" with schema extensions;

-- 1. ENUMS
create type vehicle_condition as enum ('new', 'used', 'certified_pre_owned');
create type inquiry_status as enum ('new', 'contacted', 'qualified', 'converted', 'closed');
create type booking_status as enum ('pending', 'confirmed', 'completed', 'cancelled');
create type project_status as enum ('planning', 'in_progress', 'review', 'completed');

-- 2. SUBSIDIARIES
create table if not exists subsidiaries (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  description text,
  contact_email text,
  contact_phone text,
  address jsonb,
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 3. PROFILES (extends Supabase auth.users)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  phone text,
  avatar_url text,
  role text not null default 'customer'::text,
  subsidiary_id uuid references subsidiaries(id) on delete set null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 4. USER ROLES (fine-grained RBAC)
create table if not exists user_roles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  role text not null,
  subsidiary_id uuid references subsidiaries(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, role, subsidiary_id)
);

-- 5. VEHICLES (automotive inventory)
create table if not exists vehicles (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid not null references subsidiaries(id) on delete cascade,
  make text not null,
  model text not null,
  year int not null,
  trim text,
  price numeric(12,2) not null,
  currency text default 'NGN',
  condition vehicle_condition not null default 'new',
  mileage int,
  vin text,
  exterior_color text,
  interior_color text,
  fuel_type text,
  transmission text,
  engine text,
  drivetrain text,
  seats int,
  doors int,
  description text,
  status text not null default 'available',
  featured boolean default false,
  slug text not null unique,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references profiles(id) on delete set null
);

-- 6. VEHICLE IMAGES
create table if not exists vehicle_images (
  id uuid primary key default uuid_generate_v4(),
  vehicle_id uuid not null references vehicles(id) on delete cascade,
  url text not null,
  alt text,
  width int,
  height int,
  sort_order int default 0,
  is_primary boolean default false,
  type text default 'image',
  created_at timestamptz default now()
);

-- 7. VEHICLE FEATURES
create table if not exists vehicle_features (
  id uuid primary key default uuid_generate_v4(),
  vehicle_id uuid not null references vehicles(id) on delete cascade,
  category text not null,
  name text not null,
  value text not null,
  created_at timestamptz default now()
);

-- 8. INTERIOR PROJECTS
create table if not exists interior_projects (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid not null references subsidiaries(id) on delete cascade,
  title text not null,
  slug text not null unique,
  client_name text,
  project_type text not null,
  location text,
  area_size text,
  budget_range text,
  completion_date date,
  description text,
  status project_status default 'planning',
  featured boolean default false,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references profiles(id) on delete set null
);

-- 9. PROJECT IMAGES
create table if not exists project_images (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid not null references interior_projects(id) on delete cascade,
  url text not null,
  alt text,
  width int,
  height int,
  sort_order int default 0,
  is_primary boolean default false,
  is_before boolean default false,
  created_at timestamptz default now()
);

-- 10. SERVICES CATALOG
create table if not exists services (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid not null references subsidiaries(id) on delete cascade,
  name text not null,
  slug text not null,
  description text,
  icon text,
  sort_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(subsidiary_id, slug)
);

-- 11. PROJECT-SERVICE JOIN
create table if not exists project_services (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid not null references interior_projects(id) on delete cascade,
  service_id uuid not null references services(id) on delete cascade,
  created_at timestamptz default now(),
  unique(project_id, service_id)
);

-- 12. INQUIRIES (unified lead capture)
create table if not exists inquiries (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid not null references subsidiaries(id) on delete cascade,
  type text not null,
  name text not null,
  email text not null,
  phone text,
  message text,
  source text,
  status inquiry_status default 'new',
  assigned_to uuid references profiles(id) on delete set null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 13. TEST DRIVES (automotive)
create table if not exists test_drives (
  id uuid primary key default uuid_generate_v4(),
  vehicle_id uuid not null references vehicles(id) on delete cascade,
  name text not null,
  email text not null,
  phone text not null,
  preferred_date date not null,
  preferred_time time,
  status booking_status default 'pending',
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 14. CONSULTATIONS (interiors)
create table if not exists consultations (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid not null references subsidiaries(id) on delete cascade,
  name text not null,
  email text not null,
  phone text not null,
  project_type text,
  preferred_date date not null,
  preferred_time time,
  budget_range text,
  message text,
  status booking_status default 'pending',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 15. TESTIMONIALS
create table if not exists testimonials (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid references subsidiaries(id) on delete cascade,
  client_name text not null,
  client_title text,
  content text not null,
  rating int check (rating >= 1 and rating <= 5),
  is_featured boolean default false,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- 16. FAQS
create table if not exists faqs (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid references subsidiaries(id) on delete cascade,
  question text not null,
  answer text not null,
  category text,
  sort_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 17. LEADERSHIP
create table if not exists leadership (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid references subsidiaries(id) on delete cascade,
  name text not null,
  title text not null,
  bio text,
  image_url text,
  sort_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 18. COMPANY INFO (structured key-value)
create table if not exists company_info (
  id uuid primary key default uuid_generate_v4(),
  key text not null unique,
  value jsonb not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 19. SAVED VEHICLES (user favorites)
create table if not exists saved_vehicles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  vehicle_id uuid not null references vehicles(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, vehicle_id)
);

-- 20. RECENTLY VIEWED
create table if not exists recently_viewed (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  vehicle_id uuid not null,
  viewed_at timestamptz default now()
);

-- 21. CRM CONTACTS
create table if not exists crm_contacts (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid references subsidiaries(id) on delete cascade,
  name text not null,
  email text not null,
  phone text,
  company text,
  source text,
  tags text[] default '{}',
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 22. CRM INTERACTIONS
create table if not exists crm_interactions (
  id uuid primary key default uuid_generate_v4(),
  contact_id uuid not null references crm_contacts(id) on delete cascade,
  type text not null,
  summary text not null,
  details jsonb default '{}'::jsonb,
  performed_by uuid references profiles(id) on delete set null,
  created_at timestamptz default now()
);

-- 23. CRM LEADS
create table if not exists crm_leads (
  id uuid primary key default uuid_generate_v4(),
  subsidiary_id uuid references subsidiaries(id) on delete cascade,
  contact_id uuid not null references crm_contacts(id) on delete cascade,
  source text not null,
  status text not null default 'new',
  score int check (score >= 0 and score <= 100),
  assigned_to uuid references profiles(id) on delete set null,
  notes text,
  converted_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 24. AUDIT LOGS (immutable)
create table if not exists audit_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  old_values jsonb,
  new_values jsonb,
  ip_address inet,
  user_agent text,
  created_at timestamptz default now()
);

-- 25. ANALYTICS EVENTS
create table if not exists analytics_events (
  id uuid primary key default uuid_generate_v4(),
  event_name text not null,
  properties jsonb default '{}'::jsonb,
  user_id uuid,
  session_id text,
  page_url text,
  timestamp timestamptz default now()
);

-- ============================================================
-- INDEXES
-- ============================================================
create index idx_vehicles_status on vehicles(status);
create index idx_vehicles_featured on vehicles(featured) where featured = true;
create index idx_vehicles_subsidiary on vehicles(subsidiary_id);
create index idx_vehicles_make_model on vehicles(make, model);
create index idx_vehicles_slug on vehicles(slug);
create index idx_vehicle_images_vehicle on vehicle_images(vehicle_id);

create index idx_projects_subsidiary on interior_projects(subsidiary_id);
create index idx_projects_status on interior_projects(status);
create index idx_projects_featured on interior_projects(featured) where featured = true;
create index idx_projects_slug on interior_projects(slug);
create index idx_project_images_project on project_images(project_id);

create index idx_inquiries_subsidiary on inquiries(subsidiary_id);
create index idx_inquiries_status on inquiries(status);
create index idx_inquiries_type on inquiries(type);

create index idx_crm_contacts_email on crm_contacts(email);
create index idx_crm_leads_status on crm_leads(status);
create index idx_crm_leads_assigned on crm_leads(assigned_to);

create index idx_audit_logs_entity on audit_logs(entity_type, entity_id);
create index idx_audit_logs_user on audit_logs(user_id);
create index idx_audit_logs_created on audit_logs(created_at);

create index idx_analytics_events_name on analytics_events(event_name);
create index idx_analytics_events_timestamp on analytics_events(timestamp);

-- ============================================================
-- AUTO-UPDATE TRIGGERS
-- ============================================================
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_profiles_updated_at
  before update on profiles for each row execute function update_updated_at();

create trigger update_vehicles_updated_at
  before update on vehicles for each row execute function update_updated_at();

create trigger update_projects_updated_at
  before update on interior_projects for each row execute function update_updated_at();

create trigger update_inquiries_updated_at
  before update on inquiries for each row execute function update_updated_at();

create trigger update_services_updated_at
  before update on services for each row execute function update_updated_at();

create trigger update_subsidiaries_updated_at
  before update on subsidiaries for each row execute function update_updated_at();

create trigger update_company_info_updated_at
  before update on company_info for each row execute function update_updated_at();

-- ============================================================
-- AUTO-CREATE PROFILE ON SIGNUP
-- ============================================================
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    'customer'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users for each row execute function handle_new_user();
