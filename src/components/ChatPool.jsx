function ChatPool({ messages, className }) {
  return (
    <div className={'overflow-scroll bg-gray-100/50 ' + className}>
      {messages && messages.map(message => (<ChatBox message={message} />))}
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
