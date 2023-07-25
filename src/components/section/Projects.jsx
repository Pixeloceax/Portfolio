import React from "react";

import Card from "../Card";

import ReactJS from "../../assets/icons/frameworks/react.svg";
import NodeJS from "../../assets/icons/frameworks/node.svg";
import MongoDB from "../../assets/icons/database/mongodb.svg";
import Express from "../../assets/icons/frameworks/express_white.svg";
import TypeScript from "../../assets/icons/frameworks/typescript.svg";
import SQL from "../../assets/icons/database/mysql.svg";
import Sequalize from "../../assets/icons/frameworks/Sequelize.svg";

const Projects = () => {
  return (
    <>
      <div className="badge__container">
        <div className="badge__name">My Projects</div>
      </div>
      <div className="projects__container">
        <div className="projects__container__card">
          <Card
            title="Obole"
            description="Obole is an online banking application built using the M.E.R.N"
            skills={[MongoDB, Express, ReactJS, NodeJS, TypeScript]}
            githubLink="https://github.com/Pixeloceax/Obole"
          />
          <Card
            title="Auth Backend MongoDB"
            description=" Authentication backend, login, register, middleware"
            skills={[MongoDB, Express, NodeJS]}
            githubLink="https://github.com/Pixeloceax/auth-backend-mongo"
          />
          <Card
            title="Cinema Guru"
            description="Cinema Guru is web app that allows you to search for movies"
            skills={[Express, ReactJS, NodeJS, SQL]}
            githubLink="https://github.com/Pixeloceax/Obole"
          />
          <Card
            title="NodeSQL InventoryManagement"
            description="Inventory management with NodeJS and SQL"
            skills={[Express, NodeJS, Sequalize, SQL]}
            githubLink="https://github.com/Pixeloceax/NodeSQL-InventoryManagement"
          />
        </div>

        <div className="projects__container__2"></div>
      </div>
    </>
  );
};

export default Projects;
