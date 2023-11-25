import React from "react";

import CircleTextAnimation from "../CircleTextAnimation";

import axelValentin from "../../assets/images/axelVALENTIN2.png";
import linkedin from "../../assets/icons/others/linkedin-icon.svg";
import github from "../../assets/icons/tools/github-icon.svg";

const About = () => {
  return (
    <>
      <div className="about__me__container">
        <div className="about__me__image__container">
          <img
            src={axelValentin}
            alt="Description de l'image"
            className="profile-image"
          />
        </div>

        <div className="circle__text__animation">
          <CircleTextAnimation />
        </div>

        <div className="about__me__text__container">
          <h2>About me</h2>

          <div className="about__text">
            <p className="blurb">
              I'm a 20-year-old <b> Full Stack engineer </b> based in{" "}
              <b> Lille</b>, France, with a strong focus on Back End
              development.
            </p>
          </div>

          <div className="about__text">
            <p className="blurb">
              I'm currently looking for an <b> internship</b> in France.
            </p>
          </div>

          <div className="about__text">
            <p className="blurb">
              My hobbies are video Cats, read CyberPunk books and play FPS video
              games.
            </p>
          </div>

          <div className="about-spotify">
            <div>
              <p className="blurb">My favorite group:</p>
            </div>

            <iframe
              title="spotify"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3RbzfW?utm_source=generator&theme=0"
              width="70%"
              height="152"
            />
          </div>

          <div className="about__social">
            <a
              href="https://www.linkedin.com/in/axelvalentin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" width={30} height={30} />
            </a>
            <a
              href="https://github.com/Pixeloceax"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
