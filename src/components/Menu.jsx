import React, {Component, Fragment} from 'react';
import {NavLink, HashRouter, Route, Switch} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faUser, faHome, faPhone, faFile} from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
  render() {
    return (
<Fragment>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to={"/"}>
              <FontAwesomeIcon icon={faStar}/>
              <span>Paweł Białek</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to={"/home"}>
              <FontAwesomeIcon icon={faHome}/>
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to={"/about"}>
              <FontAwesomeIcon icon={faUser}/>
              <span>About</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to={"/portfolio"}>
              <FontAwesomeIcon icon={faFile}/>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to={"/contact"}>
              <FontAwesomeIcon icon={faPhone}/>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </Fragment>);
  }
}
