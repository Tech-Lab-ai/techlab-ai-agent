
const greetingFlow = require('../flows/greeting.flow');
const lgpdFlow = require('../flows/lgpd.flow');
const formFlow = require('../flows/form.flow');
const { getResponse } = require('./responses');

const flow = {
  GREETING: {
    handle: () => greetingFlow.handleGreeting(),
  },
  MAIN_MENU: {
    handle: (message) => greetingFlow.handleMainMenu(message),
  },
  LGPD: {
    handle: (message, userId) => lgpdFlow.handleLgpd(message, userId),
  },
  FORM_NAME: {
    handle: (message, userId) => formFlow.handleName(message, userId),
  },
  FORM_COMPANY: {
    handle: (message, userId) => formFlow.handleCompany(message, userId),
  },
  FORM_OBJECTIVE: {
    handle: (message, userId) => formFlow.handleObjective(message, userId),
  },
  FORM_CONTEXT: {
    handle: (message, userId) => formFlow.handleContext(message, userId),
  },
  FORM_DEADLINE: {
    handle: (message, userId) => formFlow.handleDeadline(message, userId),
  },
  FORM_CONTACT: {
    handle: (message, userId) => formFlow.handleContact(message, userId),
  },
  FORM_CONFIRMATION: {
    handle: (message, userId) => formFlow.handleConfirmation(message, userId),
  },
  // ... outros estados do fluxo
};

module.exports = flow;
