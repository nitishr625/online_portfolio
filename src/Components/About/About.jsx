import React from "react";
import "./About.css";
import { FaAward, FaSuitcase } from "react-icons/fa";
import { VscFolderOpened } from "react-icons/vsc";
import image from "../../assets/image2.jpeg";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={image} alt="profile image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaSuitcase className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Qualification</h5>
              <small>BE / CSE</small>
            </article>

            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>6 projects completed</small>
            </article>
          </div>
          <p> I aim at developing better software for the smarter future.</p>
          <p>
            Seeking challenging position in the field of Software Engineering
            Development. I would like to join an organization which will allow
            me to grow as an individual and effectively employ my skill-set to
            the on-going project.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
