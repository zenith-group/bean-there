-- INSTRUCTIONS TO RUN THIS FILE:
    -- npm install (so postgres will install)
    -- "cd" into the "database" folder
    -- run command: psql postgres
    -- run command: \i schema.sql
    -- if it works, two tables will print in the console with 1 row of test data each (the test data is then deleted right after)
    -- NOTE: we're using booleans for hot/cold in the coffee_type table. Hot = TRUE, Cold = FALSE

-- Create Database
DROP DATABASE IF EXISTS coffee_reviews;
CREATE DATABASE coffee_reviews;

-- Connect to Database
\c coffee_reviews;

-- Create Table 'reviews'
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  review_id SERIAL,
  user_id VARCHAR NULL DEFAULT NULL,
  rating INT NULL DEFAULT NULL,
  coffee_type INTEGER NULL DEFAULT NULL,
  review_body VARCHAR NULL DEFAULT NULL,
  date TIMESTAMP,
  store_id VARCHAR NULL DEFAULT NULL,
  helpful BOOLEAN DEFAULT FALSE,
  report BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (review_id)
);

-- Create Table 'coffee_type'
DROP TABLE IF EXISTS coffee_type;
CREATE TABLE coffee_type (
  coffee_id SERIAL,
  name VARCHAR NULL DEFAULT NULL,
  temperature BOOLEAN DEFAULT TRUE, -- HOT = TRUE, COLD = FALSE
  PRIMARY KEY (coffee_id)
);

-- Foreign Key
ALTER TABLE reviews ADD FOREIGN KEY (coffee_type) REFERENCES coffee_type (coffee_id);

-- Insert Test Data
INSERT INTO coffee_type (name) VALUES ('mocha');
INSERT INTO reviews (user_id,coffee_type,rating,review_body,date,store_id,helpful,report) VALUES ('testuserID',1,'3','great coffee',current_timestamp,'123456','false','false');

-- Log the newly created tables
SELECT * FROM coffee_type;
SELECT * FROM reviews;

-- Delete Test Data
DELETE FROM reviews WHERE review_id = 1;
DELETE FROM coffee_type WHERE coffee_id = 1;

-- -- Log the empty tables
-- SELECT * FROM coffee_type;
-- SELECT * FROM reviews;