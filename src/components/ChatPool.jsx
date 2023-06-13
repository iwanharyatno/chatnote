import { useRef, useEffect } from 'react';
import { useState } from 'react';

const MILLIS_IN_SECOND = 1000;
const SECONDS_IN_HOUR = 3600;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function ChatPool({ messages, className }) {
  const [numMessage, setNumMessage] = useState(10);
  const maxMessages = messages.length > numMessage ?
    messages.slice(messages.length - numMessage, messages.length) :
    messages;

  const showLinks = () => {
    if (numMessage < messages.length) {
      return (
        <LinkButton
          onClick={() => setNumMessage(numMessage + 10)}>
            Show more..
        </LinkButton>
      );
    }
    if (
      maxMessages.length === messages.length &&
      numMessage !== 10
    ) {
      return (
        <LinkButton
          onClick={() => setNumMessage(10)}>
            Show less
        </LinkButton>
      );
    }
    return null;
  }

  useEffect(() => {
    const messagesContainer = document.querySelector('.messages');
    messagesContainer.lastElementChild.scrollIntoView();
  }, [messages]);

  return (
    <ul className={'messages overflow-scroll bg-gray-100/50 ' + className}>
      {showLinks()}
      {
        maxMessages.length ?
        showMessages(maxMessages) :
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

function showMessages(messages) {
  const adjustedMessages = [
    <DateSeparator date={messages[0].date} key={messages[0].id.toString() + random()} />,
    <ChatBox message={messages[0]} key={messages[0].id.toString() + random()} />,
  ];

  for (var i = 1; i < messages.length; i++) {
    adjustedMessages.push(
      showMessagesWithSeparator(messages[i - 1], messages[i])
    );
  }

  return adjustedMessages;
}

function showMessagesWithSeparator(prevMessage, currentMessage) {
  const result = [];

  if (getDaysFromDate(prevMessage.date) !== getDaysFromDate(currentMessage.date)) {
    result.push(
      <DateSeparator date={currentMessage.date} key={currentMessage.id.toString() + random()} />
    );
  }

  result.push(
    <ChatBox message={currentMessage} key={currentMessage.id.toString() + random()} />
  );

  return result;
}

function DateSeparator({ date }) {
  const displayedLabel = () => {
    const currentDate = new Date();
    if (getDaysFromDate(date) === getDaysFromDate(currentDate)) {
      return 'Today';
    }
    if (getDaysFromDate(date) + 1 === getDaysFromDate(currentDate)) {
      return 'Yesterday';
    }

    const differenceDays = getDaysFromDate(currentDate) - getDaysFromDate(date);
    if (differenceDays < 7 && differenceDays > 0) {
      return DAYS[date.getDay()];
    }

    return date.toLocaleDateString();
  };
  return (
    <li className="px-3 pt-3 text-center">
      <span className="bg-gray-500 text-white p-2 rounded">{displayedLabel()}</span>
    </li>
  );
}

function LinkButton({ onClick, className, children }) {
  return (
    <li className={'px-3 pt-3 text-center ' + className} key={(+new Date()).toString() + random()}>
      <a
        className="text-blue-500 focus:text-blue-700"
        onClick={onClick}>
          {children}
      </a>
    </li>
  );
}

function ChatBox({ message }) {
  return (
    <li className="p-3 border rounded-lg m-3 bg-white break-words">
      {message.content}
      <div className="text-right italic text-gray-500">
        {`${message.date.getHours()}:${message.date.getMinutes().toString().padStart(2, "0")}`}
      </div>
    </li>
  );
}

function random(digits = 7) {
  return Math.round(
    Math.random() * Math.pow(10, digits)
  );
}

function getDaysFromDate(date) {
  const dateInMillis = date.getTime();
  const days = Math.floor(dateInMillis / (MILLIS_IN_SECOND * SECONDS_IN_HOUR * HOURS_IN_DAY));
  return days;
}

export default ChatPool;
