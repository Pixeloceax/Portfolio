import React from "react";

//icons
import catIcon from "../assets/icons/cat-icon.svg";
import bookIcon from "../assets/icons/book-icon.svg";
import gameIcon from "../assets/icons/game-icon.svg";
import newTechIcon from "../assets/icons/new-tech-icon.svg";

//css
import "../styles/components/MyPassions.css";

// bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";

const MyPassions = () => {
  const passions = [
    {
      title: "Cats",
      icon: catIcon,
      description:
        "I am an avid cat lover, and I enjoy nothing more than spending time with my feline friends. Whether it's playing with them or cuddling up for a nap, I find the company of cats to be soothing.",
    },
    {
      title: "Manga and Anime",
      icon: bookIcon,
      description:
        "I am also a big fan of manga and anime. I enjoy reading and watching stories that are rich in culture and history, and I appreciate the unique art style and storytelling techniques used in manga and anime.",
    },
    {
      title: "FPS Video Games",
      icon: gameIcon,
      description:
        "In my free time, I also love to play FPS video games. I find the fast-paced action and intense gameplay to be incredibly exhilarating, and I enjoy competing with other players online.",
    },
    {
      title: "New Technologies",
      icon: newTechIcon,
      description:
        " I am constantly seeking out innovative and thrilling technologies that can enhance our lives, be it the newest smartphones, laptops, or even smart home devices.",
    },
  ];

  return (
    <>
      <Container className="mt-5 py-5">
        <Row className="pt-3">
          {passions.map((passion, index) => (
            <Col key={index} md={3}>
              <Card
                className="glass_effect_MyPassions"
                style={{ width: "20rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center">
                    {passion.title}
                  </Card.Title>
                  <Card.Img
                    className="py-2"
                    src={passion.icon}
                    alt={`${passion.title}-icon`}
                    width="10%"
                  />
                  <Card.Text className="text-center">
                    {passion.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyPassions;
