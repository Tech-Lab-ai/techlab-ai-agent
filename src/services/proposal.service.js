const { ProposalRepository } = require("../data");

class ProposalService {
    async createProposal(clientId, scope, value) {
        return ProposalRepository.create({ ClientId: clientId, scope, value });
    }

    async acceptProposal(proposalId) {
        return ProposalRepository.update(proposalId, { status: 'accepted' });
    }

    async declineProposal(proposalId) {
        return ProposalRepository.update(proposalId, { status: 'declined' });
    }
}

module.exports = new ProposalService();