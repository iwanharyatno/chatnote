import { useRef, useEffect } from 'react';

function ChatPool({ messages, className }) {
  const containerRef = useRef(null);
  const maxMessages = messages.slice(messages.length - 10, messages.length);

  useEffect(() => {
    containerRef.scrollTop = containerRef.scrollHeight;
  }, [messages]);

  return (
    <div className={'overflow-scroll bg-gray-100/50 ' + className} ref={containerRef}>
      {maxMessages && maxMessages.map(message => (<ChatBox message={message} />))}
    </div>
  );
}

function ChatBox({ message }) {
  return (
    <div className="p-3 border rounded-lg m-3 bg-white">
      {message.content}
    </div>
  );
}

export default ChatPool;
