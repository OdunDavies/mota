const { readFileSync } = require('fs');
const { join } = require('path');
const { Client } = require('pg');

const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
(async () => {
  await c.connect();
  const sql = readFileSync(join(process.cwd(), 'supabase', 'seed', 'seed.sql'), 'utf-8');
  await c.query(sql);
  console.log('Seed data applied');
  await c.end();
})().catch(e => { console.error(e); process.exit(1); });
