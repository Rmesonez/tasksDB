const { Sequelize } = require('sequelize');

// const db = new Sequelize(
//     'taskDB', //database
//     'postgres', //user
//     'root', //password
//     {
//     host: 'localhost',
//     dialect: 'postgres',
// });


const db = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = db;