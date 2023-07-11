import React from "react";

import html from "../assets/icons/languages/html-5.svg";
import css from "../assets/icons/languages/css-3.svg";
import js from "../assets/icons/languages/javascript.svg";
import python from "../assets/icons/languages/python.svg";
import typescript from "../assets/icons/frameworks/typescript-icon.svg";

import vscode from "../assets/icons/tools/vscode.svg";
import git from "../assets/icons/tools/git-icon.svg";
import github from "../assets/icons/tools/github-icon.svg";
import postman from "../assets/icons/tools/postman-icon.svg";

import react from "../assets/icons/frameworks/react.svg";
import nodejs from "../assets/icons/frameworks/nodejs-icon.svg";
import bootstrap from "../assets/icons/frameworks/bootstrap.svg";
import tailwind from "../assets/icons/frameworks/tailwindcss-icon.svg";

import mysql from "../assets/icons/database/mysql-icon.svg";
import mongodb from "../assets/icons/database/mongodb-icon.svg";
import postgreSQL from "../assets/icons/database/postgresql.svg";

const skills = [
  {
    title: "Language",
    icons: [
      { img: html, alt: "HTML-icon" },
      { img: css, alt: "CSS-icon" },
      { img: js, alt: "JS-icon" },
      { img: python, alt: "Python-icon" },
      { img: typescript, alt: "Typescript-icon" },
    ],
  },
  {
    title: "Tools",
    icons: [
      { img: vscode, alt: "VSCode-icon" },
      { img: git, alt: "Git-icon" },
      { img: github, alt: "Github-icon" },
      { img: postman, alt: "Postman-icon" },
    ],
  },
  {
    title: "Framework",
    icons: [
      { img: react, alt: "React-icon" },
      { img: nodejs, alt: "NodeJS-icon" },
      { img: bootstrap, alt: "Bootstrap-icon" },
      { img: tailwind, alt: "Tailwind-icon" },
    ],
  },
  {
    title: "Database",
    icons: [
      { img: mysql, alt: "MySQL-icon" },
      { img: mongodb, alt: "MongoDB-icon" },
      { img: postgreSQL, alt: "PostgreSQL-icon" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills__container">
      {skills.map((skill) => (
        <div className="skill__category" key={skill.title}>
          <div className="skill__icons">
            {skill.icons.map((icon) => (
              <img
                src={icon.img}
                alt={icon.alt}
                key={icon.alt}
                className="skill__icon"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
