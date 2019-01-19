const { Pool, Client } = require('pg');
const Promise = require('bluebird');
const db = require('./config.js');

db.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to db');
  }
})