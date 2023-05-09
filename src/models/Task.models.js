const { DataTypes } = require('sequelize');
const db = require('../database/database');

const Task = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    complete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},{
    timestamps: false
});

module.exports = Task;


