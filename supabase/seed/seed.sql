-- Development seed data
BEGIN;

INSERT INTO subsidiaries (name, slug, description, contact_email, contact_phone, sort_order)
VALUES
  ('SarkiMota Automotive', 'automotive', 'Luxury automotive sales, financing, and aftermarket services', 'auto@sarkimota.com', '+234 800 SARKI AUTO', 1),
  ('SarkiMota Interiors', 'interiors', 'Premium interior design, fit-out, and lifestyle solutions', 'interiors@sarkimota.com', '+234 800 SARKI INTERIOR', 2)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO company_info (key, value) VALUES
  ('about', '{"foundingYear":2010,"headquarters":"Abuja, Nigeria","mission":"To redefine excellence across industries.","vision":"To be Africa''s most admired holding company."}'),
  ('contact', '{"email":"info@sarkimota.com","phone":"+234 800 SARKIMOTA","address":{"line1":"Olusegun Obasanjo Way","city":"Central Business District","state":"Abuja","country":"Nigeria"}}'),
  ('social', '{"instagram":"@sarkimotagroup","twitter":"@sarkimotagroup","linkedin":"sarkimota-group"}')
ON CONFLICT (key) DO NOTHING;

INSERT INTO services (subsidiary_id, name, slug, description, sort_order)
SELECT id, 'Vehicle Sales', 'vehicle-sales', 'New and pre-owned luxury vehicles', 1
FROM subsidiaries WHERE slug = 'automotive';

INSERT INTO services (subsidiary_id, name, slug, description, sort_order)
SELECT id, 'Vehicle Financing', 'vehicle-financing', 'Flexible financing solutions', 2
FROM subsidiaries WHERE slug = 'automotive';

INSERT INTO services (subsidiary_id, name, slug, description, sort_order)
SELECT id, 'Residential Design', 'residential-design', 'Luxury home interior design', 1
FROM subsidiaries WHERE slug = 'interiors';

INSERT INTO services (subsidiary_id, name, slug, description, sort_order)
SELECT id, 'Commercial Interiors', 'commercial-interiors', 'Office and retail design', 2
FROM subsidiaries WHERE slug = 'interiors';

INSERT INTO leadership (name, title, bio, image_url, subsidiary_id, sort_order)
VALUES
  ('SarkinMota', 'Chief Executive Officer', 'Visionary leader driving excellence across industries with a focus on innovation and quality.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', NULL, 1)
ON CONFLICT DO NOTHING;

COMMIT;
