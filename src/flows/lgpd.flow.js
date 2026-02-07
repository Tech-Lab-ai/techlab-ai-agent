
const { getResponse } = require('../bot/responses');

// Armazenamento temporário de dados do formulário
const formData = new Map();

async function handleLgpd(message, userId) {
  const consent = message.body.trim().toLowerCase();
  if (consent === 'sim') {
    formData.set(userId, {});
    return { state: 'FORM_NAME', response: getResponse('form.name') };
  } else {
    return { state: 'END', response: getResponse('lgpdRejected') };
  }
}

module.exports = { handleLgpd };
