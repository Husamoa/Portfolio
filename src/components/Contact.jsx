import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (<section>
    <main className="contact d-flex flex-column justify-content-center">
    <div className="container align-self-center">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1>
            <strong>Contact</strong></h1>
          <hr/>
            <p>
              Do you have a question? Or are you interested in working together? Send me a message!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <a href="tel:+48-668-336-781">
            <FontAwesomeIcon icon={faPhone} color="black" size="lg"/>
            </a>
            <p>668 336 781</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <a href="mailto:kontakt@pawelbialek.pl">
            <FontAwesomeIcon icon={faEnvelope} color="black" size="lg"/>
            </a>
            <p>
              <span>kontakt@pawelbialek.pl</span>
            </p>
          </div>
        </div>
      </div>
    </main>
    </section>
    )
}

export default Contact;
