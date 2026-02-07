const { PaymentRepository } = require("../data");

class PaymentService {
    async createPayment(proposalId, link) {
        return PaymentRepository.create({ ProposalId: proposalId, link });
    }

    async confirmPayment(paymentId, receipt) {
        return PaymentRepository.update(paymentId, { status: 'confirmed', receipt });
    }
}

module.exports = new PaymentService();