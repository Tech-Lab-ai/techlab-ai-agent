
const expectedMessages = {
  LGPD: ['sim', 'não'],
  FORM_CONFIRMATION: ['sim', 'não'],
  // Adicione outros estados e mensagens esperadas aqui
};

function handleAntiDeviation(currentState, message) {
  const expected = expectedMessages[currentState];
  if (expected && !expected.includes(message.trim().toLowerCase())) {
    return true; // Indica que houve desvio
  }
  return false;
}

module.exports = { handleAntiDeviation };
