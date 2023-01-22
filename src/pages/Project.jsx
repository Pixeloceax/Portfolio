import React from "react";

// import styles
import "../styles/pages/Project.css";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import icons
import html from "../assets/icons/html-5.svg";
import css from "../assets/icons/css-3.svg";
import js from "../assets/icons/javascript.svg";
import python from "../assets/icons/python.svg";

import vscode from "../assets/icons/vscode.svg";
import git from "../assets/icons/git-icon.svg";
import github from "../assets/icons/github-icon.svg";

import react from "../assets/icons/react.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import tailwind from "../assets/icons/tailwindcss-icon.svg";

import mysql from "../assets/icons/mysql-icon.svg";
import mongodb from "../assets/icons/mongodb-icon.svg";

const language = [
  { img: html, alt: "HTML-icon" },
  { img: css, alt: "CSS-icon" },
  { img: js, alt: "JS-icon" },
  { img: python, alt: "Python-icon" },
];

const tools = [
  { img: vscode, alt: "VSCode-icon" },
  { img: git, alt: "Git-icon" },
  { img: github, alt: "Github-icon" },
];

const framework = [
  { img: react, alt: "React-icon" },
  { img: bootstrap, alt: "Bootstrap-icon" },
  { img: tailwind, alt: "Tailwind-icon" },
];

const database = [
  { img: mysql, alt: "MySQL-icon" },
  { img: mongodb, alt: "MongoDB-icon" },
];

const Project = () => {
  return (
    <>
      <main className="primary-background-color w-100 h-100 d-flex flex-column align-items-center">
        {/* skills section  */}
        <section id="Skills">
          <div className="d-flex flex-column align-items-center m-0 pt-5">
            <h1 className="text-color text-center mb-3 fw-bold">My Skills</h1>
          </div>

          <Container>
            <Row>
              <Col sm>
                <div>
                  {language.map((image, index) => (
                    <div className="glass-effect-skill p-3 mb-3 mr-3 d-flex align-items-center justify-content-center">
                      <p key={index}></p>
                      {image.alt.split("-")[0]}
                      <img
                        src={image.img}
                        alt={image.alt}
                        width="30px"
                        height="30px"
                      />
                    </div>
                  ))}
                </div>
              </Col>
              <Col sm>
                <div>
                  {framework.map((image, index) => (
                    <div className="glass-effect-skill p-3 mb-3 mr-3 d-flex align-items-center justify-content-center">
                      <p key={index}></p>
                      {image.alt.split("-")[0]}
                      <img
                        src={image.img}
                        alt={image.alt}
                        width="30px"
                        height="30px"
                      />
                    </div>
                  ))}
                </div>
              </Col>
              <Col sm>
                <div>
                  {database.map((image, index) => (
                    <div className="glass-effect-skill p-3 mb-3 mr-3 d-flex align-items-center justify-content-center">
                      <p key={index}></p>
                      {image.alt.split("-")[0]}
                      <img
                        src={image.img}
                        alt={image.alt}
                        width="30px"
                        height="30px"
                      />
                    </div>
                  ))}
                </div>
              </Col>
              <Col sm>
                <div>
                  {tools.map((image, index) => (
                    <div className="glass-effect-skill p-3 mb-3 mr-3 d-flex align-items-center justify-content-center">
                      <p key={index}></p>
                      {image.alt.split("-")[0]}
                      <img
                        src={image.img}
                        alt={image.alt}
                        width="30px"
                        height="30px"
                      />
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* project section */}
        <section id="Projects">
          <div className="d-flex flex-column align-items-center m-0 mt-5 pt-5">
            <h1 className="text-color text-center mb-3 fw-bold">My Projects</h1>
          </div>

          <Container className="my-5">
            <Row>
              {/* Smiling School */}
              <Col sm className="d-flex justify-content-center pb-3">
                {" "}
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>Smiling School</Card.Title>
                    <Card.Text>
                      implementation from scratch of a school website with Html
                      Css and Bootstrap
                    </Card.Text>
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="github-repo"
                        href="https://github.com/Pixeloceax/holbertonschool-smiling-school"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Web front end */}
              <Col sm className="d-flex justify-content-center pb-3">
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>Web front end</Card.Title>
                    <Card.Text>
                      front-end exercise, overview of the tech learned for the
                      front
                    </Card.Text>
                    <br />
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="github-repo"
                        href="https://github.com/Pixeloceax/holbertonschool-web_front_end"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* fun with css */}
              <Col sm className="d-flex justify-content-center pb-3">
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>Fun with CSS</Card.Title>
                    <Card.Text>more difficult exercise to learn css</Card.Text>
                    <br />
                    <br />
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="github-repo"
                        href="https://github.com/Pixeloceax/holbertonschool-Fun-with-CSS"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* headphone school */}
              <Col sm className="d-flex justify-content-center pb-3">
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>Headphone school</Card.Title>
                    <Card.Text>
                      implementation from scratch of a school website with Html
                      and Css only
                    </Card.Text>
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="github-repo"
                        href="https://github.com/Pixeloceax/holbertonschool-headphones"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mb-5">
            <Row>
              {/* comment */}
              <Col className="d-flex justify-content-center pb-3">
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>future project</Card.Title>
                    <Card.Text>coming soon</Card.Text>
                    <br />
                    <br />
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="github-repo"
                        href="github.com/Pixeloceax/"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              {/* comment */}
              <Col className="d-flex justify-content-center pb-3">
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>future project</Card.Title>
                    <Card.Text>coming soon</Card.Text>
                    <br />
                    <br />
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="github-repo"
                        href="github.com/Pixeloceax/"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              {/* comment */}
              <Col className="d-flex justify-content-center pb-3">
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>future project</Card.Title>
                    <Card.Text>coming soon</Card.Text>
                    <br />
                    <br />
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="github-repo"
                        href="github.com/Pixeloceax/"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              {/* comment */}
              <Col className="d-flex justify-content-center pb-3">
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>future project</Card.Title>
                    <Card.Text>coming soon</Card.Text>
                    <br />
                    <br />
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="github-repo"
                        href="github.com/Pixeloceax/"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Project;
