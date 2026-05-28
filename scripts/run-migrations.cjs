const { readFileSync, readdirSync } = require('fs');
const { join } = require('path');
const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL environment variable required');
  process.exit(1);
}

const migrationsDir = join(process.cwd(), 'supabase', 'migrations');
const files = readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();

async function run() {
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  await client.query(`
    create schema if not exists _migrations;
    create table if not exists _migrations.applied (
      name text primary key,
      applied_at timestamptz default now()
    );
  `);

  const { rows: applied } = await client.query('select name from _migrations.applied');
  const appliedSet = new Set(applied.map(r => r.name));

  for (const file of files) {
    if (appliedSet.has(file)) {
      console.log(`Skipping ${file} (already applied)`);
      continue;
    }

    console.log(`Running migration: ${file}`);
    const sql = readFileSync(join(migrationsDir, file), 'utf-8');

    try {
      await client.query('BEGIN');
      await client.query(sql);
      await client.query('INSERT INTO _migrations.applied (name) VALUES ($1)', [file]);
      await client.query('COMMIT');
      console.log(`  Done: ${file}`);
    } catch (err) {
      await client.query('ROLLBACK');
      console.error(`  FAILED: ${file} — ${err.message}`);
      console.error('  Aborting.');
      await client.end();
      process.exit(1);
    }
  }

  await client.end();
  console.log('All migrations complete');
}

run().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
