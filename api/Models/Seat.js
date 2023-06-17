const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('seat', {
        seat_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        seat_column: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        seat_row:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seat_type_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        airplane_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
    },{tableName:'seat',timestamps:false})
}