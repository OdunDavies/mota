const { Client } = require('pg');
const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
(async () => {
  await c.connect();
  await c.query(`
    insert into subsidiaries (name, slug, description, contact_email, contact_phone, sort_order)
    values ('SarkiMota Group', 'corporate', 'Corporate headquarters for the SarkiMota Group of Companies', 'info@sarkimota.com', '+234 800 SARKIMOTA', 0)
    on conflict (slug) do nothing
  `);
  console.log('Corporate subsidiary added');
  await c.end();
})().catch(e => { console.error(e); process.exit(1); });
