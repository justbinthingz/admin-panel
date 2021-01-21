const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // easy to work with path and directries
const http = require('http');
const app = express();
require('dotenv').config();
const api = require('./server/routes/api')
const cors = require('cors');

app.use(cors());
app.options('*', cors());

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//set our api routes
app.use('/api', api);

//set port
const port = process.env.PORT || '3001';
app.set('port', port);

//create http server
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Ruuning on localhost:', port);
});
