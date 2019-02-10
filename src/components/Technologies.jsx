import React from 'react';
import ReactTooltip from 'react-tooltip'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Technologies = () => {
  return (<section>
    <main className="technologies d-flex justify-content-center">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>
              <strong>Skills</strong>
            </h1>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="sr-button mt-5 mx-auto" data-tip data-for="html">
              <ReactTooltip className="tooltip" id="html" place="top" type="light" effect="solid">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </ReactTooltip>
              <div className="tooltip-mobile">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <img src="images/icons/html.png" height="100"/>
              <h3 className="mb-3">HTML5</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="sr-button mt-5 mx-auto" data-tip data-for="css">
              <ReactTooltip className="tooltip" id="css" place="top" type="light" effect="solid">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </ReactTooltip>
              <div className="tooltip-mobile">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <img src="images/icons/css.png" height="100" alt="Logo CSS"/>
              <h3 className="mb-3">CSS 3</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="sr-button mt-5 mx-auto" data-tip data-for="js">
              <ReactTooltip className="tooltip" id="js" place="top" type="light" effect="solid">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </ReactTooltip>
              <div className="tooltip-mobile">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <img src="images/icons/js.png" height="100" alt="Logo JavaScript"/>
              <h3 className="mb-3">JavaScript</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="sr-button mt-5 mx-auto" data-tip data-for="react">
              <ReactTooltip className="tooltip" id="react" place="top" type="light" effect="solid">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </ReactTooltip>
              <div className="tooltip-mobile">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <img src="images/icons/react.png" height="100" alt="Logo REACT.js"/>
              <h3 className="mb-3">React.js</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="sr-button mt-5 mx-auto" data-tip data-for="jquery">
              <ReactTooltip className="tooltip" id="jquery" place="top" type="light" effect="solid">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </ReactTooltip>
              <div className="tooltip-mobile">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <img src="images/icons/jquery.png" height="100" alt="Logo JQuery"/>
              <h3 className="mb-3">JQuery</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="sr-button mt-5 mx-auto" data-tip data-for="sass">
              <ReactTooltip className="tooltip" id="sass" place="top" type="light" effect="solid">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </ReactTooltip>
              <div className="tooltip-mobile">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <img src="images/icons/sass.png" height="100" alt="Logo SASS"/>
              <h3 className="mb-3">SASS</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="sr-button mt-5 mx-auto" data-tip data-for="bootstrap">
              <ReactTooltip className="tooltip" id="bootstrap" place="top" type="light" effect="solid">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </ReactTooltip>
              <div className="tooltip-mobile">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <img src="images/icons/bootstrap.png" height="100" alt="Logo Bootstrap"/>
              <h3 className="mb-3">Bootstrap</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="sr-button mt-5 mx-auto" data-tip data-for="node">
              <ReactTooltip className="tooltip" id="node" place="top" type="light" effect="solid">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </ReactTooltip>
              <div className="tooltip-mobile">
                <FontAwesomeIcon icon={faStar} className="checked"/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar} className=""/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <img src="images/icons/node.png" height="100" alt="Logo node.js"/>
              <h3 className="mb-3">Node.js</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>)
}

export default Technologies;
