import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Menu from './Menu'
import NotFound from './NotFound';
import About from './About';
import Technologies from './Technologies';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Loading from './ReactLoading';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({isLoading: false}), 2500);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    if (this.state.isLoading) {
      return (<section className="loader d-flex justify-content-center">
        <div className="align-self-center">
          <Loading/>
        </div>
      </section>);
    }

    const currentKey = this.props.location.pathname.split('/')[1] || '/';

    return (<div>
      <div className="row no-gutters">
        <div className="col-xl-5 bg-light">
          <Menu/>
        </div>
        <div className="col-xl-7 d-flex">
          <TransitionGroup component="main" className="main-page">
            <CSSTransition key={currentKey} timeout={300} classNames="fade" appear={true}>
              <Switch location={this.props.location}>
                <Route exact={true} path='/' component={About}/>
                <Route path='/portfolio' component={Portfolio}/>
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
}

export default withRouter(App);
