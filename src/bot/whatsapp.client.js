
const qrcode = require('qrcode-terminal');
const client = require('../config/whatsapp.config');
const { handleMessage } = require('./message.router');

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', handleMessage);

module.exports = client;
