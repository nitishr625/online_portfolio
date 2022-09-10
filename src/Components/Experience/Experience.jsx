import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React Router</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Core Java</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Spring</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
