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
  state = {
    'lang': 'zh-CN',
  }

  setLang(lang){
    this.setState({lang: lang})
  }

  render(){
    return(
      <div className="Header">
        <Title lang={this.state.lang}/>
        <ButtonGroup>
          <Button color="primary" onClick = {() => this.setLang('zh-CN')} active={this.state.lang === 'zh-CN'}>中文</Button>
          <Button color="primary" onClick = {() => this.setLang('ja-JP')} active={this.state.lang === 'ja-JP'}>日本語</Button>
          <Button color="primary" onClick = {() => this.setLang('en-US')} active={this.state.lang === 'en-US'}>English</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Header