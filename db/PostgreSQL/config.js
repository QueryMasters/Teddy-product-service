const { Client } = require('pg');

// Creates a new client with given information.
const db = new Client({
  host: 'localhost',
  user: 'teddy',
  password: '',
  database: 'product_service',
});

module.export = db;
