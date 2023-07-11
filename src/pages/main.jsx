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
import Skills from "../components/Skills";

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
        <div className="main__container">
          <div className="main__text__container">
            <div>
              <p>
                Hello, I'm <span>Axel Valentin, </span>
                <br />
                <span>Full Stack engineer</span> from
                <span> France</span>
                <br />
                <p>Student at Holberton School</p>
              </p>
              <div className="main__button">
                <button>Get my CV</button>
                <button>Contact me</button>
              </div>
            </div>
          </div>
          <div className="main__img">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt=""
              />
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

      <section id="skills" className="skills__section">
        <div className="skills__H__line"></div>
        <div className="skills__V__line">
          <div className="skills__title__container">
            <h1 className="skills__title">Skills</h1>
          </div>
        </div>
        <div className="skills__content">
          <Skills />
        </div>
      </section>

      <section id="contact" className="contact__section">
        <div className="contact__inner">
          <div className="contact__content">
            <div className="contact__badge">
              <div className="contact__badge-name">Contact me</div>

              <div className="contact__badge-bottom">
                <span>Let's get in touch</span>
              </div>
            </div>
            <div className="contact__text">
              <p className="contact__blurb">
                I'm currently looking for a job as a Full Stack engineer.
              </p>
            </div>
            <div className="contact__text">
              <p className="contact__blurb">
                If you have any questions or want to work together, feel free to
                contact me.
              </p>

              <div className="contact__social">
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
        </div>
      </section>
    </>
  );
};

export default Main;
