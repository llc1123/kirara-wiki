import React, { Component } from 'react'
import Header from './Header'
import Filter from './Filter'
import CardList from './CardList'
import CardDetails from './CardDetails'
import './App.css'

class App extends Component {
  state = {
    'lang': 'zh-CN',
    'filter': {
      'rarity': {
        '☆☆☆': false,
        '☆☆☆☆': false,
        '☆☆☆☆☆': true,
      },
      'elements': {
        'Fire': true,
        'Water': true,
        'Earth': true,
        'Wind': true,
        'Sun': true,
        'Moon':true,
      },
      'classes': {
        'Saber': true,
        'Magician': true,
        'Monk': true,
        'Knight': true,
        'Alchemist': true,
      },
      'series': {
        'Hidamari Sketch': true,
        'Yuyushiki': true,
        'School-Live!': true,
        'A-channel': true,
        'Kiniro Mosaic': true,
        'New Game!': true,
        'Magic of Stella': true,
        'Urara Meirocho': true,
        'Kill Me Baby': true,
        'Sakura Trick': true,
        'Blend S': true,
        'Dream Eater Merry': true,
      },
    },
  }

  setLang(lang){
    this.setState({lang: lang})
  }

  setFilter(filter){
    this.setState({filter: filter})
  }

  render() {
    return (
      <div className='App'>
        <Header lang={this.state.lang} setLang={(lang) => this.setLang(lang)} />
        <Filter filter={this.state.filter} setFilter={(filter) => this.setFilter(filter)} />
        <div className='Cards'>
          <CardList />
          <CardDetails />
        </div>
      </div>
    )
  }
}

export default App