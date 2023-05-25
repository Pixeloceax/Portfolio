import React, { useState } from "react";
// CSS
import "../styles/pages/Home.css";

// Images
import me from "../assets/images/me.jpg";

// Icons
import down_arrow from "../assets/icons/down-arrow.svg";
import up_arrow from "../assets/icons/up-arrow.svg";

// Bootstrap
import { Container, Row, Col, Collapse } from "react-bootstrap";

// components
import MyPassions from "../components/MyPassions";

const Home = () => {
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

  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(down_arrow);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIcon(isOpen ? down_arrow : up_arrow);
  };

  return (
    <>
      <Container className="pt-5 mt-5">
        <Row>
          <Col
            className="d-flex align-items-center justify-content-center"
            md={6}
          >
            <div className="text-section">
              <h6>Hello I'm French Full-Stack dev</h6>
              <h1>I'm Axel Valentin</h1>
              <p>
                I am a French student currently at Holberton School,
                specializing in Full-Stack. I am {age} years old and a
                passionate programmer with a strong interest in Back-end
                Development.
              </p>
              <Row className="pt-2">
                <div className="d-flex align-items-center">
                  <div className="barre"></div>
                  <button className="about-me-button" onClick={toggleCollapse}>
                    <img src={icon} alt="arrow-icons" className="arrow-icon" />
                  </button>
                  <div className="barre"></div>
                </div>
                <Collapse in={isOpen}>
                  <div className="about-me-text">
                    <p>
                      My journey in programming began in my first year of high
                      school when I started learning HTML and CSS. As I delved
                      deeper into the world of coding, I quickly fell in love
                      with the creative and problem-solving aspects of
                      programming.
                      <br />
                      <br />
                      After completing my high school studies, I decided to take
                      my passion for programming to the next level by enrolling
                      in Holberton School. There, I received an intensive and
                      practical education in full-stack development, with a
                      focus on technologies such as JavaScript, NodeJS, React,
                      MongoDB and more.
                      <br />
                      <br />
                      I am excited to continue honing my skills as a Full-Stack
                      Developer and am actively seeking opportunities to work on
                      interesting and challenging projects. I am particularly
                      interested in working on projects that aim to make a
                      positive impact on people's lives.
                      <br />
                      <br />
                      Please feel free to reach me if you would like to know
                      more about my skills and experience.
                    </p>
                  </div>
                </Collapse>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <img
                src={me}
                alt="AxelValentin"
                className="border border-light border-4 rounded-circle pl-5"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <MyPassions />
    </>
  );
};

export default Home;
