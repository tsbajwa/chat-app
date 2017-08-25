import React from 'react';

export default function MessageList(props) {
  return (
    <ul className='messagelist-list'>
      {props.thread.messages.map((m) => (
        <li key={m.id} onClick={() => props.onClick(m.id)}>{m.text} @{m.time}</li>
      ))}
    </ul>
  )
}