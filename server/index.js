if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const pool = require('../database/db.js');
const app = require('./app.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port: ${PORT}`);
});
