const express = require('express');
const bodyParser = require('body-parser');
const chatRouter = require('./routes/chat.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/chat', chatRouter);

module.exports = app;