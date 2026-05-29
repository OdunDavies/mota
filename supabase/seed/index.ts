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
        headquarters: 'Abuja, Nigeria',
        mission: 'To redefine excellence across industries through innovation, quality, and an uncompromising commitment to premium experiences.',
        vision: "To be Africa's most admired holding company, setting global standards for luxury and service.",
      },
    },
    {
      key: 'contact',
      value: {
        email: 'info@sarkimota.com',
        phone: '+234 800 SARKIMOTA',
        address: {
          line1: 'Olusegun Obasanjo Way',
          city: 'Central Business District',
          state: 'Abuja',
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

  // Seed leadership
  await supabase.from('leadership').upsert([
    {
      name: 'SarkinMota',
      title: 'Chief Executive Officer',
      bio: 'Visionary leader driving excellence across industries with a focus on innovation and quality.',
      image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      subsidiary_id: null,
      sort_order: 1,
    },
  ]);

  console.log('Seeded leadership');
}

seed()
  .catch(console.error)
  .finally(() => process.exit(0));
