import React, {Component, Fragment} from 'react';
import {Link, HashRouter, Route, Switch} from "react-router-dom";

import Menu from './Menu'
import NotFound from './NotFound';
import Start from './Start';

export default class App extends Component {
  render() {
    return (<div className="container-fluid">
      <HashRouter>
        <div className="row">
          <div className="col-sm-4">
            <Menu/>
          </div>
          <div className="col-sm-8">
            <Switch>
              <Route exact="exact" path='/' component={Start}/>
              <Route exact="exact" path='/home' component={Start}/>
              <Route path='/about' component={NotFound}/>
              <Route path='/contact' component={NotFound}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    </div>);
  }
}
