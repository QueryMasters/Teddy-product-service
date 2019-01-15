const { Pool, Client } = require('pg');
const Promise = require('bluebird');
const db = require('./dbConfig.js');

db.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to db');
  }
})

// CREATE
const createProduct = (productID) => {
  return new Promise((resolve, reject) => {
    const queryString = `INSERT INTO products () VALUES ()`
    db.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

// READ
const readProduct = (productID) => {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * FROM products WHERE productID=${productID}`;
    db.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

// UPDATE
const updateProduct = (product, productID) => {
  return new Promise((resolve, reject) => {
    const queryString = `UPDATE products SET `;
    db.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

// DELETE
const deleteProduct = (productID) => {
  return new Promise((resolve, reject) => {
    const queryString = `DELETE FROM products WHERE productID=${productID}`;
    db.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct,
};