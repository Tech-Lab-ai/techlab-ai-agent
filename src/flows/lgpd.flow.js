
const { getResponse } = require('../bot/responses');
const formData = new Map(); // Usaremos um Map para armazenar os dados do formulário de cada usuário

function handleLgpd(message, userId) {
  const consent = message.body.trim().toLowerCase();
  if (consent === 'sim') {
    formData.set(userId, {}); // Inicializa o formulário para o usuário
    return { state: 'FORM_NAME', response: getResponse('form.name') };
  } else if (consent === 'não') {
    return { state: 'END', response: getResponse('lgpdRejected') };
  } else {
    return { state: 'LGPD', response: getResponse('lgpdConsent') };
  }
}

module.exports = { handleLgpd, formData };
