const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api_produtos_db', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});

module.exports = sequelize;