import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Table } from 'reactstrap'
import CharaList from './data/CharaList'
import './CardList.css'

class CardList extends Component {
  static propTypes = {
    filter: PropTypes.object.isRequired,
    cards: PropTypes.array.isRequired,
    setCards: PropTypes.func.isRequired,
  }

  addCard(key) {
    let cards = this.props.cards.slice()
    if (!cards.includes(key)) {
      cards.push(key)
    }
    this.props.setCards(cards)
  }

  renderName(a) {
    if (a.indexOf('【') > -1) {
      return (
        <div>
          {a.substr(0, a.indexOf('【'))}
          <br />
          {a.substr(a.indexOf('【'))}
        </div>
      )
    } else {
      return <div>{a}</div>
    }
  }

  renderItem(key, item) {
    if (key % 10 === 1) return
    if (!this.props.filter.rarity[item.Rare][1]) return
    if (!this.props.filter.elements[item.Element][1]) return
    if (!this.props.filter.classes[item.Class][1]) return
    if (!this.props.filter.series[item.TitleType][1]) return

    return (
      <tr key={key} onClick={() => this.addCard(key)}>
        <th className="align-middle">
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
        </th>
        <th className="align-middle">{this.renderName(item.Name)}</th>
        <th className="align-middle">
          <img
            className="titleicon"
            src={
              process.env.PUBLIC_URL +
              '/images/series/' +
              item.TitleType +
              '.png'
            }
            alt={item.TitleType}
          />
        </th>
        <th className="align-middle">
          <img
            className="titleicon"
            src={
              process.env.PUBLIC_URL + '/images/rarity/' + item.Rare + '.png'
            }
            alt={item.Rare}
          />
        </th>
        <th className="align-middle">
          <img
            className="titleicon"
            src={
              process.env.PUBLIC_URL + '/images/classes/' + item.Class + '.png'
            }
            alt={item.Class}
          />
        </th>
        <th className="align-middle">
          <img
            className="titleicon"
            src={
              process.env.PUBLIC_URL +
              '/images/elements/' +
              item.Element +
              '.png'
            }
            alt={item.Element}
          />
        </th>
        <th className="align-middle">{item.HP}</th>
        <th className="align-middle">{item.ATK}</th>
        <th className="align-middle">{item.DEF}</th>
        <th className="align-middle">{item.MAT}</th>
        <th className="align-middle">{item.MDF}</th>
        <th className="align-middle">{item.SPD}</th>
        <th className="align-middle">{item.LUK}</th>
        <th className="align-middle">{item.CV}</th>
      </tr>
    )
  }

  render() {
    return (
      <div className="CardList">
        <Table bordered striped hover size="sm" responsive>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Name</th>
              <th>Title</th>
              <th>Rarity</th>
              <th>Class</th>
              <th>Element</th>
              <th>HP</th>
              <th>ATK</th>
              <th>DEF</th>
              <th>MAT</th>
              <th>MDF</th>
              <th>SPD</th>
              <th>LUK</th>
              <th>CV</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(CharaList).map(i => this.renderItem(i, CharaList[i]))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default CardList
