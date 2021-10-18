const express = require('express');
const path = require('path');
const morgan = require('morgan');

let app = express();

app.use(express.static(path.join(__dirname + '/../client/public')));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

module.exports = app;
