
const { getNextState } = require('./state.machine');
const { getResponse } = require('./responses');
const { handleAntiDeviation } = require('./antiDeviation');

const userState = new Map(); // Simples armazenamento em memória para o estado do usuário

async function handleMessage(message) {
  const currentState = userState.get(message.from) || 'GREETING';

  // Lógica para verificar se a mensagem é uma tentativa de desvio
  if (handleAntiDeviation(currentState, message.body)) {
    return message.reply(getResponse('antiDeviation'));
  }

  const nextState = await getNextState(currentState, message.body, message.from);
  userState.set(message.from, nextState.state);

  if (nextState.response) {
    message.reply(nextState.response);
  }
}

module.exports = { handleMessage };
