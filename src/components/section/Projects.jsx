import React from "react";

const img = "https://picsum.photos/250/150";
const projectsData = [
  {
    name: "Obole",
    link: "https://github.com/Pixeloceax/Obole",
    img: "https://github.com/Pixeloceax/Obole/raw/main/obole.png",
  },
  {
    name: "Auth Backend Mongo DB",
    link: "https://github.com/Pixeloceax/auth-backend-mongo",
    img: "https://raw.githubusercontent.com/Pixeloceax/auth-backend-mongo/main/code.png",
  },
  {
    name: "Node SQL Inventory Management",
    link: "https://github.com/Pixeloceax/NodeSQL-InventoryManagement",
    img: "https://www.spherewms.com/hubfs/blog-files/SPH%20Whse%20Inv%20Mgmt%20Blog-shutterstock_1930996376.jpg",
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
                src={project.img || img}
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
