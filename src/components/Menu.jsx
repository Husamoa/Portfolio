import React, {Component, Fragment} from 'react';
import {stack as Menu} from 'react-burger-menu'
import {NavLink, HashRouter, Route, Switch} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser, faHome, faPhone, faFile } from '@fortawesome/free-solid-svg-icons'


export default class BugerMenu extends Component {
  render() {
    return (<Fragment>
      <Menu isOpen={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <h1 id={'logo'} className={'h4'}><FontAwesomeIcon icon={faStar} />
        <span>Paweł Białek</span></h1>
        <NavLink className="menu-item" to={"/"} replace>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </NavLink>

        <NavLink className="menu-item" to={"/about"} replace>
          <FontAwesomeIcon icon={faUser} />
          <span>About</span>
        </NavLink>

        <NavLink className="menu-item" to={"/portfolio"} replace>
          <FontAwesomeIcon icon={faFile} />
          <span>Portfolio</span>
        </NavLink>

        <NavLink className="menu-item" to={"/contact"} replace>
          <FontAwesomeIcon icon={faPhone} />
          <span>Contact</span>
        </NavLink>
      </Menu>
    </Fragment>);
  }
}
