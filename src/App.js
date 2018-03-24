import React, { Component } from 'react'
import Header from './Header'
import Filter from './Filter'
import CardList from './CardList'
import CardDetails from './CardDetails'
import filter from './data/filter'
import './App.css'

class App extends Component {
  state = {
    lang: 'zh-CN',
    displayFilter: true,
    filter: filter,
    cards: [],
  }

  setLang(lang) {
    this.setState({ lang: lang })
  }

  setFilter(filter) {
    this.setState({ filter: filter })
  }

  toggleFilter() {
    this.setState({ displayFilter: !this.state.displayFilter })
  }

  setCards(cards) {
    this.setState({ cards: cards })
  }

  render() {
    return (
      <div className="App">
        <Header
          lang={this.state.lang}
          setLang={lang => this.setLang(lang)}
          toggleFilter={() => this.toggleFilter()}
        />
        <div className="main">
          <Filter
            display={this.state.displayFilter}
            filter={this.state.filter}
            setFilter={filter => this.setFilter(filter)}
          />
          <div className="Cards">
            <CardList
              filter={this.state.filter}
              cards={this.state.cards}
              setCards={cards => this.setCards(cards)}
            />
            <CardDetails
              cards={this.state.cards}
              setCards={cards => this.setCards(cards)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
