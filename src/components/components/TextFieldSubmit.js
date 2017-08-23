import React from 'react';

export default class TextFieldSubmit extends React.Component {

  state = {
    value: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Handle Submit function')
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.value}/>
        <input type='submit' value='Send Message'/>
      </form>
    )
  }
}