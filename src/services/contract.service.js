const { ContractRepository } = require("../data");

class ContractService {
    async createContract(proposalId, version) {
        return ContractRepository.create({ ProposalId: proposalId, version });
    }

    async acceptContract(contractId) {
        return ContractRepository.update(contractId, { accepted: true, date: new Date() });
    }
}

module.exports = new ContractService();