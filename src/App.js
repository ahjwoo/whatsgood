import React, { Component } from 'react';
import './App.css';
import TheButton from './components/TheButton';
import TheFilter from './components/TheFilter';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TheFilter />
        <TheButton />
      </div>
    );
  }
}

export default App;
