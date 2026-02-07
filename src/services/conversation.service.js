const { ConversationRepository, FormResponseRepository } = require("../data");

class ConversationService {
    async getOrCreateConversation(clientId, channel) {
        let conversation = await ConversationRepository.findOne({ where: { ClientId: clientId } });
        if (!conversation) {
            conversation = await ConversationRepository.create({ ClientId: clientId, currentState: 'initial', channel });
        }
        return conversation;
    }

    async addResponse(conversationId, step, response) {
        return FormResponseRepository.create({ ConversationId: conversationId, step, response });
    }

    async updateState(conversationId, newState) {
        return ConversationRepository.update(conversationId, { currentState: newState });
    }
}

module.exports = new ConversationService();