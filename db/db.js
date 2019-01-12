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
const addProduct

// READ
const getProduct = (productID) => {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * FROM products WHERE productID = ${productID}`;
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
    const queryString = `UPDATE products SET product_title=${product.product_title}, vendor_name=${product.vendor_name}, review_average=${product.review_average}, review_count = ${product.review_count}, answered_questions = ${product.answered_questions}, list_price = ${product.list_price}, price = ${product.price}, description = ${product.description} WHERE productID=${productID}`;
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
const deleteProducts = (productID) => {
  return new Promise((resolve, reject) => {
    const queryString = `DELETE FROM products WHERE productID = ${productID}`;
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
  addProduct,
  getProduct,
  addPhoto,
  deleteProducts,
  updateProduct,
}