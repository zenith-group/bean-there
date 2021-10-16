-- INSTRUCTIONS:
    -- run this file AFTER running the schema.sql file. This will load data into tables
    -- COPY requires an absolute path, so replace my absolute path below with yours
    -- run command: psql postgres (if not already in postgres terminal)
    -- run command: \c coffee (if not already in coffee DB)
    -- run command: \i data.sql

COPY coffee_type (name, temperature)
FROM '/Users/charlesewing3/Documents/HackReactor/Immersive/BlueOcean/bean-there/database/coffee_type_data.csv' -- REPLACE THIS PATH TO coffee_type_data.csv
DELIMITER ',';


COPY reviews (user_id, rating, coffee_type, review_body, date, store_id)
FROM '/Users/charlesewing3/Documents/HackReactor/Immersive/BlueOcean/bean-there/database/reviews_data.csv' -- REPLACE THIS PATH TO reviews_data.csv
DELIMITER ',' CSV HEADER;

-- -- Run these commands in terminal if you want to test
-- SELECT * FROM coffee_type;
-- SELECT * FROM reviews WHERE review_id = 1;