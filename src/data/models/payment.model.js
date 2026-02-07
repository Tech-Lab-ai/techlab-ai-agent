const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Proposal = require('./proposal.model');

const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    link: {
        type: DataTypes.STRING,
    },
    receipt: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
    },
});

Payment.belongsTo(Proposal);
Proposal.hasOne(Payment);

module.exports = Payment;