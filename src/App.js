import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App ui container" style={{ marginTop: '20px' }}>
        <SearchBar />
      </div>
    );
  }
}

export default App;
