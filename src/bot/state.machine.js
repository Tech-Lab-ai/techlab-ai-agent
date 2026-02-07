
const flow = require('./state.map');

async function getNextState(currentState, message, userId) {
  const stateDefinition = flow[currentState];

  if (!stateDefinition) {
    return { state: 'GREETING', response: getResponse('invalidOption') };
  }

  return await stateDefinition.handle(message, userId);
}

module.exports = { getNextState };
