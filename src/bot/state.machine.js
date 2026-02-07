
const { handleGreeting, handleMainMenu } = require('../flows/greeting.flow');
const { handleLgpd } = require('../flows/lgpd.flow');
const {
  handleName,
  handleCompany,
  handleObjective,
  handleContext,
  handleDeadline,
  handleContact,
  handleConfirmation,
} = require('../flows/form.flow');

const userStates = new Map();

const transitions = {
  GREETING: handleGreeting,
  MAIN_MENU: handleMainMenu,
  LGPD: handleLgpd,
  FORM_NAME: handleName,
  FORM_COMPANY: handleCompany,
  FORM_OBJECTIVE: handleObjective,
  FORM_CONTEXT: handleContext,
  FORM_DEADLINE: handleDeadline,
  FORM_CONTACT: handleContact,
  FORM_CONFIRMATION: handleConfirmation,
  // Adicione outros estados e transições aqui
};

module.exports = { userStates, transitions };
