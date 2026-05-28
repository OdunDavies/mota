-- Seed vehicles for automotive inventory
BEGIN;

INSERT INTO vehicles (id, subsidiary_id, make, model, year, price, condition, fuel_type, transmission, engine, drivetrain, exterior_color, interior_color, mileage, description, status, featured, slug, vin)
VALUES
  (gen_random_uuid(), 'a5e61135-2c5b-47f1-82cc-7b8ae792897b', 'Mercedes-Benz', 'S-Class Maybach', 2024, 180000000, 'new', 'Petrol', '9G-TRONIC Automatic', '6.0L V12 Biturbo', 'AWD', 'Obsidian Black', 'Macchiato Beige', 0, 'Experience unparalleled luxury with the Mercedes-Benz S-Class Maybach. Every detail crafted for those who demand the extraordinary.', 'available', true, 'mercedes-benz-s-class-maybach-2024', 'W1K2231651A000123'),
  (gen_random_uuid(), 'a5e61135-2c5b-47f1-82cc-7b8ae792897b', 'Range Rover', 'SV Autobiography', 2024, 150000000, 'new', 'Petrol', 'ZF 8-Speed Automatic', '4.4L V8 Twin-Turbo', 'AWD', 'Santorini Black', 'Ebony/Cirrus', 0, 'The pinnacle of British luxury SUVs. Unmatched off-road capability meets handcrafted refinement.', 'available', true, 'range-rover-sv-autobiography-2024', 'SALGA3FX5RA123456'),
  (gen_random_uuid(), 'a5e61135-2c5b-47f1-82cc-7b8ae792897b', 'Porsche', '911 Turbo S', 2024, 200000000, 'new', 'Petrol', '8-Speed PDK', '3.8L Twin-Turbo Flat-6', 'AWD', 'GT Silver Metallic', 'Black/Bordeaux Red', 0, 'The ultimate sports car experience. 650 horsepower of pure engineering excellence.', 'available', true, 'porsche-911-turbo-s-2024', 'WP0AB2A92RS270001'),
  (gen_random_uuid(), 'a5e61135-2c5b-47f1-82cc-7b8ae792897b', 'BMW', 'X7 M60i', 2024, 120000000, 'new', 'Petrol', '8-Speed Steptronic', '4.4L V8 Twin-Power Turbo', 'AWD', 'Alpine White', 'Tartufo Merino', 0, 'Command the road with the flagship BMW luxury SUV. Power, space, and sophistication.', 'available', true, 'bmw-x7-m60i-2024', 'WBXYJ7C00R5G12345'),
  (gen_random_uuid(), 'a5e61135-2c5b-47f1-82cc-7b8ae792897b', 'Lexus', 'LX 600', 2024, 110000000, 'new', 'Petrol', '10-Speed Direct Shift', '3.5L V6 Twin-Turbo', 'AWD', 'Manganese Luster', 'Black Semi-Aniline', 0, 'Japanese luxury meets legendary off-road capability. The ultimate adventure companion.', 'available', true, 'lexus-lx-600-2024', 'JTJGA7CX9R4001234'),
  (gen_random_uuid(), 'a5e61135-2c5b-47f1-82cc-7b8ae792897b', 'Bentley', 'Continental GT', 2023, 250000000, 'certified_pre_owned', 'Petrol', '8-Speed Dual-Clutch', '6.0L W12', 'AWD', 'Beluga Black', 'Hotspur', 3200, 'Grand touring at its finest. A masterpiece of British automotive artistry.', 'available', true, 'bentley-continental-gt-2023', 'SCBCT3ZA7PCH12345');

-- Vehicle images
WITH v AS (SELECT id, slug FROM vehicles)
INSERT INTO vehicle_images (vehicle_id, url, is_primary, sort_order)
SELECT v.id, url, is_primary, sort_order
FROM v, (VALUES
  ('mercedes-benz-s-class-maybach-2024', 'https://images.unsplash.com/photo-1563720223185-11003d0e4c2c?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('mercedes-benz-s-class-maybach-2024', 'https://images.unsplash.com/photo-1563720223185-11003d0e4c2c?q=80&w=2000&auto=format&fit=crop', false, 2),
  ('range-rover-sv-autobiography-2024', 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('porsche-911-turbo-s-2024', 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('bmw-x7-m60i-2024', 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('lexus-lx-600-2024', 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2000&auto=format&fit=crop', true, 1),
  ('bentley-continental-gt-2023', 'https://images.unsplash.com/photo-1583182332473-b31ba08929c8?q=80&w=2000&auto=format&fit=crop', true, 1)
) AS data(slug, url, is_primary, sort_order)
WHERE v.slug = data.slug;

-- Vehicle features
WITH v AS (SELECT id, slug FROM vehicles)
INSERT INTO vehicle_features (vehicle_id, category, name, value)
SELECT v.id, cat, name, name
FROM v, (VALUES
  ('mercedes-benz-s-class-maybach-2024', 'Performance', '6.0L V12 Biturbo Engine'),
  ('mercedes-benz-s-class-maybach-2024', 'Performance', '612 HP'),
  ('mercedes-benz-s-class-maybach-2024', 'Performance', 'AWD'),
  ('mercedes-benz-s-class-maybach-2024', 'Performance', 'Air Suspension'),
  ('mercedes-benz-s-class-maybach-2024', 'Comfort', 'Executive Rear Seats'),
  ('mercedes-benz-s-class-maybach-2024', 'Comfort', 'Massage Function'),
  ('mercedes-benz-s-class-maybach-2024', 'Comfort', 'Burmester 3D Sound'),
  ('mercedes-benz-s-class-maybach-2024', 'Comfort', 'Ambient Lighting'),
  ('mercedes-benz-s-class-maybach-2024', 'Technology', 'MBUX Infotainment'),
  ('mercedes-benz-s-class-maybach-2024', 'Technology', 'Head-Up Display'),
  ('mercedes-benz-s-class-maybach-2024', 'Technology', 'Driver Assistance Package'),
  ('mercedes-benz-s-class-maybach-2024', 'Technology', 'Night View Assist'),
  ('range-rover-sv-autobiography-2024', 'Performance', '4.4L V8 Twin-Turbo'),
  ('range-rover-sv-autobiography-2024', 'Performance', '523 HP'),
  ('range-rover-sv-autobiography-2024', 'Performance', 'Terrain Response 2'),
  ('range-rover-sv-autobiography-2024', 'Performance', 'Adaptive Air Suspension'),
  ('range-rover-sv-autobiography-2024', 'Luxury', 'Executive Class Seats'),
  ('range-rover-sv-autobiography-2024', 'Luxury', 'SV Bespoke Interior'),
  ('porsche-911-turbo-s-2024', 'Performance', '3.8L Twin-Turbo Flat-6'),
  ('porsche-911-turbo-s-2024', 'Performance', '650 HP'),
  ('porsche-911-turbo-s-2024', 'Performance', '0-100 km/h in 2.7s'),
  ('porsche-911-turbo-s-2024', 'Performance', 'Porsche Active Suspension'),
  ('porsche-911-turbo-s-2024', 'Technology', 'PCM Infotainment'),
  ('porsche-911-turbo-s-2024', 'Technology', 'Adaptive Cruise Control'),
  ('bmw-x7-m60i-2024', 'Performance', '4.4L V8 Twin-Power Turbo'),
  ('bmw-x7-m60i-2024', 'Performance', '523 HP'),
  ('bmw-x7-m60i-2024', 'Performance', 'xDrive AWD'),
  ('bmw-x7-m60i-2024', 'Comfort', 'Executive Lounge Seating'),
  ('bmw-x7-m60i-2024', 'Comfort', 'Panoramic Sky Lounge'),
  ('lexus-lx-600-2024', 'Performance', '3.5L V6 Twin-Turbo'),
  ('lexus-lx-600-2024', 'Performance', '409 HP'),
  ('lexus-lx-600-2024', 'Off-Road', 'Multi-Terrain Select'),
  ('lexus-lx-600-2024', 'Off-Road', 'Active Height Control'),
  ('bentley-continental-gt-2023', 'Performance', '6.0L W12'),
  ('bentley-continental-gt-2023', 'Performance', '650 HP'),
  ('bentley-continental-gt-2023', 'Performance', '0-100 km/h in 3.6s'),
  ('bentley-continental-gt-2023', 'Luxury', 'Handcrafted Interior'),
  ('bentley-continental-gt-2023', 'Luxury', 'Diamond-in-Diamond Quilting'),
  ('bentley-continental-gt-2023', 'Luxury', 'Naim Audio System')
) AS data(slug, cat, name)
WHERE v.slug = data.slug;

COMMIT;
