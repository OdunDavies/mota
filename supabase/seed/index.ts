// Seed script for development
// Run with: tsx supabase/seed/index.ts

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function seed() {
  // Seed subsidiaries
  const { data: subsidiaries } = await supabase.from('subsidiaries').upsert([
    {
      name: 'SarkiMota Automotive',
      slug: 'automotive',
      description: 'Luxury automotive sales, financing, and aftermarket services',
      contact_email: 'auto@sarkimota.com',
      contact_phone: '+234 800 SARKI AUTO',
      sort_order: 1,
    },
    {
      name: 'SarkiMota Interiors',
      slug: 'interiors',
      description: 'Premium interior design, fit-out, and lifestyle solutions',
      contact_email: 'interiors@sarkimota.com',
      contact_phone: '+234 800 SARKI INTERIOR',
      sort_order: 2,
    },
  ]).select();

  console.log('Seeded subsidiaries:', subsidiaries?.length);

  // Seed company info
  await supabase.from('company_info').upsert([
    {
      key: 'about',
      value: {
        foundingYear: 2010,
        headquarters: 'Lagos, Nigeria',
        mission: 'To redefine excellence across industries through innovation, quality, and an uncompromising commitment to premium experiences.',
        vision: 'To be Africa\'s most admired holding company, setting global standards for luxury and service.',
      },
    },
    {
      key: 'contact',
      value: {
        email: 'info@sarkimota.com',
        phone: '+234 800 SARKIMOTA',
        address: {
          line1: '10 Bishop Aboyade Cole Street',
          city: 'Victoria Island',
          state: 'Lagos',
          country: 'Nigeria',
        },
      },
    },
    {
      key: 'social',
      value: {
        instagram: '@sarkimotagroup',
        twitter: '@sarkimotagroup',
        linkedin: 'sarkimota-group',
        youtube: '@sarkimotagroup',
      },
    },
  ]);

  console.log('Seeded company info');
}

seed()
  .catch(console.error)
  .finally(() => process.exit(0));
