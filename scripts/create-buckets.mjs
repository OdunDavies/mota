const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://apkvkdozahctyxhpkrei.supabase.co';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const buckets = ['vehicles', 'projects', 'avatars', 'media'];

for (const bucket of buckets) {
  const res = await fetch(`${SUPABASE_URL}/storage/v1/bucket`, {
    method: 'POST',
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: bucket, name: bucket, public: true }),
  });
  const data = await res.json();
  if (res.ok) {
    console.log(`Created bucket: ${bucket}`);
  } else if (data.error?.message?.includes('already exists')) {
    console.log(`Bucket already exists: ${bucket}`);
  } else {
    console.error(`Failed to create ${bucket}:`, data);
  }
}
