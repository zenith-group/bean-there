const express = require('express');
const path = require('path');
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/../client/public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});