const { Sequelize } = require("sequelize");

// databse initial config
const sequelize = new Sequelize({
    dialect: 'sqlite', 
    storage: './database.sqlite' 
});

module.exports = sequelize;