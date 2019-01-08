import React, {Component, Fragment} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";

import BurgerMenu from './Menu'
import NotFound from './NotFound';
import Start from './Start';


export default class App extends Component {
  render() {
    return (<div id="outer-container" style={{
        height: '100vh'
      }}>
      <BurgerMenu/>
      <main id="page-wrap">
        <Start/>
      </main>
    </div>);
  }
}
