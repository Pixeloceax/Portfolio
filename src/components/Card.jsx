import React from "react";

const Card = ({ title, description, skills }) => {
  return (
    <div className="card__container">
      <div className="card__text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="card__icons__skills">
        {skills.map((icon, index) => (
          <img className="card__icons" key={index} src={icon} alt="icon" />
        ))}
      </div>
    </div>
  );
};

export default Card;
