import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Menu from './Menu'
import NotFound from './NotFound';
import About from './About';
import Technologies from './Technologies';
import Contact from './Contact'

const App = ({location}) => {

  const currentKey = location.pathname.split('/')[1] || '/';

  return (<div>
    <div className="row no-gutters">
      <div className="col-xl-5 bg-light">
        <Menu/>
      </div>
      <div className="col-xl-7 bg-light d-flex">
        <TransitionGroup component="main" className="main-page">
          <CSSTransition key={currentKey} timeout={300} classNames="fade" appear={ true }>
            <Switch location={location}>
              <Route exact={true} path='/' component={About}/>
              <Route path='/technologies' component={Technologies}/>
              <Route path='/contact' component={Contact}/>
              <Route component={NotFound}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>

    </div>
  </div>);
}

export default withRouter(App);
