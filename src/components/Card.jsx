import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card__container">
      <div className="card__image">
        <img src={imageSrc} alt={title} className="card__image__size" />
      </div>
      <div className="card__line__separator"></div>
      <div className="card__text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
