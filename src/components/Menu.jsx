import React, {Component, Fragment} from 'react';
import {scaleRotate as Menu} from 'react-burger-menu'

export default class BugerMenu extends Component {
  render() {
    return (<Fragment>
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/about">
          About
        </a>

        <a className="menu-item" href="/portfolio">
          Portfolio
        </a>

        <a className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </Fragment>);
  }
}
