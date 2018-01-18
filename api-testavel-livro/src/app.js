const express = require('express');
const bodyParser = require('body-parser');

const dataBase = require('./config/database');
const router = require('./routes/');


const configExpress = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use('/', router);

  return app;
}

module.exports = () => dataBase.connect().then(configExpress);
