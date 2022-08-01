import React, { Component } from 'react'
import '../theme/Header.css'
import Logo from '../assets/logo.png'

export default class Header extends Component {
  render() {
    return (
      <div id="headerContainer">
        <img alt='' src={Logo}/>
        </div>
    )
  }
}
