CREATE DATABASE product_service;


CREATE TABLE products (
	id INT NOT NULL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
	description [TEXT],
	seller VARCHAR(100) NOT NULL, 
	prime_eligible BOOL NOT NULL,
	FOREIGN KEY (versions) REFERENCES versions(id), 
	image_urls VARCHAR(500) NOT NULL,
	expected_date_of_arrival VARCHAR(255) NOT NULL,
	five_star_reviews INT,
  four_star_reviews INT,
  three_star_reviews INT,
  two_star_reviews INT,
  one_star_reviews INT,
  answered_questions INT
);

CREATE TABLE versions (
  id INT NOT NULL PRIMARY KEY,
  FOREIGN KEY (new) REFERENCES new(id), 
  FOREIGN KEY (old) REFERENCES old(id)
);

CREATE TABLE new (
  id INT NOT NULL PRIMARY KEY,
  qty_in_stock INT,
  price INT
)

CREATE TABLE old (
  id INT NOT NULL PRIMARY KEY,
  qty_in_stock INT,
  price INT
)

-- const productSchema = new mongoose.Schema({
--   id: {
--     type: Number,
--     unique: true,
--   },
--   name: String,
--   description: [String],
--   seller: String,
--   prime_eligible: Boolean,
--   versions: {
--     new: {
--       qty_in_stock: Number,
--       price: Number,
--     },
--     old: {
--       qty_in_stock: Number,
--       price: Number,
--     }
--   },
--   image_urls: [String],
--   expected_date_of_arrival: String,
--   // Number of reviews for each star:
--   five_star_reviews: Number, // Eventually fetched from /reviews API
--   four_star_reviews: Number,
--   three_star_reviews: Number,
--   two_star_reviews: Number,
--   one_star_reviews: Number,
--   // Number of answered questions about the product
--   answered_questions: Number, // Eventually fetched from /questions API
-- });