const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Conversation = require('./conversation.model');

const FormResponse = sequelize.define('FormResponse', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    step: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    response: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

FormResponse.belongsTo(Conversation);
Conversation.hasMany(FormResponse);

module.exports = FormResponse;