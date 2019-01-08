import React, {Component, Fragment} from 'react';
import {scaleRotate as Menu} from 'react-burger-menu'

export default class BugerMenu extends Component {
  render() {
    return (<Fragment>
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/burgers">
          About
        </a>

        <a className="menu-item" href="/pizzas">
          Portfolio
        </a>

        <a className="menu-item" href="/desserts">
          Contact
        </a>
      </Menu>
    </Fragment>);
  }
}
