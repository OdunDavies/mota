const { Client } = require('pg');
const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
(async () => {
  await c.connect();
  await c.query('create schema if not exists _migrations');
  await c.query('create table if not exists _migrations.applied (name text primary key, applied_at timestamptz default now())');
  await c.query("insert into _migrations.applied (name) values ($1) on conflict do nothing", ['00001_initial_schema.sql']);
  await c.end();
  console.log('Done');
})().catch(e => { console.error(e); process.exit(1); });
