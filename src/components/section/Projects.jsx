import React from "react";

import obole__img from "../../assets/images/obole.png";
import auth__img from "../../assets/images/code.png";
import node__img from "../../assets/images/node_inv.png";

const projectsData = [
  {
    name: "Obole",
    link: "https://github.com/Pixeloceax/Obole",
    img: obole__img,
  },
  {
    name: "Auth Backend Mongo DB",
    link: "https://github.com/Pixeloceax/auth-backend-mongo",
    img: auth__img,
  },
  {
    name: "Node SQL Inventory Management",
    link: "https://github.com/Pixeloceax/NodeSQL-InventoryManagement",
    img: node__img,
  },
];

const Projects = () => {
  return (
    <>
      <div className="projects__container">
        <div className="header">
          <h2>PROJECTS</h2>
        </div>
        {projectsData.map((project, index) => (
          <div className="project__item" key={index}>
            <hr className="line" />
            <a
              href={project.link}
              target="
            _blank"
              rel="noreferrer"
              className="project__link"
            >
              <h4 className="project__name">{project.name}</h4>
              <img
                src={project.img}
                alt="projects__images"
                className="project__image"
              />
            </a>
          </div>
        ))}
        <hr className="line" />
      </div>
    </>
  );
};

export default Projects;
