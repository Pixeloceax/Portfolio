import React from "react";

// import css
import "../styles/pages/Contact.css";

// import icons
import phone from "../assets/icons/phone-icon.svg";
import email from "../assets/icons/mail-icon.svg";
import linkedin from "../assets/icons/linkedin-icon.svg";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const contact = () => {
  let contactInfo = {
    phone: "I can't take call, I am affected by deafness",
    email: "axel.valentinbvs@yahoo.com",
    linkedin: "https://www.linkedin.com/in/axelvalentin/",
  };

  const handleClick = () => {
    var mail = document.createElement("a");
    mail.href = `mailto:${contactInfo.email}`;
    mail.click();
  };

  const handleLinkedIn = () => {
    if (typeof window !== "undefined") {
      window.open(`${contactInfo.linkedin}`, "_blank");
    }
  };

  return (
    <>
      <main className="primary-background-color w-100 h-100 d-flex flex-column align-items-center">
        <section id="contact">
          <div className="d-flex flex-column align-items-center m-0 mt-5 pt-5">
            <h1 className="text-color text-center mb-3 fw-bold">
              Let's have a talk
            </h1>
          </div>

          <Row className="d-flex flex-column align-items-center m-0 mt-5 ">
            <Col xs={12} md={6}>
              <Card className="glass-effect-contact">
                <Card.Body>
                  <Card.Title className="text-color text-center">
                    <img
                      src={phone}
                      alt="phone-icon"
                      width="5%"
                      className="pb-1"
                    />
                    Phone
                  </Card.Title>
                  <Card.Text className="text-color text-center ">
                    {contactInfo.phone}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="mt-3">
              <Card className="glass-effect-contact">
                <Card.Body>
                  <Card.Title className="text-color text-center">
                    <img
                      src={email}
                      alt="email-icon"
                      width="5%"
                      className="pb-1"
                    />
                    Email
                  </Card.Title>
                  <Card.Text className="text-color text-center">
                    You can send me an email
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button onClick={handleClick} variant="dark" size="lg">
                      Contact me
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="mt-3">
              <Card className="glass-effect-contact">
                <Card.Body>
                  <Card.Title className="text-color text-center">
                    <img
                      src={linkedin}
                      alt="linkedin-icon"
                      width="5%"
                      className="pb-1"
                    />
                    LinkedIn
                  </Card.Title>
                  <Card.Text className="text-color text-center">
                    Connect with me on LinkedIn
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button variant="dark" size="lg" onClick={handleLinkedIn}>
                      Connect
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default contact;
