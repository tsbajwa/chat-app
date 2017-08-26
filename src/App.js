import React, { Component } from 'react';
import { ThreadTab } from './components/containers/ThreadTab';
import { ThreadViewContainer } from './components/containers/ThreadViewContainer';
import './App.css';
import { NewThread } from './components/containers/NewThread';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ThreadTab />
        <ThreadViewContainer />
        <NewThread />
      </div>
    );
  }
}
