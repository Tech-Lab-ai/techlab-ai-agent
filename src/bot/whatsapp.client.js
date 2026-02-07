
const { client } = require('../config/whatsapp.config');
const { handleMessage } = require('./message.router');

client.on('qr', (qr) => {
  console.log('QR RECEIVED', qr);
  // Gerar QR Code para autenticação
});

client.on('ready', () => {
  console.log('WhatsApp client is ready!');
});

client.on('message', async (message) => {
  await handleMessage(message);
});

module.exports = client;
