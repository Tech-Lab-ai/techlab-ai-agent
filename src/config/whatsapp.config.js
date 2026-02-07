
const { Client, LocalAuth } = require('whatsapp-web.js');

module.exports = {
  client: new Client({
    authStrategy: new LocalAuth(), // Para salvar a sessão e não precisar ler o QR Code a cada reinicialização
    puppeteer: {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  }),
};
