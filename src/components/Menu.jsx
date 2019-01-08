import React, {Component, Fragment} from 'react';
import {scaleRotate as Menu} from 'react-burger-menu'
import {Link, HashRouter, Route, Switch} from "react-router-dom";


export default class BugerMenu extends Component {
  render() {
    return (<Fragment>
      <Menu isOpen={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Link className="menu-item" to={"/"}>
          Home
        </Link>

        <Link className="menu-item" to={"/about"}>
          About
        </Link>

        <Link className="menu-item" to={"/portfolio"}>
          Portfolio
        </Link>

        <Link className="menu-item" to={"/contact"}>
          Contact
        </Link>
      </Menu>
    </Fragment>);
  }
}
