const { Pool } = require("pg");
const bcrypt = require("bcrypt");

const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
   ssl: {
      rejectUnauthorized: false,
   },
});

module.exports = pool;
