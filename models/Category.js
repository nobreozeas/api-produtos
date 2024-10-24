const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Category;