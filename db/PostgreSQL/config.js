const { Client } = require('pg');

// Creates a new Client with given information.
const db = new Client ({
  host: 'localhost',
  user: 'teddy',
  password: '',
  database: 'product_service',
});

module.exports = db;
