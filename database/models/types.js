const pool = require('../db');

const readAll = () => {
  const queryString = `
    SELECT * FROM coffee_type
  `;
  return pool
    .query(queryString)
    .then((data) => {
      console.log('data: ', data);
      return data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

module.exports = {
  readAll: readAll,
};
