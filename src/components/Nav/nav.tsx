import React from "react";
import { Component } from "react";
import '../../assets/tailwind.css';
const logo = require('../../static/icon.png')

class Nav extends Component {
  render() {
    return <img className="logo-ext content-center" src={logo} alt="logo"/>;
  }
}

export default Nav;

