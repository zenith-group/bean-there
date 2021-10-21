const pool = require('../db');

const readAll = (dataArray) => {
  const queryString = `
  SELECT *
  FROM reviews
  WHERE report = false
  LIMIT $1
  `;
  return pool
    .query(queryString, dataArray)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

const readByUser = (dataArray) => {
  const queryString = `
  SELECT *
  FROM reviews
  WHERE
  user_id = $1
  AND report = false
  ORDER BY date DESC
  LIMIT $2
  `;
  return pool
    .query(queryString, dataArray)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

const readByStore = (id) => {
  const queryString = `
  SELECT *
  FROM reviews
  WHERE
  store_id = $1
  AND report = false
  ORDER BY date DESC
  `;
  return pool
    .query(queryString, [id])
    // .then((data) => {
    //   return data.rows;
    // })
    // .catch((err) => {
    //   console.error('Error: ', err);
    // });
};

const create = (dataArray) => {
  const queryString = `
  INSERT INTO reviews (
    user_id,
    rating,
    coffee_type,
    drink_name,
    review_body,
    date,
    store_id
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7)
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
  SET helpful = true
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
  SET report = true
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
  readByUser: readByUser,
  readByStore: readByStore,
  create: create,
  updateHelpful: updateHelpful,
  report: report,
};
