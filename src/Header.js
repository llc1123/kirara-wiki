import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import './Header.css'

class Title extends Component {
  render() {
    return (
      <div className="Title">
        <img
          src={process.env.PUBLIC_URL + '/images/wiki_logo.png'}
          alt="logo"
        />
      </div>
    )
  }
}

class Header extends Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    setLang: PropTypes.func.isRequired,
    toggleFilter: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="Header">
        <div className="sidebar-btn">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => this.props.toggleFilter()}
          />
        </div>
        <Title />
        <ButtonGroup>
          <Button
            color="primary"
            onClick={() => this.props.setLang('zh-CN')}
            active={this.props.lang === 'zh-CN'}
          >
            中文
          </Button>
          <Button
            color="primary"
            onClick={() => this.props.setLang('ja-JP')}
            active={this.props.lang === 'ja-JP'}
          >
            日本語
          </Button>
          <Button
            color="primary"
            onClick={() => this.props.setLang('en-US')}
            active={this.props.lang === 'en-US'}
          >
            English
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Header
