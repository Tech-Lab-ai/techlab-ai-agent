
const { getResponse } = require('./responses');

const keywords = ['ignore', 'pular', 'mudar regra', 'prompt', 'DAN'];

function handleAntiDeviation(currentState, message) {
  // Se o estado não for o inicial, e a mensagem contiver palavras-chave, é um desvio
  if (currentState !== 'GREETING') {
    const lowerCaseMessage = message.toLowerCase();
    for (const keyword of keywords) {
      if (lowerCaseMessage.includes(keyword)) {
        return true;
      }
    }
  }
  return false;
}

module.exports = { handleAntiDeviation };

