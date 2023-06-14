const APP_MESSAGE_STORE_KEY = "messages";

const SECONDS_IN_MINUTE = 60;
const MILLIS_IN_SECOND = 1000;

const MessageStore = {
  save: function(messages) {
    localStorage.setItem(APP_MESSAGE_STORE_KEY, JSON.stringify(messages));
  },
  getAll: function() {
    const messagesJson = localStorage.getItem(APP_MESSAGE_STORE_KEY);
    if (messagesJson) {
      return JSON.parse(messagesJson).map(message => {
        const d = new Date(message.date);
        const timeOffsetMillis = d.getTimezoneOffset() * SECONDS_IN_MINUTE * MILLIS_IN_SECOND;
        return {
          id: message.id,
          date: new Date(d.getTime() - timeOffsetMillis),
          content: message.content,
        };
      });
    }
    return [];
  }
}

export default MessageStore;
