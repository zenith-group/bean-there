const coffee = require('../api/coffee.js');

module.exports = {
  get: (req, res, location) => {
    coffee
      .list(location)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
};
