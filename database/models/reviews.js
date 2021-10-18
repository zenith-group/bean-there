const pool = require('../db');

const readAll = (dataArray) => {
  const queryString = `
  SELECT *
  FROM reviews
  WHERE store_id = $1
  AND report = false
  `;
  return pool
    .query(queryString, dataArray)
    .then((data) => {
      console.log('data: ', data);
      return data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

const create = (dataArray) => {
  const queryString = `
  INSERT INTO reviews (user_id, rating, coffee_type, review_body, date, store_id)
  VALUES ($1, $2, $3, $4, $5, $6)
  `;
  return pool
    .query(queryString, dataArray)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

const updateHelpful = (dataArray) => {
  const queryString = `
  UPDATE reviews
  SET helpful = helpful + 1
  WHERE review_id = $1
  `;
  return pool
    .query(queryString, dataArray)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

const report = (dataArray) => {
  const queryString = `
  UPDATE revuews
  SET report = t
  WHERE id = $1
  `;
  return pool
    .query(queryString, dataArray)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

module.exports = {
  readAll: readAll,
  create: create,
  updateHelpful: updateHelpful,
  report: report,
};
