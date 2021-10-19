const { reviews, types } = require('../../database/models/index.js');

module.exports = {
  get: (req, res) => {
    types
      .read()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
};
