import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import './Header.css'

class Title extends Component{
  static propTypes = {
    'lang': PropTypes.string.isRequired,
  }

  render(){
    return(
      <div className='Title'>
        {this.props.lang}
      </div>
    )
  }
}

class Header extends Component{
  static propTypes = {
    'lang': PropTypes.string.isRequired,
    'setLang': PropTypes.func.isRequired,
  }

  render(){
    return(
      <div className="Header">
        <Title lang={this.props.lang}/>
        <ButtonGroup>
          <Button color="primary" onClick = {() => this.props.setLang('zh-CN')} active={this.props.lang === 'zh-CN'}>中文</Button>
          <Button color="primary" onClick = {() => this.props.setLang('ja-JP')} active={this.props.lang === 'ja-JP'}>日本語</Button>
          <Button color="primary" onClick = {() => this.props.setLang('en-US')} active={this.props.lang === 'en-US'}>English</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Header