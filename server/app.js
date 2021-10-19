const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { reviews, types } = require('./controllers/index.js');

let app = express();

app.use(express.static(path.join(__dirname + '/../client/public')));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/types', (req, res) => {
  types.get(req, res);
});
app.get('/reviews', (req, res) => {
  reviews.get(req, res);
});
app.get('/reviews/users/:userId', (req, res) => {
  reviews.getByUser(req, res);
});
app.get('/reviews/stores/:storeId', (req, res) => {
  reviews.getByStore(req, res);
});
app.post('/reviews', (req, res) => {
  reviews.post(req, res);
})

module.exports = app;