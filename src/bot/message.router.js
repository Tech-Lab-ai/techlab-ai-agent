
const { handleAntiDeviation } = require('./antiDeviation');
const { getResponse } = require('./responses');
const { userStates, transitions } = require('./state.machine');

async function handleMessage(message) {
  const userId = message.from;
  const currentState = userStates.get(userId) || 'GREETING';

  // 1. Verificação de desvio de fluxo
  if (handleAntiDeviation(currentState, message.body)) {
    return message.reply(getResponse('antiDeviation'));
  }

  // 2. Transição de estado
  const transition = transitions[currentState];
  if (transition) {
    const nextStateInfo = await transition(message, userId);
    userStates.set(userId, nextStateInfo.state);
    return message.reply(nextStateInfo.response);
  } else {
    // Lidar com estados não mapeados ou o fim do fluxo
    userStates.delete(userId); // Reinicia o estado do usuário
    return message.reply(getResponse('error'));
  }
}

module.exports = { handleMessage };
