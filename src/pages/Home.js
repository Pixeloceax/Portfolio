import React from "react";

import "../styles/Home.css";

// import images
import me from "../assets/images/me.jpg";
import hbtn from "../assets/images/hbtn.png";

const Home = () => {
  return (
    <>
      <main className="primary-background-color w-100 h-100 d-flex flex-column align-items-center">
        {/* latest news section  */}
        <section id="latest-news">
          <div className="d-flex flex-column align-items-center m-0 mt-3">
            <h1 className="text-color text-center mb-3 fw-bold">Latest News</h1>
            <p className="text-color text-center m-0">
              I'm a Student at Holberton School, I'm learning to be a Full-Stack
              Dev
            </p>
            <div className="m-0 p-0 d-flex justify-content-center w-50">
              <img className="w-50" src={hbtn} alt="Hbtn-school-logo" />
            </div>
          </div>
        </section>

        {/* hero section */}
        <section id="hero section">
          <div className="glass_effect_home text-center mb-4">
            <p className="text-color fs-4 fw-bold m-1">
              Hello I'm French Full-Stack dev
            </p>
          </div>

          <div className="Axel">
            <div className="Axel_content">
              <h2> I'm Axel Valentin</h2>
              <p>I'm a full stack web developer.</p>
            </div>

            <div>
              <img src={me} alt="me" className="Axel_image" />
            </div>
          </div>

          <section className="about_me">
            <div className="about_me_content">
              <h3>About me</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>
          </section>

          <section className="my_passion">
            <div className="my_passion_content">
              <h3>My passion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
