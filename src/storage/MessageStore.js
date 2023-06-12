const APP_MESSAGE_STORE_KEY = "messages";

const MessageStore = {
  save: function(messages) {
    localStorage.setItem(APP_MESSAGE_STORE_KEY, JSON.stringify(messages));
  },
  getAll: function() {
    const messagesJson = localStorage.getItem(APP_MESSAGE_STORE_KEY);
    if (messagesJson) {
      return JSON.parse(messagesJson).map(message => ({
        ...message,
        date: new Date(message.date)
      }));
    }
    return [];
  }
}

export default MessageStore;
