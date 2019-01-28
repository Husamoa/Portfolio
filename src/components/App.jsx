import React, {Component, Fragment} from 'react';
import {Link, HashRouter, Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import Menu from './Menu'
import NotFound from './NotFound';
import About from './About';

export default class App extends Component {
  render() {
    return (<div>
      <HashRouter>
        <div className="row no-gutters">
          <div className="col-xl-5 bg-light">
            <Menu/>
          </div>
          <div className="col-xl-7 bg-light">
            <Switch>
              <Route exact={true} path='/' component={About}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={NotFound}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    </div>);
  }
}
