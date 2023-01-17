import React from "react";

// import styles
import "../styles/Project.css";

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

const images = [
  { img: html, alt: "HTML-icon" },
  { img: css, alt: "CSS-icon" },
  { img: js, alt: "JS-icon" },
  { img: python, alt: "Python-icon" },
  { img: vscode, alt: "VSCode-icon" },
  { img: git, alt: "Git-icon" },
  { img: github, alt: "Github-icon" },
  { img: react, alt: "React-icon" },
  { img: bootstrap, alt: "Bootstrap-icon" },
  { img: tailwind, alt: "Tailwind-icon" },
  { img: mysql, alt: "MySQL-icon" },
  { img: mongodb, alt: "MongoDB-icon" },
];

const Project = () => {
  return (
    <>
      <main className="primary-background-color w-100 h-100 d-flex flex-column align-items-center">
        {/* skills section  */}
        <section id="project">
          <div className="d-flex flex-column align-items-center m-0 mt-5 pt-5">
            <h1 className="text-color text-center mb-3 fw-bold">My Skills</h1>
          </div>

          <div class="d-flex justify-content-center ">
            {/* language */}
            <div>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="glass-effect-project p-3 mb-3 mr-3 d-flex align-items-center"
                >
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
          </div>
        </section>
      </main>
    </>
  );
};

export default Project;
