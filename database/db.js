const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'coffee',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;
