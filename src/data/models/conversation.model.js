const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Client = require('./client.model');

const Conversation = sequelize.define('Conversation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    currentState: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    channel: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'whatsapp',
    },
});

Conversation.belongsTo(Client);
Client.hasOne(Conversation);

module.exports = Conversation;