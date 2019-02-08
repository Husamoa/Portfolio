import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faUser, faHome, faPhone, faFile} from '@fortawesome/free-solid-svg-icons';
import {NavLink, withRouter} from 'react-router-dom';

class Menu extends Component {
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
    if (window.innerWidth <= 1199) {
      $('.collapse').collapse("hide");
      if (this.state.navClass === "") {
        this.setState({navClass: "open"})
      } else {
        this.setState({navClass: ""})
      }
    }
  }

  closeMenuCloseHamburgerMenu = () => {
    if (window.innerWidth <= 1199) {
      $('.collapse').collapse("hide");
      this.setState({navClass: ""})
    }
  }

  myPhotoMobile = () => {
    if(window.innerWidth <= 1199) {
      return(
        <div id="image-cropper">
          <img id="my-photo" src="images/my-photo.jpg"/>
        </div>
      )
    } else {
      return(
        <FontAwesomeIcon icon={faUser}/>
      )
    }
  }

  render() {
    return (<Fragment>
      <div className="menu">
        <div className="desktop-menu">
          <div id="image-cropper" className="mx-auto d-block">
            <img id="my-photo" src="images/my-photo.jpg"/>
          </div>
          <h1 className="display-4 text-uppercase text-center">
            <strong>Front-End Developer</strong>
          </h1>
          <hr/>
        </div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <NavLink onClick={this.closeMenuCloseHamburgerMenu} className="navbar-brand" to={"/"} replace={true}>
            {this.myPhotoMobile()}
            <span>Paweł Białek</span>
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
                  <NavLink className="nav-link" to={"/technologies"} replace={true}>
                    <FontAwesomeIcon icon={faStar}/>
                    <span>Skills</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/portfolio"} replace={true}>
                    <FontAwesomeIcon icon={faFile}/>
                    <span>Portfolio</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/contact"} replace={true}>
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

export default Menu;
