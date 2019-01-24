DROP DATABASE IF EXISTS product_service;

CREATE DATABASE product_service;

-- CREATE TABLE new (
--   id INT NOT NULL PRIMARY KEY,
--   qty_in_stock INT,
--   price NUMERIC
-- );

-- CREATE TABLE old (
--   id INT NOT NULL PRIMARY KEY,
--   qty_in_stock INT,
--   price NUMERIC
-- );

-- CREATE TABLE versions (
--   id INT NOT NULL PRIMARY KEY,
--   new INT,
--   old INT,
--   FOREIGN KEY (new) REFERENCES new(id), 
--   FOREIGN KEY (old) REFERENCES old(id)
-- );

CREATE TABLE products (
	id INT NOT NULL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
	description TEXT,
	seller VARCHAR(100) NOT NULL, 
	prime_eligible BOOL NOT NULL,
	versions INT, 
  price NUMERIC,
	image_urls TEXT NOT NULL,
	expected_date_of_arrival VARCHAR(255) NOT NULL,
	five_star_reviews INT,
  four_star_reviews INT,
  three_star_reviews INT,
  two_star_reviews INT,
  one_star_reviews INT,
  answered_questions INT
  -- FOREIGN KEY (versions) REFERENCES versions(id)
);

