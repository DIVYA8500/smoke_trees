// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('smoketrees_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;