import React, { useState, useEffect } from "react";
import Ticker from "../components/Ticker";
import CircleTextAnimation from "../components/CircleTextAnimation";
import Card from "../components/Card";
import linkedin from "../assets/icons/others/linkedin-icon.svg";
import github from "../assets/icons/tools/github-icon.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSlash,
  faEnvelope,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";

import ReactJS from "../assets/icons/frameworks/react.svg";
import NodeJS from "../assets/icons/frameworks/node.svg";
import MongoDB from "../assets/icons/database/mongodb.svg";
import Express from "../assets/icons/frameworks/express_white.svg";
import TypeScript from "../assets/icons/frameworks/typescript.svg";
import SQL from "../assets/icons/database/mysql.svg";

import axelValentin from "../assets/images/axelVALENTIN2.png";
import Trex from "../assets/images/trex.jpg";
import tia from "../assets/images/tia.jpg";
import manga from "../assets/images/manga.jpg";

const Main = () => {
  const news = [
    "Axel Valentin",
    "Software Engineer",
    "Holberton School Student",
    "Cat lover",
    "Competitive video game player",
    "Manga reader",
    "Fanatic of ReactJS",
    "Full Stack Web Developer",
    "Hate morning and morning people",
    "Save the planet that only one with beer",
  ];

  const [popupVisible, setPopupVisible] = useState(false);
  useEffect(() => {
    if (popupVisible) {
      const timer = setTimeout(() => {
        setPopupVisible(false);
      }, 200000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [popupVisible]);
  const handleEmailClick = () => {
    const email = "axel.valentinbvs@yahoo.com";
    navigator.clipboard.writeText(email);
    setPopupVisible(true);
  };

  const resumelink =
    "https://drive.google.com/file/d/1wFH3qRg_NEeyZXCAOPu98ZaO8MOWQx-4/view?usp=sharing";
  const handleResumeClick = () => {
    window.location.href = resumelink;
  };

  return (
    <>
      <section id="main" className="main__section">
        <Navbar />

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
                  <a
                    href={resumelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
      </section>

      <Ticker news={news} />
      <section id="about" className="about__section">
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
                  Hobbies : Cat, Manga, Video game, Domotics
                </span>
              </p>
            </div>

            <div className="about__spotify">
              <div>
                <p className="blurb">my favorite group</p>
              </div>
              <iframe
                title="spotify"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3RbzfW?utm_source=generator&theme=0"
                width="70%"
                height="152"
                loading="lazy"
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
      </section>

      <section id="projects" className="projects__section">
        <div className="badge__container">
          <div className="badge__name">My Projects</div>
        </div>
        <div className="projects__container">
          <div className="projects__container__card">
            <Card
              title="Obole"
              description="Obole is an online banking application built using the M.E.R.N stack."
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
              description="Cinema Guru is a web application that allows you to search for movies and series."
              skills={[Express, ReactJS, NodeJS, SQL]}
              githubLink="https://github.com/Pixeloceax/Obole"
            />
          </div>

          <div className="projects__container__2"></div>
        </div>
      </section>

      <section id="contact" className="contact__section">
        <div className="contact__inner">
          <div className="contact__content">
            <div className="contact__badge">
              <div className="badge__container">
                <div className="badge__name">Contact Me</div>
              </div>
              <div className="contact__badge-bottom ">
                <span className="blurb">Let's get in touch</span>
              </div>
            </div>
            <div className="contact__text">
              <p className="blurb">
                I'm currently looking for a job as a Full Stack engineer.
              </p>
            </div>
            <div className="contact__text">
              <p className="blurb">
                If you have any questions or want to work together, feel free to
                contact me.
              </p>

              <div className="contact__informations">
                <div className="contact__informations__item">
                  <FontAwesomeIcon icon={faPhoneSlash} />
                  <p onClick={handleEmailClick}>
                    I can't take calls, I am affected by deafness
                  </p>
                </div>
                <div className="contact__informations__item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p onClick={handleEmailClick}>
                    You can send me an email @ axel.valentinbvs@yahoo.com
                  </p>
                </div>
                <div
                  className="contact__informations__item"
                  onClick={handleResumeClick}
                >
                  <FontAwesomeIcon icon={faFileDownload} />
                  <p>Get my resume, Download my resume</p>
                </div>
              </div>

              <div className="contact__social">
                <a
                  href="https://www.linkedin.com/in/axelvalentin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin" width="30" height="30" />
                </a>
                <a
                  href="https://github.com/Pixeloceax"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github" width="30" height="30" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {popupVisible && (
          <div className="popup">
            <div className="popup__content">
              <p className="blurb">Email address copied!</p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Main;
