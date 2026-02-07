const { getResponse } = require('../bot/responses');
const { formData } = require('./lgpd.flow');

function handleName(message, userId) {
    const userData = formData.get(userId);
    userData.name = message.body;
    return { state: 'FORM_COMPANY', response: getResponse('form.company') };
}

function handleCompany(message, userId) {
    const userData = formData.get(userId);
    userData.company = message.body;
    return { state: 'FORM_OBJECTIVE', response: getResponse('form.objective') };
}

function handleObjective(message, userId) {
    const userData = formData.get(userId);
    userData.objective = message.body;
    return { state: 'FORM_CONTEXT', response: getResponse('form.context') };
}

function handleContext(message, userId) {
    const userData = formData.get(userId);
    userData.context = message.body;
    return { state: 'FORM_DEADLINE', response: getResponse('form.deadline') };
}

function handleDeadline(message, userId) {
    const userData = formData.get(userId);
    userData.deadline = message.body;
    return { state: 'FORM_CONTACT', response: getResponse('form.contact') };
}

function handleContact(message, userId) {
    const userData = formData.get(userId);
    userData.contact = message.body;
    const confirmationMessage = getResponse('form.confirmation')
        .replace('{name}', userData.name)
        .replace('{company}', userData.company)
        .replace('{objective}', userData.objective)
        .replace('{context}', userData.context)
        .replace('{deadline}', userData.deadline)
        .replace('{contact}', userData.contact);
    return { state: 'FORM_CONFIRMATION', response: confirmationMessage };
}

function handleConfirmation(message, userId) {
    const confirmation = message.body.trim().toLowerCase();
    if (confirmation === 'sim') {
        // Lógica para lidar com o contrato
        return { state: 'DIAGNOSIS', response: getResponse('diagnosis') };
    } else if (confirmation === 'não') {
        return { state: 'FORM_CORRECTION', response: getResponse('form.correction') };
    } else {
        return { state: 'FORM_CONFIRMATION', response: getResponse('invalidOption') };
    }
}


module.exports = {
    handleName,
    handleCompany,
    handleObjective,
    handleContext,
    handleDeadline,
    handleContact,
    handleConfirmation,
};