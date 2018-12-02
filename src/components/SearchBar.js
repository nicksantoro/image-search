// make class because need to use state to handle user input

import React, { Component } from 'react'

class SearchBar extends Component {

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = {
    term: ''
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />

            {/* <input type="text" onChange={this.onInputChange} /> */}
            {/* ////// alternate event handler syntax /////// */}
            {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}

          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
