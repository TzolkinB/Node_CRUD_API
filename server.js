const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db          = require('./config/db');

const app = express(); //initialize the app as an instance of Express

const port = 8040;

app.use(bodyParser.urlencoded({ extended: true })); 

MongoClient.connect(db.url, (err, database) => { //use MongoClient to connect to db
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  
  app.listen(port, () => {
    console.log(`Port ${port} is live`);
  });
})
