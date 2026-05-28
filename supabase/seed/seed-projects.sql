-- Seed interior projects
BEGIN;

INSERT INTO interior_projects (id, subsidiary_id, title, slug, client_name, project_type, location, area_size, budget_range, completion_date, description, status, featured)
VALUES
  (gen_random_uuid(), '2c38abca-7afe-42c3-91e2-4373c0d4ef05', 'Eko Atlantic Penthouse', 'eko-atlantic-penthouse', 'Confidential', 'Residential', 'Eko Atlantic City, Lagos', '450 sqm', '₦100M+', '2023-12-15', 'A breathtaking penthouse overlooking the Atlantic Ocean, designed for the discerning resident who demands the extraordinary. Every element curated for luxury living.', 'completed', true),
  (gen_random_uuid(), '2c38abca-7afe-42c3-91e2-4373c0d4ef05', 'Ikoyi Executive Office', 'ikoyi-executive-office', 'Sterling Law Partners', 'Commercial', 'Ikoyi, Lagos', '800 sqm', '₦50M - ₦100M', '2024-03-20', 'A sophisticated law firm office combining traditional elegance with modern functionality. Custom millwork and premium materials throughout.', 'completed', true),
  (gen_random_uuid(), '2c38abca-7afe-42c3-91e2-4373c0d4ef05', 'Lekki Phase 1 Villa', 'lekki-phase-1-villa', 'Mr. & Mrs. Ogunlesi', 'Residential', 'Lekki Phase 1, Lagos', '650 sqm', '₦50M - ₦100M', '2024-06-10', 'A family villa reimagined for modern luxury living. Open-plan spaces with seamless indoor-outdoor flow.', 'completed', true),
  (gen_random_uuid(), '2c38abca-7afe-42c3-91e2-4373c0d4ef05', 'Victoria Island Boutique', 'victoria-island-boutique', 'Maison de Luxe', 'Retail', 'Victoria Island, Lagos', '200 sqm', '₦15M - ₦50M', '2024-01-30', 'A high-end fashion boutique designed to showcase luxury brands in an intimate, refined setting.', 'completed', true),
  (gen_random_uuid(), '2c38abca-7afe-42c3-91e2-4373c0d4ef05', 'Banana Island Residence', 'banana-island-residence', 'Confidential', 'Residential', 'Banana Island, Lagos', '1200 sqm', '₦100M+', '2024-08-01', 'An extraordinary waterfront estate. Every room designed to capture panoramic lagoon views with unparalleled elegance.', 'review', true),
  (gen_random_uuid(), '2c38abca-7afe-42c3-91e2-4373c0d4ef05', 'Victoria Tower Offices', 'victoria-tower-offices', 'WestCap Group', 'Commercial', 'Victoria Island, Lagos', '1500 sqm', '₦100M+', '2024-09-15', 'Premium office spaces across three floors of Victoria Tower. Collaborative spaces meeting rooms and executive suites.', 'completed', true);

-- Project images
WITH p AS (SELECT id, slug FROM interior_projects)
INSERT INTO project_images (project_id, url, is_primary, sort_order)
SELECT p.id, url, is_primary, sort_order
FROM p, (VALUES
  ('eko-atlantic-penthouse', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('eko-atlantic-penthouse', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop', false, 2),
  ('ikoyi-executive-office', 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('ikoyi-executive-office', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop', false, 2),
  ('lekki-phase-1-villa', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('lekki-phase-1-villa', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop', false, 2),
  ('victoria-island-boutique', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('banana-island-residence', 'https://images.unsplash.com/photo-1600584522204-0b0f0e1b4b9a?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('victoria-tower-offices', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop', true, 1)
) AS data(slug, url, is_primary, sort_order)
WHERE p.slug = data.slug;

COMMIT;
