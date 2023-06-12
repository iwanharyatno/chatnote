function ChatPool({ messages, className }) {
  return (
    <div className={'overflow-scroll ' + className}>
      {messages && messages.map(message => (<ChatBox message={message} />))}
    </div>
  );
}

function ChatBox({ message }) {
  return (
    <div className="p-4 border rounded-xl m-3">
      {message.content}
    </div>
  );
}

export default ChatPool;
