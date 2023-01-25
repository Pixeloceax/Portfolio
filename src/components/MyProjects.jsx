import React from 'react';

// import bootstrap components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const projects = [
    {
        title: "Smiling School",
        description: "implementation from scratch of a school website with Html and Css only",
        github: "https://github.com/Pixeloceax/holbertonschool-smiling-school"
    },


    {
        title: "Web front end",
        description: "front-end exercise, overview of the tech learned for the front",
        github: "https://github.com/Pixeloceax/holbertonschool-web_front_end"
    },


    {
        title: "Fun with CSS",
        description: "CSS exercise, overview of the tech learned for the front",
        github: "https://github.com/Pixeloceax/holbertonschool-Fun-with-CSS"
    },


    {
        title: "Headphones School",
        description: "implementation from scratch of a school website with Html Css and Bootstrap",
        github: "https://github.com/Pixeloceax/holbertonschool-headphones"
    },


    {
        title: "This website",
        description: "My cv online",
        github: "https://github.com/Pixeloceax/Portfolio"
    },


    {
        title: "Web back end",
        description: "back-end exercise, overview of the tech learned for the back",
        github: "https://github.com/Pixeloceax/holbertonschool-web_back_end"
    },


    {
        title: "future project",
        description: "coming soon",
        github: "github.com/Pixeloceax"
    },


    {
        title: "future project",
        description: "coming soon",
        github: "github.com/Pixeloceax"
    },
];

const MyProjects = () => {
    return (
        <>
            <Container className="my-5">
            <Row>
                {projects.map((project, index) => (
              <Col sm className="d-flex justify-content-center pb-3">
                {" "}
                <Card
                  className="glass-effect-project"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>
                        {project.title}
                    </Card.Title>
                    <Card.Text  style={{ height: "4.375rem" }}>
                        {project.description}
                    </Card.Text>
                    <Button variant="dark">
                      {" "}
                      <a
                        className="text-white text-decoration-none"
                        rel="noopener noreferrer"
                        href={project.github}
                        target="_blank"
                      >
                        {" "}
                        Github
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
                ))}
            </Row>
            </Container>
        </>
    );
};

export default MyProjects;