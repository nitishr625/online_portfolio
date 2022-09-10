import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>what I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front End</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in HTML, CSS, bootstrap and designing layouts</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>In-depth knowledge of JavaScript and React.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Familiar with RESTful APIs and Good understanding of
                asynchronous request handling.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Thorough understanding of React Redux and its core principles
              </p>
            </li>
          </ul>
        </article>
        {/* End Of Front End.  */}

        <article className="service">
          <div className="service__head">
            <h3>Backend End</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic knowledge of SQL, Java and spring </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write clean code to develop functional web applications</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Troubleshoot and debug applications</p>
            </li>
          </ul>
        </article>
        {/* End Of Backend */}

        <article className="service">
          <div className="service__head">
            <h3>Other Industrial Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Familiar with code versioning tool Git</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Good Team player with time-management skills.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
