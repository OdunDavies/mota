const { Client } = require('pg');
const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
(async () => {
  await c.connect();
  const { rows } = await c.query('select id, slug from subsidiaries');
  console.log(JSON.stringify(rows, null, 2));
  await c.end();
})();
