import React from "react";

import Trex from "../../assets/images/trex.jpg";
import tia from "../../assets/images/tia.jpg";
import manga from "../../assets/images/manga.jpg";

const Hero = () => {
  const resumelink =
    "https://drive.google.com/file/d/1wFH3qRg_NEeyZXCAOPu98ZaO8MOWQx-4/view?usp=sharing";
  return (
    <>
      <div className="main__container">
        <div className="main__text__container">
          <div>
            <p>
              Hello, I'm <span>Axel Valentin, </span>
              <br />
              <span>Full Stack engineer</span> from
              <span> France</span>
            </p>
            <p>Student at Holberton School</p>
            <div className="main__button">
              <button>
                <a href={resumelink} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Get my CV
                </a>
              </button>
              <button>
                <a href="#contact">Contact me</a>
              </button>
            </div>
          </div>
        </div>
        <div className="main__img">
          <div>
            <img src={Trex} alt="trex" />
          </div>
          <div>
            <img src={tia} alt="tia" />
          </div>
          <div>
            <img src={manga} alt="manga" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
