const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('seatType', {
        seat_type_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{tableName:'seat_type',timestamps: false,})
}