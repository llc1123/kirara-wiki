import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import './Filter.css'

class Filter extends Component{
  static propTypes = {
    'filter': PropTypes.object.isRequired,
    'setFilter': PropTypes.func.isRequired,
  }

  renderButton(color, content, options){
    return(
      <Button key={content} outline color={color} active={options}>{content}</Button>
    )
  }

  render(){
    return(
      <div className="Filter">
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.rarity).map((i) => this.renderButton('info', i, this.props.filter.rarity[i]))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.elements).map((i) => this.renderButton('success', i, this.props.filter.elements[i]))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.classes).map((i) => this.renderButton('primary', i, this.props.filter.classes[i]))}
        </ButtonGroup>
        <p />
        <ButtonGroup vertical size="sm">
          {Object.keys(this.props.filter.series).map((i) => this.renderButton('secondary', i, this.props.filter.series[i]))}
        </ButtonGroup>
      </div>
    )
  }
}

export default Filter