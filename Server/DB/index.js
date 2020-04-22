const Pool = require("pg").Pool;
require("dotenv").config();

module.exports = new Pool({
  user:'postgres',
  host: 'localhost',
  database:'postgres',
  password:'Tehran7786',
  port:5432
});
