
const responses = {
  greeting: 'Olá! Sou o assistente virtual da Zink.',
  mainMenu: 'Como posso te ajudar?\n1. Iniciar Orçamento\n2. Opção 2\n3. Opção 3\n4. Opção 4\n5. Falar com um consultor',
  lgpdConsent: 'Para prosseguir, preciso do seu consentimento para coletar e armazenar seus dados, de acordo com a LGPD. Você concorda? (sim/não)',
  lgpdRejected: 'Entendido. Infelizmente, não posso prosseguir sem o seu consentimento.',
  form: {
    name: 'Qual o seu nome?',
    company: 'Qual o nome da sua empresa?',
    objective: 'Qual o principal objetivo do seu projeto?',
    context: 'Existe algum contexto ou informação adicional que eu precise saber?',
    deadline: 'Qual o prazo para a conclusão do projeto?',
    contact: 'Qual o seu principal meio de contato? (email, telefone, etc.)',
    confirmation: `Confirme os dados:\nNome: {name}\nEmpresa: {company}\nObjetivo: {objective}\nContexto: {context}\nPrazo: {deadline}\nContato: {contact}\n\nOs dados estão corretos? (sim/não)`,
    correction: 'Ok, vamos corrigir. Qual informação você gostaria de alterar? (Ex: nome, empresa)',
  },
  diagnosis: 'Obrigado pelas informações! Irei encaminhar para um especialista e entrarei em contato em breve com um diagnóstico e orçamentos.',
  invalidOption: 'Opção inválida. Por favor, escolha uma das opções do menu.',
  humanHandoffInfo: 'Para falar com um de nossos consultores, envie um email para contato@zink.com.br',
  antiDeviation: 'Por favor, siga o fluxo da conversa para que eu possa te ajudar.',
  error: 'Ocorreu um erro. Por favor, tente novamente mais tarde.',
};

function getResponse(key) {
  return responses[key] || responses.error;
}

module.exports = { getResponse };
