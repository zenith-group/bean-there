const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'coffee',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
});

// pool
//   .connect()
//   .then(() => {
//     console.log('connected to db');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

module.exports = pool;
