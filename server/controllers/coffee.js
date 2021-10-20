const coffee = require('../api/coffee.js');

module.exports = {
  get: (req, res) => {
    coffee
      .list()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
};
