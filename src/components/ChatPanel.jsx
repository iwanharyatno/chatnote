import { useState } from 'react';

function ChatPanel({ onMessage }) {
  const [content, setContent] = useState('');

  const sendMessage = () => {
    if (onMessage) {
      onMessage(
        newMessage(content)
      )
    }
    setContent('');
  }

  return (
    <div className="p-4 border-t flex justify-stretch items-end">
      <textarea
        placeholder="What's on your mind?"
        className="font-arial border rounded flex-grow focus:outline-none p-2"
        onChange={(e) => setContent(e.target.value)}
        value={content}>
      </textarea>
      <button
        className="px-5 py-2 ml-3 bg-blue-500 hover:bg-blue-700 rounded text-white"
        onClick={sendMessage}>Send</button>
    </div>
  );
}

function newMessage(content) {
  return {
    id: +new Date(),
    content,
    time: new Date()
  }
}

export default ChatPanel;
