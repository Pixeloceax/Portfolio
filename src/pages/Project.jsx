import React from "react";

// import styles
import "../styles/pages/Project.css";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import components
import Skills from "../components/Skills";

const Project = () => {
  return (
    <>
      <main className="primary-background-color w-100 h-100 d-flex flex-column align-items-center">
        {/* skills section  */}
        <section id="Skills">
          <div className="d-flex flex-column align-items-center m-0 pt-5">
            <h1 className="text-color text-center mb-3 fw-bold">My Skills</h1>
          </div>

          {/* skills component */}
          <Skills />
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
                        rel="noopener noreferrer"
                        href="https://github.com/Pixeloceax/holbertonschool-smiling-school"
                        target="_blank"
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
                        rel="noopener noreferrer"
                        href="https://github.com/Pixeloceax/holbertonschool-web_front_end"
                        target="_blank"
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
                        rel="noopener noreferrer"
                        href="https://github.com/Pixeloceax/holbertonschool-Fun-with-CSS"
                        target="_blank"
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
                        rel="noopener noreferrer"
                        href="https://github.com/Pixeloceax/holbertonschool-headphones"
                        target="_blank"
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
              {/* cv website */}
              <Col className="d-flex justify-content-center pb-3">
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>This website</Card.Title>
                    <Card.Text> my cv online </Card.Text>
                    <br />
                    <br />
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="noopener noreferrer"
                        href="https://github.com/Pixeloceax/Portfolio"
                        target="_blank"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              {/* web back end */}
              <Col className="d-flex justify-content-center pb-3">
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title> Web back end </Card.Title>
                    <Card.Text> back-end exercise, overview of the tech learned for the back</Card.Text>
                    <br />
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="noopener noreferrer"
                        href="https://github.com/Pixeloceax/holbertonschool-web_back_end"
                        target="_blank"
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
                        rel="noopener noreferrer"
                        href="github.com/Pixeloceax/"
                        target="_blank"
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
                        rel="noopener noreferrer"
                        href="github.com/Pixeloceax/"
                        target="_blank"
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
