const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category');
const Location = require('./Location');

const Product = sequelize.define('Product', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        }
    },
    LocationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Location,
            key: 'id'
        }
    }
});

Product.belongsTo(Category, { foreignKey: 'CategoryId' });
Product.belongsTo(Location, { foreignKey: 'LocationId' });

module.exports = Product;


