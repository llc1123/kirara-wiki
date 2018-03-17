import React, { Component } from 'react'
import { Table } from 'reactstrap'
import CharaList from './CharaList'
import './CardList.css'

class CardList extends Component{
  renderItem(key, item){
    return(
      <tr>
        <th>{key}</th>
        <th>{item.Name}</th>
        <th>{item.TitleType}</th>
        <th>{item.Rare}</th>
        <th>{item.Class}</th>
        <th>{item.Element}</th>
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
              <th>TitleType</th>
              <th>Rare</th>
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