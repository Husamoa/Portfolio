
import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Start from './Start'
import NotFound from './NotFound'

export default class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Fragment>
                        <Switch>
                            <Route exact path='/' component={Start} />
                            <Route path='/0' component={Start} />
                            <Route path='/2' component={NotFound} />
                            <Route path='/4' component={NotFound} />
                            <Route path='/5' component={NotFound} />
                            <Route component={NotFound} />
                        </Switch>
                    </Fragment>
                </HashRouter>
            </div>
        );
    }
}
