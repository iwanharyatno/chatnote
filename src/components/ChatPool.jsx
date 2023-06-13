import { useRef, useEffect } from 'react';

function ChatPool({ messages, className }) {
  const maxMessages = messages.length > 10 ?
    messages.slice(messages.length - 10, messages.length) :
    messages;

  useEffect(() => {
    const messagesContainer = document.querySelector('.messages');
    messagesContainer.lastElementChild.scrollIntoView();
  });

  return (
    <ul className={'messages overflow-scroll bg-gray-100/50 ' + className}>
      {
        maxMessages.length ?
        maxMessages.map(message => (<ChatBox message={message} />)) :
        (<div className="text-center ml-5 mr-5 mt-12 text-gray-400 text-small italic">
          Hey, what's up? feel free to tell anything here.<br/>
          Your notes will only be saved locally.<br/>
          No servers, No backend or anything.<br/>
        </div>)
      }
    </ul>
  );
}

function ChatBox({ message }) {
  return (
    <li className="p-3 border rounded-lg m-3 bg-white break-words" key={message.id}>
      {message.content}
    </li>
  );
}

export default ChatPool;
