const sequelize = require('../config/database'); 
const Book = require('./book');
const Category = require('./category');

// Definicion relaciones entre datos y tablas
Category.hasMany(Book, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Book.belongsTo(Category, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  unique: true,
});

module.exports = { sequelize, Book, Category };