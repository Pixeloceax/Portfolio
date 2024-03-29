import React from "react";
import Ticker from "../components/Ticker";
import Navbar from "../components/Navbar";
import Footer from "../components/section/Footer";

import Hero from "../components/section/Hero";
import About from "../components/section/About";
import Projects from "../components/section/Projects";
import Contact from "../components/section/Contact";

const Main = () => {
  const news = [
    "Axel Valentin",
    "Software Engineer",
    "Holberton School Graduate",
    "Cat lover",
    "Competitive video game player",
    "Manga reader",
    "Back-end Lover",
    "Full Stack Web Developer",
    "Hate morning and morning people",
    "Save the planet that only one with beer",
    "Night owl and coding aficionado",
    "On a mission to create a better digital future",
    "AI enthusiast",
    "Dedicated to building sustainable software solutions",
  ];

  return (
    <>
      <section id="main" className="main__section">
        <Navbar />
        <Hero />
      </section>

      <Ticker news={news} />
      <section id="about" className="about__section">
        <About />
      </section>

      <section id="projects" className="projects__section">
        <Projects />
      </section>

      <section id="contact" className="contact__section">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default Main;
