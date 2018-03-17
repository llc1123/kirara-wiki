import React, { Component } from 'react'
import Header from './Header'
import Filter from './Filter'
import CardList from './CardList'
import CardDetails from './CardDetails'
import './App.css'

class App extends Component {
  state = {
    'lang': 'zh-CN',
    'displayFilter': true,
    'filter': {
      'rarity': {
        2: ['☆☆☆', false],
        3: ['☆☆☆☆', false],
        4: ['☆☆☆☆☆', true],
      },
      'elements': {
        0: ['Fire', true],
        1: ['Water', true],
        2: ['Earth', true],
        3: ['Wind', true],
        4: ['Moon', true],
        5: ['Sun', true],
      },
      'classes': {
        0: ['Fighter', true],
        1: ['Magician', true],
        2: ['Priest', true],
        3: ['Knight', true],
        4: ['Alchemist', true],
      },
      'series': {
        0: ['Hidamari Sketch', true],
        1: ['Yuyushiki', true],
        2: ['School-Live!', true],
        3: ['A-channel', true],
        4: ['Kiniro Mosaic', true],
        5: ['New Game!', true],
        6: ['Magic of Stella', true],
        7: ['Urara Meirocho', true],
        8: ['Kill Me Baby', true],
        9: ['Sakura Trick', true],
        10: ['Blend S', true],
        16: ['Dream Eater Merry', true],
      },
    },
  }

  setLang(lang){
    this.setState({lang: lang})
  }

  setFilter(filter){
    this.setState({filter: filter})
  }

  toggleFilter(){
    this.setState({displayFilter: !this.state.displayFilter})
  }

  render() {
    return (
      <div className='App'>
        <Header lang={this.state.lang} setLang={(lang) => this.setLang(lang)} toggleFilter={() => this.toggleFilter()}/>
        <div className='main'>
          <Filter display={this.state.displayFilter} filter={this.state.filter} setFilter={(filter) => this.setFilter(filter)} />
          <div className='Cards'>
            <CardList filter={this.state.filter}/>
            <CardDetails />
          </div>
        </div>
      </div>
    )
  }
}

export default App