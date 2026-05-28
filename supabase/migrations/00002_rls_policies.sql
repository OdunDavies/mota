-- ============================================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================================

-- Enable RLS on all tables (excluding auth schema tables which require supabase_admin)
alter table profiles enable row level security;
alter table vehicles enable row level security;
alter table vehicle_images enable row level security;
alter table vehicle_features enable row level security;
alter table interior_projects enable row level security;
alter table project_images enable row level security;
alter table services enable row level security;
alter table project_services enable row level security;
alter table inquiries enable row level security;
alter table test_drives enable row level security;
alter table consultations enable row level security;
alter table testimonials enable row level security;
alter table faqs enable row level security;
alter table leadership enable row level security;
alter table company_info enable row level security;
alter table saved_vehicles enable row level security;
alter table recently_viewed enable row level security;
alter table crm_contacts enable row level security;
alter table crm_interactions enable row level security;
alter table crm_leads enable row level security;
alter table audit_logs enable row level security;
alter table subsidiaries enable row level security;

-- ============================================================
-- PROFILES POLICIES
-- ============================================================
create policy "Users can view own profile"
  on profiles for select
  using (id = auth.uid());

create policy "Users can update own profile"
  on profiles for update
  using (id = auth.uid());

create policy "Staff can view all profiles"
  on profiles for select
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- SUBSIDIARIES POLICIES
-- ============================================================
create policy "Public can view active subsidiaries"
  on subsidiaries for select
  using (is_active = true);

create policy "Staff can manage subsidiaries"
  on subsidiaries for all
  using (
    exists (select 1 from profiles where id = auth.uid() and role in ('super_admin', 'group_admin'))
  );

-- ============================================================
-- VEHICLES POLICIES
-- ============================================================
create policy "Public can view available vehicles"
  on vehicles for select
  using (status = 'available');

create policy "Staff can view all vehicles"
  on vehicles for select
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

create policy "Staff can manage vehicles"
  on vehicles for insert
  with check (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

create policy "Staff can update vehicles"
  on vehicles for update
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- VEHICLE IMAGES POLICIES
-- ============================================================
create policy "Public can view vehicle images"
  on vehicle_images for select
  using (true);

create policy "Staff can manage vehicle images"
  on vehicle_images for all
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- VEHICLE FEATURES POLICIES
-- ============================================================
create policy "Public can view vehicle features"
  on vehicle_features for select
  using (true);

create policy "Staff can manage vehicle features"
  on vehicle_features for all
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- INTERIOR PROJECTS POLICIES
-- ============================================================
create policy "Public can view published projects"
  on interior_projects for select
  using (status = 'completed' or status = 'review');

create policy "Staff can view all projects"
  on interior_projects for select
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

create policy "Staff can manage projects"
  on interior_projects for insert
  with check (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

create policy "Staff can update projects"
  on interior_projects for update
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- PROJECT IMAGES POLICIES
-- ============================================================
create policy "Public can view project images"
  on project_images for select
  using (true);

create policy "Staff can manage project images"
  on project_images for all
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- INQUIRIES POLICIES
-- ============================================================
create policy "Anyone can create inquiries"
  on inquiries for insert
  with check (true);

create policy "Staff can view inquiries"
  on inquiries for select
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

create policy "Staff can update inquiries"
  on inquiries for update
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- TEST DRIVES POLICIES
-- ============================================================
create policy "Anyone can book test drives"
  on test_drives for insert
  with check (true);

create policy "Staff can manage test drives"
  on test_drives for all
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- CONSULTATIONS POLICIES
-- ============================================================
create policy "Anyone can book consultations"
  on consultations for insert
  with check (true);

create policy "Staff can manage consultations"
  on consultations for all
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- SERVICES POLICIES
-- ============================================================
create policy "Public can view active services"
  on services for select
  using (is_active = true);

create policy "Staff can manage services"
  on services for all
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- TESTIMONIALS & FAQS & LEADERSHIP POLICIES
-- ============================================================
create policy "Public can view testimonials"
  on testimonials for select using (true);

create policy "Public can view faqs"
  on faqs for select using (is_active = true);

create policy "Public can view leadership"
  on leadership for select using (is_active = true);

create policy "Staff can manage content"
  on testimonials for all using (
    exists (select 1 from profiles where id = auth.uid() and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff'))
  );

create policy "Staff can manage faqs"
  on faqs for all using (
    exists (select 1 from profiles where id = auth.uid() and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff'))
  );

create policy "Staff can manage leadership"
  on leadership for all using (
    exists (select 1 from profiles where id = auth.uid() and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff'))
  );

-- ============================================================
-- COMPANY INFO POLICIES
-- ============================================================
create policy "Public can view company info"
  on company_info for select using (true);

create policy "Admins can manage company info"
  on company_info for all
  using (
    exists (select 1 from profiles where id = auth.uid() and role in ('super_admin', 'group_admin'))
  );

-- ============================================================
-- SAVED VEHICLES POLICIES
-- ============================================================
create policy "Users can manage own saved vehicles"
  on saved_vehicles for all
  using (user_id = auth.uid());

-- ============================================================
-- CRM POLICIES
-- ============================================================
create policy "Staff can manage CRM contacts"
  on crm_contacts for all
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

create policy "Staff can manage CRM interactions"
  on crm_interactions for all
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

create policy "Staff can manage CRM leads"
  on crm_leads for all
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin', 'staff')
    )
  );

-- ============================================================
-- AUDIT LOGS POLICIES
-- ============================================================
create policy "Audit logs are append-only"
  on audit_logs for insert
  with check (true);

create policy "Staff can view audit logs"
  on audit_logs for select
  using (
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role in ('super_admin', 'group_admin', 'subsidiary_admin')
    )
  );

-- Storage buckets and policies must be created via Supabase dashboard
-- (requires storage admin privileges not available through connection pooler)
-- Create buckets: vehicles, projects, avatars, media (all public)
-- Then enable RLS on storage.objects and apply policies manually.
