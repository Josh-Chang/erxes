const conversationFields = `
  _id
  content
  user {
    _id
    username
    email
    details
  }
  customer {
    _id
    name
  }
`;

const channelFields = `
  _id
  name
`;

const channels = `
  query channels($params: JSON) {
    channels(params: $params) {
      ${channelFields}
    }
  }
`;

const conversations = `
  query conversations($params: ConversationListParams!) {
    conversations(params: $params) {
      ${conversationFields}
    }
  }
`;

const currentConversation = `
  query conversationsGetCurrent($_id: String) {
    conversationsGetCurrent(_id: $_id) {
      ${conversationFields}
      messages {
        _id
        content
        userId
        customerId
      }
    }
  }
`;

export default {
  conversations,
  currentConversation,
  channels
};
