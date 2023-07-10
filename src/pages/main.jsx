import React from "react";
import Ticker from "../components/Ticker";
import CircleTextAnimation from "../components/CircleTextAnimation";

import Card from "../components/Card";

// import hbtn from "../assets/images/hbtn.png";

// import manga from "../assets/icons/others/book-icon.svg";
// import cat from "../assets/icons/others/cat-icon.svg";
// import game from "../assets/icons/others/game-icon.svg";
// import domotics from "../assets/icons/others/new-tech-icon.svg";

import linkedin from "../assets/icons/others/linkedin-icon.svg";
import github from "../assets/icons/tools/github-icon.svg";

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

  return (
    <>
      <section id="main" className="main__section">
        <div>
          <div>
            <div>
              <p>
                Hello, I'm
                <br />
                Axel Valentin, <span>Full Stack Web Developer</span> from
                <span> France</span>
                <br />
                <p>Student at Holberton School</p>
                <br />
                <p>Contact me</p>
                <p>get cv</p>
              </p>
            </div>
            <div>
              <img src="" alt="avatar" />
            </div>
          </div>
        </div>
      </section>

      <Ticker news={news} />
      <section id="about" className="about__section">
        <div className="about__bg-container">
          <img
            src="https://blog.holbertonschool.com/wp-content/uploads/2020/10/Holberton-School-Hauts-de-France-1.png"
            alt="template"
            width={960}
            height={660}
          />
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
              <p className="about__blurb">
                I'm a 20-year-old Full Stack engineer based in Lille, France,
                specializing in Back End development.
              </p>
            </div>

            <div className="about__text">
              <p className="about__blurb">
                I have a passion for learning new JavaScript technologies.
              </p>
            </div>
            <div className="about__text">
              <p>
                <span className="about__blurb">
                  Hobbies : Cat, Manga, Video game, Domotics
                </span>
              </p>
            </div>

            <div className="about__spotify">
              <iframe
                title="spotify"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3RbzfW?utm_source=generator&theme=0"
                width="70%"
                height="152"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
                href="github.com/pixeloceax"
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
        <div className="H__line"></div>
        <div className="text__container">
          <div className="projects__card__container ">
            <div>
              <Card
                title="Obole"
                description="Online bank M.E.R.N app"
                imageSrc="https://i.pinimg.com/originals/99/9d/02/999d0250aef1ea1199f132f39f391697.jpg"
              />
              <Card
                title="Obole"
                description="Online bank M.E.R.N app"
                imageSrc="https://i.pinimg.com/originals/99/9d/02/999d0250aef1ea1199f132f39f391697.jpg"
              />
            </div>
            <div>
              <Card
                title="Obole"
                description="Online bank M.E.R.N app"
                imageSrc="https://i.pinimg.com/originals/99/9d/02/999d0250aef1ea1199f132f39f391697.jpg"
              />
              <Card
                title="Obole"
                description="Online bank M.E.R.N app"
                imageSrc="https://i.pinimg.com/originals/99/9d/02/999d0250aef1ea1199f132f39f391697.jpg"
              />
            </div>
          </div>

          <div className="V__line"></div>
          <h1 className="text__orientation">Projects</h1>
        </div>
      </section>
    </>
  );
};

export default Main;
