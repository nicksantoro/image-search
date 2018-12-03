import React, { Component } from 'react';
import unsplash from './api/unsplash'
import './App.css';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'

class App extends Component {

  // onSearchSubmit(term) {
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID 6da20d43ce57c31d81ff65ce36da08d99efc404bb8992e40da199187f4b72fff'
  //     }
  //   }).then((response) => {
  //     console.log(response.data.results);
  //   })
  // }

  // whenever we expect a state property to contain an obj 
  // or array we initiate that property to be empty array or empty obj

  state = {
    images: []
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="App ui center aligned container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
