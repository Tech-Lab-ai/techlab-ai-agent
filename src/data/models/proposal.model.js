const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Client = require('./client.model');

const Proposal = sequelize.define('Proposal', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    scope: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
    },
});

Proposal.belongsTo(Client);
Client.hasMany(Proposal);

module.exports = Proposal;