const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Location = sequelize.define('Location', {
    nome : {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep : {
        type: DataTypes.STRING,
        allowNull: false
    },
    logradouro : {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero : {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro : {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade : {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado : {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Location;