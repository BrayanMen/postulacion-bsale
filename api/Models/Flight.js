const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('flight', {
        flight_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        takeoff_date_time:{
            type:DataTypes.DATE,
            allowNull: false,
        },
        takeoff_airport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        landing_date_time: {
            type: DataTypes.DATE,
            allowNull:false,
        },
        landing_airport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        airplane_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{tableName:'flight',timestamps:false})
}