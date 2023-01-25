import React from 'react';

// import bootstrap components
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import icons
import html from "../assets/icons/html-5.svg";
import css from "../assets/icons/css-3.svg";
import js from "../assets/icons/javascript.svg";
import python from "../assets/icons/python.svg";

import vscode from "../assets/icons/vscode.svg";
import git from "../assets/icons/git-icon.svg";
import github from "../assets/icons/github-icon.svg";

import react from "../assets/icons/react.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import tailwind from "../assets/icons/tailwindcss-icon.svg";

import mysql from "../assets/icons/mysql-icon.svg";
import mongodb from "../assets/icons/mongodb-icon.svg";

const language = [
  { img: html, alt: "HTML-icon" },
  { img: css, alt: "CSS-icon" },
  { img: js, alt: "JS-icon" },
  { img: python, alt: "Python-icon" },
];

const tools = [
  { img: vscode, alt: "VSCode-icon" },
  { img: git, alt: "Git-icon" },
  { img: github, alt: "Github-icon" },
];

const framework = [
  { img: react, alt: "React-icon" },
  { img: bootstrap, alt: "Bootstrap-icon" },
  { img: tailwind, alt: "Tailwind-icon" },
];

const database = [
  { img: mysql, alt: "MySQL-icon" },
  { img: mongodb, alt: "MongoDB-icon" },
];

const skills = [
  language,
  framework,
  database,
  tools,
];

const Skills = () => {
    return (
        <>
        <Container>
          <Row>
            {skills.map((skillGroup, index) => (
              <Col sm>
                <div>
                  {skillGroup.map((image, index) => (
                    <div className="glass-effect-skill p-3 mb-3 mr-3 d-flex align-items-center justify-content-center">
                      <p key={index}></p>
                      {image.alt.split("-")[0]}
                      <img
                        src={image.img}
                        alt={image.alt}
                        width="30px"
                        height="30px"
                      />
                    </div>
                  ))}
                </div>
              </Col>
            ))}
            </Row>
          </Container>
        </>
    );
};

export default Skills;