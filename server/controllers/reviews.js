const { reviews, types } = require('../../database/models/index.js');

module.exports = {
  get: (req, res) => {
    let count = req.query.count || 10;
    reviews
      .readAll([count])
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
  getByUser: (req, res) => {
    let userId = req.params.userId;
    let count = req.query.count || 10;
    reviews
      .readByUser([userId, count])
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
  getByStore: (req, res) => {
    let storeId = req.params.storeId;
    let count = req.query.count || 10;
    reviews
      .readByStore([storeId, count])
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
  post: (req, res) => {
    let time = new Date().getTime();
    let formattedTime = new Date(time);
    let dataArray = [
      req.body.user_id,
      req.body.rating,
      req.body.coffee_type,
      req.body.review_body,
      formattedTime,
      req.body.store_id,
      //req.body.coffee_name,
    ];
    reviews
      .create(dataArray)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
  put: (req, res) => {
    let dataArray = [req.params.review_id];
    reviews
      .updateHelpful(dataArray)
      .then((data) => {
        res.status(204).send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
  report: (req, res) => {
    let dataArray = [req.params.review_id];
    reviews
      .report(dataArray)
      .then((data) => {
        res.status(204).send(data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  },
};
