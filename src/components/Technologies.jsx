import React from 'react';

const Technologies = () => {
  return(
    <section id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Technologie</h2>
          <hr className="my-4"/>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto sr-button">
            <img src="images/icons/html.png" height="100"/>
            <h3 className="mb-3">HTML5</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <img className="sr-button" src="images/icons/css.png" height="100" alt="Logo CSS"/>
            <h3 className="mb-3">CSS 3</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <img className="sr-button" src="images/icons/sass.png" height="100" alt="Logo SASS"/>
            <h3 className="mb-3">SASS</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <img className="sr-button" src="images/icons/bootstrap.png" height="100" alt="Logo Bootstrap"/>
            <h3 className="mb-3">Bootstrap</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <img className="sr-button" src="images/icons/js.png" height="100" alt="Logo JavaScript"/>
            <h3 className="mb-3">JavaScript</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <img className="sr-button" src="images/icons/jquery.png" height="100" alt="Logo JQuery"/>
            <h3 className="mb-3">JQuery</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <img className="sr-button" src="images/icons/react.png" height="100" alt="Logo REACT.js"/>
            <h3 className="mb-3">React.js</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Technologies;
