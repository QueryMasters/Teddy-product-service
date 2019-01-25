const { Client, Pool } = require('pg');

// Creates a new Client with given information.
const db = new Pool ({
  host: 'ec2-18-224-151-210.us-east-2.compute.amazonaws.com',
  user: 'postgres',
  password: '',
  database: 'product_service',
  port: '5432'
});

module.exports = db;
