import { useRef, useEffect } from 'react';
import { useState } from 'react';

function ChatPool({ messages, className }) {
  const [numMessage, setNumMessage] = useState(10);
  const maxMessages = messages.length > numMessage ?
    messages.slice(messages.length - numMessage, messages.length) :
    messages;

  useEffect(() => {
    const messagesContainer = document.querySelector('.messages');
    messagesContainer.lastElementChild.scrollIntoView();
  }, [messages]);

  return (
    <ul className={'messages overflow-scroll bg-gray-100/50 ' + className}>
      {numMessage < messages.length ? (
        <LinkButton onClick={() => setNumMessage(numMessage + 10)}>Show more..</LinkButton>
      ) : (
        <LinkButton onClick={() => setNumMessage(10)}>Show less</LinkButton>
      )}
      {
        maxMessages.length ?
        maxMessages.map(message => (<ChatBox message={message} />)) :
        (
          <div className="text-center ml-5 mr-5 mt-12 text-gray-400 text-small italic">
            Hey, what's up? feel free to tell anything here.<br/>
            Your notes will only be saved locally.<br/>
            No servers, No backend or anything.<br/>
          </div>
        )
      }
    </ul>
  );
}

function LinkButton({ onClick, children }) {
  return (
    <li className="px-3 pt-3 text-center" key={+new Date()}>
      <a
        className="text-blue-500 focus:text-blue-700"
        href="javascript:void(0)"
        onClick={onClick}>
          {children}
      </a>
    </li>
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
