const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('boardingPass', {
        boarding_pass_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        purchase_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        passenger_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seat_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        flight_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{tableName:'boarding_pass',timestamps: false,})
}