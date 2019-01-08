import React, {Component, Fragment} from 'react';
import {Link, HashRouter, Route, Switch} from "react-router-dom";

import BurgerMenu from './Menu'
import NotFound from './NotFound';
import Start from './Start';

export default class App extends Component {
  render() {
    return (<div id="outer-container" style={{
        height: '100vh'
      }}>
      <HashRouter>
        <div>
          <BurgerMenu/>
          <main id="page-wrap" style={{height: '100vh'}}>
            <Switch>
              <Route exact path='/' component={Start}/>
              <Route path='/about' component={NotFound}/>
              <Route path='/contact' component={NotFound}/>
              <Route component={NotFound}/>
            </Switch>
          </main>

        </div>
      </HashRouter>
    </div>);
  }
}
