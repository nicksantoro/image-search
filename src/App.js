import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'

class App extends Component {

  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="App ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
