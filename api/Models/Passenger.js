const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('passenger', {
        passenger_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dni:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },{tableName:'passenger',timestamps: false,})
}