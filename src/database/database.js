const { Sequelize } = require('sequelize');

const db = new Sequelize(
    'taskDB', //database
    'postgres', //user
    'root', //password
    {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = db;