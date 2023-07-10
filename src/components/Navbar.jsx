// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";

// import navlogo from "../assets/icons/others/cat-icon.svg";

// function NavbarOffcanvas() {
//   const handleHomeClick = () => {
//     window.scrollTo(0, 0);
//   };

//   return (
//     <>
//       <Navbar key="lg" expand="lg" className="bg-body-tertiary sticky-top">
//         <Container fluid>
//           <Navbar.Brand className="d-flex" onClick={handleHomeClick}>
//             Axel Valentin
//             <div>
//               <img width="24px" src={navlogo} alt="logo" />
//             </div>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-lg`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//             placement="end"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
//                 Offcanvas
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <Nav.Link onClick={handleHomeClick}>Home</Nav.Link>
//                 <Nav.Link href="#about">About</Nav.Link>
//                 <Nav.Link href="#skills">Skills</Nav.Link>
//                 <Nav.Link href="#projects">Projects</Nav.Link>
//                 <Nav.Link href="#contact">Contact me</Nav.Link>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavbarOffcanvas;
