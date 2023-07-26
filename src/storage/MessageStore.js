import Constants from '../constants';

const MessageStore = {
  save: function(messages) {
    localStorage.setItem(Constants.APP_MESSAGE_STORE_KEY, JSON.stringify(messages));
  },
  getAll: function() {
    const messagesJson = localStorage.getItem(Constants.APP_MESSAGE_STORE_KEY);
    if (messagesJson) {
      return JSON.parse(messagesJson).map(message => ({
        id: message.id,
        date: new Date(message.date),
        content: message.content,
      }));
    }
    return [];
  }
}

export default MessageStore;
