import { useState, useRef } from 'react';

function ChatPanel({ onMessage }) {
  const [content, setContent] = useState('');
  const textBoxRef = useRef(null);

  const sendMessage = () => {
    if (textBoxRef && textBoxRef.current) {
      textBoxRef.current.focus();
    }
    if (content === '') return;
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
        ref={textBoxRef}
        placeholder="What's on your mind?"
        className="font-arial border rounded flex-grow focus:outline-blue-500 p-2"
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
    date: new Date()
  }
}

export default ChatPanel;
