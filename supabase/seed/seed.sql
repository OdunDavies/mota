-- Development seed data
BEGIN;

INSERT INTO subsidiaries (name, slug, description, contact_email, contact_phone, sort_order)
VALUES
  ('SarkiMota Automotive', 'automotive', 'Luxury automotive sales, financing, and aftermarket services', 'auto@sarkimota.com', '+234 800 SARKI AUTO', 1),
  ('SarkiMota Interiors', 'interiors', 'Premium interior design, fit-out, and lifestyle solutions', 'interiors@sarkimota.com', '+234 800 SARKI INTERIOR', 2)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO company_info (key, value) VALUES
  ('about', '{"foundingYear":2010,"headquarters":"Lagos, Nigeria","mission":"To redefine excellence across industries.","vision":"To be Africa''s most admired holding company."}'),
  ('contact', '{"email":"info@sarkimota.com","phone":"+234 800 SARKIMOTA","address":{"line1":"10 Bishop Aboyade Cole Street","city":"Victoria Island","state":"Lagos","country":"Nigeria"}}'),
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

COMMIT;
