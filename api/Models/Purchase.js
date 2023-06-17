const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('purchase', {
        purchase_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        purchase_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },{tableName:'purchase',timestamps: false,})
}