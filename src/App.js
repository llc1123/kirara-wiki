import React, { Component } from 'react'
import Header from './Header'
import Filter from './Filter'
import CardList from './CardList'
import CardDetails from './CardDetails'
import './App.css'

class App extends Component {
  state = {
    'lang': 'zh-CN',
  }

  setLang(lang){
    this.setState({lang: lang})
  }

  render() {
    return (
      <div className='App'>
        <Header lang={this.state.lang} setLang={(lang) => this.setLang(lang)}/>
        <Filter />
        <div className='Cards'>
          <CardList />
          <CardDetails />
        </div>
      </div>
    )
  }
}

export default App