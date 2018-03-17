import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import './Filter.css'

class Filter extends Component{
  static propTypes = {
    'filter': PropTypes.object.isRequired,
    'setFilter': PropTypes.func.isRequired,
  }

  clickHandler(category, item){
    const f = this.props.filter
    f[category][item] = !f[category][item]
    this.props.setFilter(f)
  }

  renderButton(color, category, item, option){
    return(
      <Button key={item} outline color={color} active={option} onClick={() => this.clickHandler(category, item)}>{item}</Button>
    )
  }

  render(){
    return(
      <div className="Filter">
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.rarity).map((i) => this.renderButton('info', 'rarity', i, this.props.filter.rarity[i]))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.elements).map((i) => this.renderButton('success', 'elements', i, this.props.filter.elements[i]))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.classes).map((i) => this.renderButton('primary', 'classes', i, this.props.filter.classes[i]))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.series).map((i) => this.renderButton('secondary', 'series', i, this.props.filter.series[i]))}
        </ButtonGroup>
      </div>
    )
  }
}

export default Filter