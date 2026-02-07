
const { getResponse } = require('../bot/responses');

function handleGreeting() {
  return { state: 'MAIN_MENU', response: getResponse('greeting') + '\n\n' + getResponse('mainMenu') };
}

function handleMainMenu(message) {
  const option = message.body.trim();
  switch (option) {
    case '1':
      return { state: 'LGPD', response: getResponse('lgpdConsent') };
    case '5':
      return { state: 'END', response: getResponse('humanHandoffInfo') };
    default:
      return { state: 'MAIN_MENU', response: getResponse('invalidOption') };
  }
}

module.exports = { handleGreeting, handleMainMenu };
