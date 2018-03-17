import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Table } from 'reactstrap'
import CharaList from './CharaList'
import './CardList.css'

class CardList extends Component{
  static propTypes = {
    'filter': PropTypes.object.isRequired,
  }

  renderItem(key, item){
    if (key % 10 === 1) return
    if (!this.props.filter.rarity[item.Rare][1]) return
    if (!this.props.filter.elements[item.Element][1]) return
    if (!this.props.filter.classes[item.Class][1]) return
    if (!this.props.filter.series[item.TitleType][1]) return 
    return(
      <tr>
        <th>{key}</th>
        <th>{item.Name}</th>
        <th>{this.props.filter.series[item.TitleType][0]}</th>
        <th>{this.props.filter.rarity[item.Rare][0]}</th>
        <th>{this.props.filter.classes[item.Class][0]}</th>
        <th>{this.props.filter.elements[item.Element][0]}</th>
        <th>{item.HP}</th>
        <th>{item.ATK}</th>
        <th>{item.DEF}</th>
        <th>{item.MAT}</th>
        <th>{item.MDF}</th>
        <th>{item.SPD}</th>
        <th>{item.LUK}</th>
        <th>{item.CV}</th>
      </tr>
    )
  }

  render(){
    return(
      <div className="CardList">
        <Table striped hover size="sm" responsive>
          <thead>
            <tr>
              <th>CharaID</th>
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
            {Object.keys(CharaList).map((i) => this.renderItem(i, CharaList[i]))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default CardList