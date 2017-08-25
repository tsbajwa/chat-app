import React from 'react';
import Tabs from './Tabs';

export default class ThreadTab extends React.Component {

  state = {
    activeThreadid: ''
  }
  handleClick = (id) => {
    this.changeActiveThread(id);
  }

  changeActiveThread = (id) => {
    this.setState({
      activeThreadid: id,
    })
  }

  render() {
    //Will need to  be changed to refer to state
    const tab = [{id: 'sdfdsf', name: 'First convo'}, {id: '3242424', name: 'Work buddy'}]
    return (
      <Tabs
      tab={tab}
      onClick={this.handleClick}
     />
    )
  }
}