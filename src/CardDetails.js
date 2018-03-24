import PropTypes from 'prop-types'
import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/fontawesome-free-solid'
import './CardDetails.css'

class CardDetails extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    activated: PropTypes.array.isRequired,
    setCards: PropTypes.func.isRequired,
    setActivated: PropTypes.func.isRequired,
  }

  removeCard(e, key) {
    e.stopPropagation()
    let cards = this.props.cards.slice()
    cards.splice(cards.indexOf(key), 1)
    this.props.setCards(cards)

    let activated = this.props.activated.slice()
    activated.splice(activated.indexOf(key), 1)
    this.props.setActivated(activated)
  }

  activateCard(key) {
    let activated = this.props.activated.slice()
    activated.splice(activated.indexOf(key), 1)
    activated.push(key)
    this.props.setActivated(activated)
  }

  renderCardIcon(key) {
    return (
      <div
        className="cardThumb"
        key={key}
        onClick={() => this.activateCard(key)}
        active={(key === this.props.activated.slice(-1)[0]).toString()}
      >
        <div className="closeButton">
          <FontAwesomeIcon
            icon={faTimesCircle}
            onClick={(e) => this.removeCard(e, key)}
          />
        </div>
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
