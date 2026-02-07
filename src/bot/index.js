const { ClientService, ConversationService, ProposalService, PaymentService, ContractService } = require("../services");
const states = require("./states");

class Chatbot {
    constructor() {
        this.clientService = ClientService;
        this.conversationService = ConversationService;
        this.proposalService = ProposalService;
        this.paymentService = PaymentService;
        this.contractService = ContractService;
    }

    async handleMessage(phone, message) {
        const client = await this.clientService.getOrCreateClient(phone);
        const conversation = await this.conversationService.getOrCreateConversation(client.id, 'whatsapp');

        switch (conversation.currentState) {
            case states.INITIAL:
                await this.conversationService.updateState(conversation.id, states.WAITING_CONSENT);
                return "Welcome! Do you agree with our terms of service? (yes/no)";

            case states.WAITING_CONSENT:
                if (message.toLowerCase() === 'yes') {
                    await this.clientService.updateLgpdConsent(client.id, true);
                    await this.conversationService.updateState(conversation.id, states.COLLECTING_NAME);
                    return "What is your name?";
                } else {
                    return "You must accept the terms to continue.";
                }

            case states.COLLECTING_NAME:
                await this.conversationService.addResponse(conversation.id, 'name', message);
                await this.conversationService.updateState(conversation.id, states.COLLECTING_EMAIL);
                return "What is your email?";

            case states.COLLECTING_EMAIL:
                await this.conversationService.addResponse(conversation.id, 'email', message);
                await this.conversationService.updateState(conversation.id, states.COLLECTING_SERVICE);
                return "What service are you interested in?";

            case states.COLLECTING_SERVICE:
                await this.conversationService.addResponse(conversation.id, 'service', message);
                const proposal = await this.proposalService.createProposal(client.id, message, 100);
                await this.conversationService.updateState(conversation.id, states.PROPOSAL);
                return `We can do that for $100. Do you accept? (yes/no) proposalId: ${proposal.id}`;

            case states.PROPOSAL:
                const proposalId = this.getProposalId(conversation.id);
                if (message.toLowerCase() === 'yes') {
                    await this.proposalService.acceptProposal(proposalId);
                    const payment = await this.paymentService.createPayment(proposalId, 'http://example.com/payment');
                    await this.conversationService.updateState(conversation.id, states.PAYMENT);
                    return `Please follow this link to pay: http://example.com/payment paymentId: ${payment.id}`;
                } else {
                    await this.proposalService.declineProposal(proposalId);
                    await this.conversationService.updateState(conversation.id, states.FINAL);
                    return "Ok, maybe next time.";
                }

            case states.PAYMENT:
                const paymentId = this.getPaymentId(conversation.id);
                await this.paymentService.confirmPayment(paymentId, 'receipt.pdf');
                const contract = await this.contractService.createContract(this.getProposalId(conversation.id), 'v1');
                await this.conversationService.updateState(conversation.id, states.CONTRACT);
                return `Thank you for your payment. Please review and accept the contract. contractId: ${contract.id}`;

            case states.CONTRACT:
                const contractId = this.getContractId(conversation.id);
                if (message.toLowerCase() === 'yes') {
                    await this.contractService.acceptContract(contractId);
                    await this.conversationService.updateState(conversation.id, states.FINAL);
                    return "Thank you for your business!";
                } else {
                    return "You must accept the contract to continue.";
                }

            default:
                return "Sorry, I didn't understand that.";
        }
    }

    async getProposalId(conversationId) {
        const formResponse = await FormResponseRepository.findOne({ where: { ConversationId: conversationId, step: 'service' } });
        const proposal = await ProposalRepository.findOne({ where: { ClientId: formResponse.Conversation.ClientId } });
        return proposal.id;
    }

    async getPaymentId(conversationId) {
        const proposalId = await this.getProposalId(conversationId);
        const payment = await PaymentRepository.findOne({ where: { ProposalId: proposalId } });
        return payment.id;
    }

    async getContractId(conversationId) {
        const proposalId = await this.getProposalId(conversationId);
        const contract = await ContractRepository.findOne({ where: { ProposalId: proposalId } });
        return contract.id;
    }
}

module.exports = new Chatbot();