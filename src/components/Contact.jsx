import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (<section id="contact" className="d-flex flex-column justify-content-center align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading">
            <strong>Contact</strong></h2>
          <hr className="my-4"/>
            <p className="mb-5">
              Do you have a question? Or are you interested in working together? Send me a message!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <FontAwesomeIcon icon={faPhone}/>
            <p>668-336-781</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <FontAwesomeIcon icon={faEnvelope}/>
            <p>
              <a href="mailto:kontakt@pawelbialek.pl">kontakt@pawelbialek.pl</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Contact;
