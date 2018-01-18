const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/testapi';

const connect = () => mongoose.connect(mongodbUrl);

module.exports = { connect };