// import React from "react";

// // import bootstrap components
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

// const projects = [
//   {
//     title: "Auth backend mongo",
//     description: "backend server register and login: mongoDB, express, NodeJS",
//     github: "https://github.com/Pixeloceax/auth-backend-mongo",
//   },

//   {
//     title: "Obole",
//     description:
//       "Online Bank: React, NodeJS, Express, MongoDB, TailwindCSS, Jest",
//     github: "https://github.com/Pixeloceax/Obole",
//   },

//   {
//     title: "This website",
//     description: "Online CV: React, Bootstrap",
//     github: "https://github.com/Pixeloceax/Portfolio",
//   },

//   {
//     title: "More projects on my Github",
//     description: "  ",
//     github: "",
//   },
// ];

// const MyProjects = () => {
//   return (
//     <>
//       <Container className="my-5">
//         <Row>
//           {projects.map((project, index) => (
//             <Col sm className="d-flex justify-content-center pb-3" key={index}>
//               <Card className="glass-effect-project" style={{ width: "18rem" }}>
//                 <Card.Body>
//                   <Card.Title>{project.title}</Card.Title>
//                   <Card.Text style={{ height: "4.375rem" }}>
//                     {project.description}
//                   </Card.Text>
//                   <Button variant="dark">
//                     <a
//                       className="text-white text-decoration-none"
//                       rel="noopener noreferrer"
//                       href={project.github}
//                       target="_blank"
//                     >
//                       Github
//                     </a>
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default MyProjects;
