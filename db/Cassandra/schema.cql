DROP KEYSPACE IF EXISTS product_service;

CREATE KEYSPACE IF NOT EXISTS product_service
  WITH REPLICATION = {
    'class' : 'SimpleStrategy', 'replication_factor' : 1 
  };

USE product_service;

DROP TABLE IF EXISTS "new";

CREATE TABLE "new" (
  partition_id INT,
  clustering_id INT,
  qty_in_stock INT,
  price DECIMAL,
  PRIMARY KEY (partition_id, clustering_id)
);

DROP TABLE IF EXISTS "old";

CREATE TABLE "old" (
  partition_id INT,
  clustering_id INT,
  qty_in_stock INT,
  price DECIMAL,
  PRIMARY KEY (partition_id, clustering_id)
);

DROP TABLE IF EXISTS "versions";

CREATE TABLE "versions" (
  partition_id INT,
  clustering_id INT,
  new INT,
  old INT,
  PRIMARY KEY (partition_id, clustering_id)
);

DROP TABLE IF EXISTS "products";

CREATE TABLE "products" (
	partition_id INT,
  clustering_id INT,
  name TEXT,
	description TEXT,
	seller TEXT, 
	prime_eligible BOOLEAN,
	versions INT,
	image_urls TEXT,
	expected_date_of_arrival TEXT,
	five_star_reviews INT,
  four_star_reviews INT,
  three_star_reviews INT,
  two_star_reviews INT,
  one_star_reviews INT,
  answered_questions INT,
  PRIMARY KEY (partition_id, clustering_id)
);

