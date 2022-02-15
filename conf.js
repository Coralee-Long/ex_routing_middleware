const { Pool } = require("pg");

const pool = new Pool({
  user: "ommhssrt",
  host: "ella.db.elephantsql.com",
  database: "ommhssrt",
  password: "b9i3a1lt4fB7bBe7aFjTd4kLs2-h_qdd",
  port: 5432,
});

module.exports = pool;
