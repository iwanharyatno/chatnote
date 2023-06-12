import { useState, useEffect } from 'react';

import ChatPool from './components/ChatPool.jsx';
import ChatPanel from './components/ChatPanel.jsx';
import MessageStore from './storage/MessageStore.js';

function App() {
  const [messages, setMessages] = useState(MessageStore.getAll());

  useEffect(() => {
    MessageStore.save(messages);
  }, [messages]);

  const addNew = (message) => {
    setMessages(
      addMessage(message, messages)
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col">
      <ChatPool messages={messages} className="flex-grow" />
      <ChatPanel onMessage={addNew} />
    </div>
  );
}

function addMessage(message, messages) {
  const updatedMessages = [...messages]
  updatedMessages.push(message);
  return updatedMessages;
}

export default App
