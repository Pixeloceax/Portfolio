import React from "react";
import github from "../assets/icons/tools/github-icon.svg";

const Card = ({ title, description, skills, githubLink }) => {
  return (
    <div className="card__container">
      <div className="card__text">
        <h1>{title}</h1>
        <p className="blurb">{description}</p>
      </div>
      <div className="card__icons__skills">
        {skills.map((icon, index) => (
          <img className="card__icons" key={index} src={icon} alt="icon" />
        ))}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img className="github__card__icons" src={github} alt="GitHub" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
