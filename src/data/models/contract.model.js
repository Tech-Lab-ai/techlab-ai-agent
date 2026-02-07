const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Proposal = require('./proposal.model');

const Contract = sequelize.define('Contract', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    version: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    date: {
        type: DataTypes.DATE,
    },
});

Contract.belongsTo(Proposal);
Proposal.hasOne(Contract);

module.exports = Contract;