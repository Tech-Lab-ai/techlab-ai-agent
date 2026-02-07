const { ClientRepository } = require("../data");

class ClientService {
    async getOrCreateClient(phone) {
        let client = await ClientRepository.findOne({ where: { phone } });
        if (!client) {
            client = await ClientRepository.create({ phone });
        }
        return client;
    }

    async updateLgpdConsent(clientId, consent) {
        return ClientRepository.update(clientId, { lgpdConsent: consent });
    }
}

module.exports = new ClientService();