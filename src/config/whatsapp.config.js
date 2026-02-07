
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth(), // Para salvar a sessão e não precisar escanear o QR Code toda vez
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process', // This is not recommended, but can be useful in some environments.
      '--disable-gpu',
    ],
  },
});

module.exports = client;
