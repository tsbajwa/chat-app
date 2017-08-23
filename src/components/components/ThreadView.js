import React from 'react';
import TextFieldSubmit from './TextFieldSubmit';

export default class ThreadView extends React.Component {

  state = {
    messages: ['This is the first message', 'Another message mate']
  }

  render() {
    const messages = this.state.messages.map((message, index) => (
      <li key={index} >{message}</li>
    ))

    return (
      <div>
        <ul>
          {messages}
        </ul>
        <TextFieldSubmit />
      </div>
    )
  }
}