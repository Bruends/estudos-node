const setupApp = require('./app');

setupApp
  .then( app => (
    app.listen(3000, () => {
      console.log('listening... in localhost:3000');
    })
  ))
  .catch(err => {
    console.log(err);
    process.exit(1);
  })
