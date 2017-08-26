import React from 'react';

export default function MessageList(props) {
  return (
    <div className='messageListContainer'>
    <ul className='messageList'>
      {props.thread.messages.map((m) => (
        <li className='messageList__message'key={m.id} onClick={() => props.onClick(m.id)}>{m.text} <span className='messageList__message-span'>@{m.time}</span></li>
      ))}
    </ul>
    </div>
  )
}