import React, {Component, Fragment} from 'react';
import {NavLink, HashRouter, Route, Switch} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faUser, faHome, faPhone, faFile} from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: ""
    };
  }

  changeNavClass = () => {
    if (this.state.navClass === "") {
      this.setState({navClass: "open"})
    } else {
      this.setState({navClass: ""})
    }
  }

  closeMenu = () => {
    let collapse = document.querySelector(".collapse");
    collapse.classList.remove("show");
  }

  render() {
    return (<Fragment>
      <div className="menu">
        <div className="desktop-menu">
          <h1 className="text-uppercase text-center">
            <strong>Front-end developer</strong>
          </h1>
          <hr/>
        </div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <NavLink className="navbar-brand" to={"/"} replace>
            <FontAwesomeIcon icon={faStar}/>
            <span>Paweł Białek</span>
          </NavLink>
          <div onClick={this.changeNavClass} className="container-fluid">
            <div id="nav-icon" className={this.state.navClass} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`collapse navbar-collapse`} id="navbarNav" onClick={this.closeMenu}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link js-scroll-trigger" to={"/home"} replace>
                    <FontAwesomeIcon icon={faHome}/>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link js-scroll-trigger" to={"/about"} replace>
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
                  <NavLink className="nav-link js-scroll-trigger" to={"/contact"} replace>
                    <FontAwesomeIcon icon={faPhone}/>
                    <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>);
  }
}
