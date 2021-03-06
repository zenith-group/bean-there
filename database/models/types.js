const pool = require('../db');

const read = () => {
  const queryString = `
    SELECT * FROM coffee_type
  `;
  return pool
    .query(queryString)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

module.exports = {
  read: read,
};
