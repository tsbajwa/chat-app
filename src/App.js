import React, { Component } from 'react';
import ThreadView from './components/components/ThreadView';
import Tabs from './components/components/Tabs';
import './App.css';

class App extends Component {

  handleClick = (id) => {
    console.log(id)
  }

  render() {
    const tab = [{id: 'sdfdsf', name: 'First convo'}, {id: '3242424', name: 'Work buddy'}]
    return (
      <div className="App">
        <Tabs
          tab={tab}
          onClick={this.handleClick}
         />
        <ThreadView />
      </div>
    );
  }
}

export default App;
