const {Sequelize, QueryTypes, DataTypes } = require('sequelize');
let sequelize = new Sequelize('sqlite:db.sqlite');

export default sequelize.define('Movie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowMull: false,
    },
    description: {
        type: DataTypes.TEXT
    }
}, {tableName: 'movies', timestamps:false});