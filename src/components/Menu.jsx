import React, {Component, Fragment} from 'react';
import {NavLink, HashRouter, Route, Switch} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faUser, faHome, faPhone, faFile} from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "",
      collapse: "collapse"
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
    if(window.innerWidth <= 1199 ) {
      $('.collapse').collapse("hide");
      if (this.state.navClass === "") {
        this.setState({navClass: "open"})
      } else {
        this.setState({navClass: ""})
      }
    }

  }

  render() {
    return (<Fragment>
      <div className="menu">
        <div className="desktop-menu">
          <h1 className="text-uppercase text-center">
            <strong>Paweł Białek</strong>
          </h1>
          <hr/>
        </div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <NavLink className="navbar-brand" to={"/"} replace={true}>
            <FontAwesomeIcon icon={faStar}/>
            <span>FRONT-END DEV</span>
          </NavLink>
          <div className="container-fluid">
            <div onClick={this.changeNavClass} id="nav-icon" className={this.state.navClass} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`collapse navbar-collapse`} id="navbarNav" onClick={this.closeMenu}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link js-scroll-trigger" to={"/about"} replace={true}>
                    <FontAwesomeIcon icon={faUser}/>
                    <span>About</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link js-scroll-trigger" to={"/portfolio"} replace={true}>
                    <FontAwesomeIcon icon={faFile}/>
                    <span>Portfolio</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link js-scroll-trigger" to={"/contact"} replace={true}>
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
