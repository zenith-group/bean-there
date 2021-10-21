const coffee = require('../api/coffee.js');

module.exports = {
  get: (req, res) => {
    let params = {
      lat: req.params.lat || 0,
      lng: req.params.lng || 0,
      term: req.query.term || 'coffee',
    };
    coffee
      .list(params)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
};
