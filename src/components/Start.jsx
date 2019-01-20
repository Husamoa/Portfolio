import React, {Component, Fragment} from 'react';

export default class Start extends Component {
  render() {
    return (<Fragment>
      <div className="background-start d-flex justify-content-center">
      <header className="text-center text-white d-flex">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto">
              <h1 className="text-uppercase text-white">
                <strong>Front-end developer</strong>
              </h1>
              <hr/>
              </div>
              <div className="col-xl-8 mx-auto">
                <p className="text-faded mb-5">Junior front-end developer.</p>
                <a className="btn btn-primary btn-lg js-scroll-trigger sr-button" href="#about">O mnie</a>
              </div>
            </div>
          </div>
        </header>
        </div>
      </Fragment>
      );
    }
}
