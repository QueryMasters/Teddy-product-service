-- \COPY new (id, qty_in_stock, price) FROM ./postgresqlData-new.csv DELIMITER '|' CSV HEADER

-- \COPY old (id, qty_in_stock, price) FROM ./postgresqlData-old.csv DELIMITER '|' CSV HEADER

-- \COPY versions (id, new, old) from ./postgresqlData-version.csv DELIMITER '|' CSV HEADER

\COPY products (id, name, description, seller, prime_eligible, versions, price, image_urls, expected_date_of_arrival, five_star_reviews, four_star_reviews, three_star_reviews, two_star_reviews, one_star_reviews, answered_questions) FROM ./postgresqlData-product.csv DELIMITER '|' CSV HEADER

