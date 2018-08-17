const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');

const app = express(); //initialize the app as an instance of Express

const port = 8040;

app.use(bodyParser.urlencoded({ extended: true })); 

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log(`Port ${port} is live`);
});
