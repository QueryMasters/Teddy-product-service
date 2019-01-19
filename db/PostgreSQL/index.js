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

// CREATE
const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    const queryString = `INSERT INTO products (id, name, description, seller, prime_eligible, versions, image_urls, expected_date_of_arrival, five_star_reviews, four_star_reviews, three_star_reviews, two_star_reviews, one_star_reviews, answered_questions) VALUES (${product.id}, ${product.name}, ${product.description}, ${product.seller}, ${product.prime_eligible}, ${product.versions}, ${product.image_urls}, ${product.expected_date_of_arrival}, ${product.five_star_reviews}, ${product.four_star_reviews}, ${product.three_star_reviews}, ${product.two_star_reviews}, ${product.one_star_reviews}, ${product.answered_questions})`
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
const readProduct = (product) => {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * FROM products WHERE id=${id}`;
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
const updateProduct = (product, product) => {
  return new Promise((resolve, reject) => {
    const queryString = `UPDATE products SET id=${product.id}, name=${product.name}, description=${product.description}, seller=${product.seller}, prime_eligible=${product.prime_eligible}, versions=${product.versions}, image_urls=${product.image_urls}, expected_date_of_arrival=${product.expected_date_of_arrival}, five_star_reviews=${product.five_star_reviews}, four_star_reviews=${product.four_star_reviews}, three_star_reviews=${product.three_star_reviews}, two_star_reviews=${product.two_star_reviews}, one_star_reviews=${product.one_star_reviews}, answered_questions=${product.answered_questions} WHERE id=${id}`;
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
const deleteProduct = (product) => {
  return new Promise((resolve, reject) => {
    const queryString = `DELETE FROM products WHERE id=${id}`;
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