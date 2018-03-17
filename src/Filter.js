import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import './Filter.css'

class Filter extends Component{
  static propTypes = {
    'filter': PropTypes.object.isRequired,
    'setFilter': PropTypes.func.isRequired,
    'display': PropTypes.bool.isRequired,
  }

  clickHandler(category, item){
    const f = this.props.filter
    f[category][item][1] = !f[category][item][1]
    this.props.setFilter(f)
  }

  renderButton(color, category, item){
    return(
      <Button key={item} outline color={color} active={this.props.filter[category][item][1]} onClick={() => this.clickHandler(category, item)}>
        {this.props.filter[category][item][0]}
      </Button>
    )
  }

  render(){
    return(
      <div className={this.props.display ? 'Filter' : 'Filter hidden'}>
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.rarity).map((i) => this.renderButton('info', 'rarity', i))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.elements).map((i) => this.renderButton('success', 'elements', i))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.classes).map((i) => this.renderButton('primary', 'classes', i))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.series).map((i) => this.renderButton('secondary', 'series', i))}
        </ButtonGroup>
      </div>
    )
  }
}

export default Filter