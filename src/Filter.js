import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import './Filter.css'

class Filter extends Component{
  renderButton(color,content){
    return(
      <Button outline color={color}>{content}</Button>
    )
  }

  render(){
    const rarity = ['S','SR','SSR']
    const elements = ['Fire', 'Water', 'Earth', 'Wind', 'Sun', 'Moon']
    const classes = ['Saber', 'Magician', 'Monk', 'Knight', 'Alchemist']
    const series = [
      'Hidamari Sketch',
      'Yuyushiki',
      'School-Live!',
      'A-channel',
      'Kiniro Mosaic',
      'New Game!',
      'Magic of Stella',
      'Urara Meirocho',
      'Kill Me Baby',
      'Sakura Trick',
      'Blend S',
      'Dream Eater Merry',
    ]

    return(
      <div className="Filter">
        <ButtonGroup vertical size="sm">
          {rarity.map((i) => this.renderButton('info', i))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {elements.map((i) => this.renderButton('success', i))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {classes.map((i) => this.renderButton('primary', i))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {series.map((i) => this.renderButton('secondary', i))}
        </ButtonGroup>
      </div>
    )
  }
}

export default Filter