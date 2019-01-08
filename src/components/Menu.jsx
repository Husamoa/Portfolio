import React, {Component, Fragment} from 'react';
import {scaleRotate as Menu} from 'react-burger-menu'
import {NavLink, HashRouter, Route, Switch} from "react-router-dom";


export default class BugerMenu extends Component {
  render() {
    return (<Fragment>
      <Menu isOpen={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <NavLink className="menu-item" to={"/"} replace>
          Home
        </NavLink>

        <NavLink className="menu-item" to={"/about"} replace>
          About
        </NavLink>

        <NavLink className="menu-item" to={"/portfolio"} replace>
          Portfolio
        </NavLink>

        <NavLink className="menu-item" to={"/contact"} replace>
          Contact
        </NavLink>
      </Menu>
    </Fragment>);
  }
}
