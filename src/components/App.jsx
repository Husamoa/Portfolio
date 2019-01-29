import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Menu from './Menu'
import NotFound from './NotFound';
import About from './About';

const App = ({location}) => {

  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = {
    enter: 300,
    exit: 200
  }
  return (<div>
    <div className="row no-gutters">
      <div className="col-xl-5 bg-light">
        <Menu/>
      </div>
      <div className="col-xl-7 bg-light d-flex">
        <TransitionGroup component="main" className="main-page">
          <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear={ true }>
            <Switch location={location}>
              <Route exact={true} path='/' component={About}/>
              <Route exact={true} path='/about' component={About}/>
              <Route path='/contact' component={NotFound}/>
              <Route component={NotFound}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>

    </div>
  </div>);
}

export default withRouter(App);
