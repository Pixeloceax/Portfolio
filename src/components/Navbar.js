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
      <Navbar expand="lg" fixed="top" className="sticky-navbar glass_effect">
        <Navbar.Brand href="/home">
          <p className="d-flex home-link-text m-0 text-color">
            {" "}
            <img src={cat_icon} alt="cat-icon" width="24px" />
            Axel Valentin
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-center">
            <Nav.Link href="/project">
              <p className="link-text m-0 text-color">Project</p>
            </Nav.Link>
            <Nav.Link href="/contact">
              {" "}
              <p className="link-text m-0 text-color"> Contact</p>
            </Nav.Link>
            <Nav.Link href="https://github.com/Pixeloceax">
              <p className="link-text text-color m-0 ">
                <img src={github_icon} alt="github-logo" width="16px" />
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
