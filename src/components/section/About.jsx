import React from "react";

import CircleTextAnimation from "../CircleTextAnimation";

import axelValentin from "../../assets/images/axelVALENTIN2.png";
import linkedin from "../../assets/icons/others/linkedin-icon.svg";
import github from "../../assets/icons/tools/github-icon.svg";

const About = () => {
  return (
    <>
      <div className="about__bg-container">
        <img src={axelValentin} alt="template" />
      </div>

      <CircleTextAnimation />

      <div className="about__inner">
        <div className="about__content">
          <div className="about__badge">
            <div className="about__badge-name">About me</div>
            <div className="about__badge-bottom">
              <span>I'm a Full Stack engineer</span>
            </div>
          </div>
          <div className="about__text">
            <p className="blurb">
              I'm a 20-year-old Full Stack engineer based in Lille, France,
              specializing in Back End development.
            </p>
          </div>

          <div className="about__text">
            <p className="blurb">
              I have a passion for learning new JavaScript technologies.
            </p>
          </div>
          <div className="about__text">
            <p>
              <span className="blurb">
                Hobbies : Cat, Manga, Video game, Domotics.
              </span>
            </p>
          </div>

          <div className="about__spotify">
            <div>
              <p className="blurb">my favorite group :</p>
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
