import React from "react";

// import react bootstrap components
import { Navbar, Nav } from "react-bootstrap";

// import css
import "../styles/components/Navbar.css";

//import cat icons
import cat_icon from "../assets/icons/cat-icon.svg";
import github_icon from "../assets/icons/github-icon.svg";

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="sticky-navbar glass_effect ">
        <Navbar.Brand href="/home">
          <p className="home__text">
            {" "}
            <img src={cat_icon} alt="cat_icon" className="cat_icon" />
            Axel Valentin
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-center">
            <Nav.Link href="/project">
              <p className="project_text">Project</p>
            </Nav.Link>
            <Nav.Link href="/contact">
              {" "}
              <p className="contact_text"> Contact</p>
            </Nav.Link>
            <Nav.Link href="https://github.com/Pixeloceax">
              <p className="github_link">
                <img
                  src={github_icon}
                  alt="github_logo"
                  className="github_logo"
                />
                Github
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
