import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
      <section>
      <main className="background-start text-white d-flex justify-content-center">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-xl-10 mx-auto text-center">
              <h1 className="text-uppercase text-white">
                <strong>Front-end developer</strong>
              </h1>
              <hr/>
              </div>
              <div className="col-xl-8 mx-auto text-center">
                <p className="text-faded mb-5">Hi! My name is Paweł. I am a 31-year-old front-end developer living in Poznań, Poland. I started my adventure with web development in the November of 2017. In my projects I mainly use technologies like: HTML5, CSS3 (SASS), JavaScript, ReactJS. I am currently expanding my knowledge about JavaScript and ReactJS. I also create responsive websites, so they display correctly from the smallest to the largest screen. I think Bootstrap and ReactJS are awesome :)</p>

                <p>I am looking for a job in Poznań or remote as a junior front-end developer. If you are interested in hiring me or cooperating with me, please contact me.</p>
                <NavLink className="btn btn-warning text-white" to="/contact"> Contact </NavLink>
              </div>
            </div>
          </div>
        </main>
      </section>
      );
}

export default About;
