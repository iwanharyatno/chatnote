import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

import ChatPool from './ChatPool.jsx';
import ChatPanel from './ChatPanel.jsx';
import MessageStore from '../../storage/MessageStore.js';
import AuthStore from '../../storage/AuthStore.js';
import Constants from '../../constants';
import NotifBox from './NotifBox';

function MainPage() {
  const [messages, setMessages] = useState(MessageStore.getAll());
  const [showNotif, setShowNotif] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (!AuthStore.hasProtected()) setShowNotif(true);
    }, 2000)
  }, []);

  useEffect(() => {
    MessageStore.save(messages);
  }, [messages]);

  const addNew = (message) => {
    setMessages(
      addMessage(message, messages)
    );
  };

  const handleRedirectToProtect = () => {
    navigate(Constants.Path.Protect);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col">
      <NotifBox
        show={showNotif}
        action="How?"
        message="Protect your messages"
        onClose={() => setShowNotif(false)}
        onAction={handleRedirectToProtect} />
      <ChatPool messages={messages} className="flex-grow pt-3" />
      <ChatPanel onMessage={addNew} />
    </div>
  );
}

function addMessage(message, messages) {
  const updatedMessages = [...messages]
  updatedMessages.push(message);
  return updatedMessages;
}

export default MainPage;
