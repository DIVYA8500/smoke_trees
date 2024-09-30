// models/index.js
const sequelize = require('../config/database');
const User = require('./user');
const Address = require('./address');

const initModels = async () => {
  await sequelize.sync({ force: true });
  console.log("All models synced!");
};

module.exports = { initModels, User, Address };
