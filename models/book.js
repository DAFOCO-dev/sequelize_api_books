const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Book extends Model {}

// inicializacion de la tabla de libros defniendo campos y tipo de datos 

Book.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories', 
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Book',
  tableName: 'books', 
  timestamps: false,
});

module.exports = Book;