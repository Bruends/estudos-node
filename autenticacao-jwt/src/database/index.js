const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nrestrc', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
