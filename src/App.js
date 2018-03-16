import React, { Component } from 'react'
import Filter from 'Filter'
import CardList from 'CardList'
import CardDetails from 'CardDetails'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter />
        <CardList />
        <CardDetails />
      </div>
    )
  }
}

export default App