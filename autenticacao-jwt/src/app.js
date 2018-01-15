const express = require('express');
const bodyParser = require('body-parser');

const authRouter = require('./controllers/authController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

authRouter(app);

app.listen(3000, () => {
  console.log('server on localhost:3000');
}); 