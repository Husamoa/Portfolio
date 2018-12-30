
import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Start from './Start';
import Menu from './Menu'
import NotFound from './NotFound';

export default class App extends Component {
    render() {
        return (
            <div>
              <div id="outer-container">
                <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
                <main id="page-wrap">
                    <Start/>
                </main>
              </div>
            </div>
        );
    }
}
