const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

let database = null;

module.exports = (app) => {
  if(!database) {
    const config = app.config;
    sequelize = new sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );

    database = {
      sequelize,
      Sequelize,
      models: []
    };

    sequelize.sync().done( () => database ) ; 
  }
  return database;
}