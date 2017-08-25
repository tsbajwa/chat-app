import React from 'react';
import TextFieldSubmit from './TextFieldSubmit';
import MessageList from './MessageList';

export default function ThreadView(props) {
  return (
    <div>
      <MessageList
        onClick={props.onClick}
        thread={props.thread}
      />
      <TextFieldSubmit 
        onSubmit={props.onSubmit}
      />
    </div>
  )
}
