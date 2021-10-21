-- INSTRUCTIONS:
    -- run this file AFTER running the schema.sql file. This will load data into tables
    -- COPY requires an absolute path, so replace the absolute paths below with yours
    -- run command: psql postgres (if not already in postgres terminal)
    -- run command: \c coffee (if not already in coffee DB)
    -- run command: \i data.sql

COPY coffee_type (name, temperature)
FROM '/PATH/TO/FILE/coffee_type_data.csv' -- REPLACE THIS
DELIMITER ',';


COPY reviews (user_id, rating, coffee_type, drink_name, review_body, date, store_id, store_name, store_img_url, store_url)
FROM '/PATH/TO/FILE/reviews.csv' -- REPLACE THIS
DELIMITER ',' CSV HEADER;

-- -- Run these commands in terminal if you want to test
-- SELECT * FROM coffee_type;
-- SELECT * FROM reviews WHERE review_id = 1;