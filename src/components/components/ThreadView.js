import React from 'react';
import TextFieldSubmit from './TextFieldSubmit';

export default class ThreadView extends React.Component {

  state = {
    messages: ['This is the first message', 'Another message mate']
  }

  handleSubmit = (message) => {
    this.addMessage(message);
  }

  addMessage = (message) => {
    const messages = [...this.state.messages, message];
    this.setState({
      messages,
    })
  }

  handleDeleteClick = (index) => {
    const messages = [...this.state.messages.slice(0, index), ...this.state.messages.slice(index +1, this.state.messages.length)]
    this.setState({
      messages,
    })
  }

  render() {
    const messages = this.state.messages.map((message, index) => (
      <li key={index} onClick={() => this.handleDeleteClick(index)}>{message}</li>
    ))

    return (
      <div>
        <ul>
          {messages}
        </ul>
        <TextFieldSubmit 
        onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}