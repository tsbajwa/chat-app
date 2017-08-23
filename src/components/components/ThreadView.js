import React from 'react';
import TextFieldSubmit from './TextFieldSubmit';
import uuidv4 from 'uuid/v4';

export default class ThreadView extends React.Component {

  state = {
    messages: []
  }

  handleSubmit = (message) => {
    this.addMessage(message);
  }

  addMessage = (message) => {
    const newMessage = {
      text: message,
      id:uuidv4(),
      time: Date.now()
    }
    const messages = [...this.state.messages, newMessage];
    this.setState({
      messages,
    })
  }

  deleteMessage = (id) => {
    const messages = this.state.messages.filter((m) => m.id !== id)
    this.setState({
      messages,
    })
  }
  handleDeleteClick = (id) => {
    this.deleteMessage(id);
  }

  render() {
    const messages = this.state.messages.map((message) => (
      <li key={message.id} onClick={() => this.handleDeleteClick(message.id)}>{message.text} @{message.time}</li>
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