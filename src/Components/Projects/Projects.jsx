import React from "react";
import "./Project.css";

const data = [
  {
    id: 1,
    image:
      "https://scontent.fblr8-1.fna.fbcdn.net/v/t1.6435-9/69262068_109146900446574_4198096898503999488_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4vvtf-fsy_0AX96aBfe&_nc_ht=scontent.fblr8-1.fna&oh=00_AT_MDfHUf7i9O1kWW6b4N6vkQf0v5Q_-M4L6uswfOh0cBg&oe=633D1037",
    title: "Shoping Website",
    github: "https://github.com/nitishr625/EcomWebsite.git",
    demo: "https://nitishr625.github.io/EcomWebsite/",
  },

  {
    id: 2,
    image: "https://thumbs.dreamstime.com/b/todo-list-13838958.jpg",
    title: "To Do App",
    github: "https://github.com/nitishr625/todo-app.git",
    demo: "https://nitishr625.github.io/todo-app/",
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1500598963/tm2zh1r9x2gxerlbwy36.png",
    title: "Expense Tracker",
    github: "https://github.com/nitishr625/ExpenseTracker.git",
    demo: "https://nitishr625.github.io/ExpenseTracker/",
  },

  {
    id: 4,
    image:
      "https://img.freepik.com/premium-vector/calculator-illustration-element_163463-150.jpg?w=2000",
    title: "Simple Calculator",
    github: "https://github.com/nitishr625/Calculator",
    demo: "https://nitishr625.github.io/Calculator/",
  },

  {
    id: 5,
    image:
      "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/d07c1db617a36898b5e8c71013d228d11003eb36d7150b7abfe988fe097c7d66.png",
    title: "Tic Tac Toe",
    github: "https://github.com/nitishr625/tic_tak-teo.git",
    demo: "https://nitishr625.github.io/tic_tak-teo/",
  },

  {
    id: 6,
    image:
      "https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg",
    title: "Coming Soon..",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="project__item" key={id}>
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
