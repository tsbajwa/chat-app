import React from 'react';

export default class TextFieldSubmit extends React.Component {

  state = {
    value: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({
      value: '',
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    const btnValue = this.props.children ? 'Submit': 'Send'
    return (
      <div>
        {this.props.children}
        <form className='TextFieldSubmit' onSubmit={this.handleSubmit}>
          <input className='TextFieldSubmit__textInput' type='text' onChange={this.handleChange} value={this.state.value}/>
          <input className='TextFieldSubmit__submit' type='submit' value={btnValue}/>
        </form>
      </div>
    )
  }
}