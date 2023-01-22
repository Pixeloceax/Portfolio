import React from "react";

import "../styles/pages/Home.css";

// import images
import me from "../assets/images/me.jpg";
import hbtn from "../assets/images/hbtn.png";

// import icons
import cat from "../assets/icons/cat-icon.svg";
import book from "../assets/icons/book-icon.svg";
import game from "../assets/icons/game-icon.svg";
import newtech from "../assets/icons/new-tech-icon.svg";

const Home = () => {
  //age auto update
  const date = new Date();
  const currentYear = date.getFullYear();
  const birthYear = 2003;
  const birthMonth = 5;
  const birthDay = 4;
  const age =
    currentYear -
    birthYear -
    (date.getMonth() + 1 < birthMonth ||
    (date.getMonth() + 1 === birthMonth && date.getDate() < birthDay)
      ? 1
      : 0);

  return (
    <>
      <main className="primary-background-color w-100 h-100 d-flex flex-column align-items-center">
        {/* latest news section  */}
        <section id="latest-news">
          <div className="d-flex flex-column align-items-center m-0 mt-5 pt-5">
            <h1 className="text-color text-center mb-3 fw-bold">Latest News</h1>
            <p className="text-color text-center m-0">
              I'm a Student at Holberton School, I'm learning to be a Full-Stack
              Dev
            </p>
            <div className="m-0 p-0 py-4 d-flex justify-content-center w-50">
              <img className="w-75" src={hbtn} alt="Hbtn-school-logo" />
            </div>
          </div>
        </section>

        {/* hero section */}
        <section id="hero">
          <div className="glass_effect_home text-center mb-4">
            <p className="text-color fs-4 fw-bold m-1">
              Hello I'm French Full-Stack dev
            </p>
          </div>

          <div className="d-flex justify-content-center">
            <div className="">
              <h2 className="text-color text-center"> I'm Axel Valentin</h2>
              <p className="text-color text-center">
                Student at Holberton School.
              </p>
            </div>

            <div className="d-flex pl-5">
              <img
                className="border border-light border-4 rounded-circle pl-5"
                src={me}
                alt="Valentin-axel-profile"
                width="100px"
                height="100px"
              />
            </div>
          </div>

          {/* about me section */}
          <section id="about-me" className="max-width-section">
            <div className="pt-5 d-flex flex-column">
              <h3 className="text-decoration-underline">About me</h3>
              <p className="text-color">
                <br />I am a French student currently at Holberton School in
                Specialization Full-Stack. I am {age} years old and a passionate
                programmer with a strong interest in Back-end Development.
                <br />
                <br />
                My journey in programming began in my first year of high school
                when I started learning HTML and CSS. As I delved deeper into
                the world of coding, I quickly fell in love with the creative
                and problem-solving aspects of programming.
                <br />
                <br />
                After completing my high school studies, I decided to take my
                passion for programming to the next level by enrolling in
                Holberton School. There, I received an intensive and practical
                education in full-stack development, with a focus on
                technologies such as JavaScript, NodeJS, React, MongoDB and
                more.
                <br />
                <br />
                I am excited to continue honing my skills as a Full-Stack
                Developer and am actively seeking opportunities to work on
                interesting and challenging projects. I am particularly
                interested in working on projects that aim to make a positive
                impact on people's lives.
                <br />
                <br />
                Please feel free to reach me if you would like to know more
                about my skills and experience.
                <br />
                <br />
              </p>
            </div>
          </section>

          {/* my passion section */}
          <section id="my-passion" className="max-width-section">
            <div className="pt-3 d-flex flex-column">
              <h3 className="text-decoration-underline">My passion</h3>
              <p>
                <br />
                <img src={cat} alt="cat-icon" width="10%" />
                I am an avid cat lover, and I enjoy nothing more than spending
                time with my feline friends. Whether it's playing with them or
                cuddling up for a nap, I find the company of cats to be
                soothing.
                <br />
                <br />
                <img src={book} alt="book-icon" width="10%" />
                I am also big fan of manga and anime. I enjoy reading and
                watching stories that are rich in culture and history, and I
                appreciate the unique art style and storytelling techniques used
                in manga and anime.
                <br />
                <br />
                <img src={game} alt="game-icon" width="10%" />
                In my free time, I also love to play FPS video games. I find the
                fast-paced action and intense gameplay to be incredibly
                exhilarating, and I enjoy competing with other players online.
                <br />
                <br />
                <img src={newtech} alt="new-tech-icon" width="10%" />
                Finally, I am always on the lookout for new and exciting
                technology. Whether it's the latest smartphones, laptops, or
                even smart home devices, I am always eager to learn about new
                technologies and how they can improve our lives.
                <br />
                <br />
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
