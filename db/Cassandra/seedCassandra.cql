USE product_service;

COPY "new" (partition_id, clustering_id, qty_in_stock, price) FROM '/Users/teddy/Documents/HackReactor/SDC/Product-Service/cassandraData-new.csv' WITH DELIMITER = '|' AND HEADER = TRUE;

COPY "old" (partition_id, clustering_id, qty_in_stock, price) FROM '/Users/teddy/Documents/HackReactor/SDC/Product-Service/cassandraData-old.csv' WITH DELIMITER = '|' AND HEADER = TRUE;

COPY "versions" (partition_id, clustering_id, new, old) FROM '/Users/teddy/Documents/HackReactor/SDC/Product-Service/cassandraData-version.csv' WITH DELIMITER = '|' AND HEADER = TRUE;

COPY "products" (partition_id, clustering_id, name, description, seller, prime_eligible, versions, image_urls, expected_date_of_arrival, five_star_reviews, four_star_reviews, three_star_reviews, two_star_reviews, one_star_reviews, answered_questions) FROM '/Users/teddy/Documents/HackReactor/SDC/Product-Service/cassandraData-product.csv' WITH DELIMITER = '|' AND HEADER = TRUE;