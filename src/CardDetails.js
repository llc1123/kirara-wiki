import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './CardDetails.css'

class CardDetails extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    setCards: PropTypes.func.isRequired,
  }

  removeCard(key) {
    let cards = this.props.cards.slice()
    cards.splice(cards.indexOf(key), 1)
    this.props.setCards(cards)
  }

  renderCardIcon(key) {
    return (
      <div
        className="cardThumb"
        key={key}
        onClick={() => this.removeCard(key)}
      >
        <img
          className="charaicon"
          src={
            process.env.PUBLIC_URL +
            '/images/charaicon/charaicon_' +
            key +
            '.png'
          }
          alt={key}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="CardDetails">
        {this.props.cards.map(key => this.renderCardIcon(key))}
      </div>
    )
  }
}

export default CardDetails
