// import React from "react";

// // import icons
// import phone from "../assets/icons/others/phone-icon.svg";
// import email from "../assets/icons/others/mail-icon.svg";
// import linkedin from "../assets/icons/others/linkedin-icon.svg";
// import resume from "../assets/icons/others/resume-icon.svg";

// const contact = () => {
//   let contactInfo = {
//     phone: "I can't take call, I am affected by deafness",
//     email: "axel.valentinbvs@yahoo.com",
//     linkedin: "https://www.linkedin.com/in/axelvalentin/",
//     resume:
//       "https://drive.google.com/file/d/1wFH3qRg_NEeyZXCAOPu98ZaO8MOWQx-4/view?usp=sharing",
//   };

//   const handleClick = () => {
//     var mail = document.createElement("a");
//     mail.href = `mailto:${contactInfo.email}`;
//     mail.click();
//   };

//   const handleLinkedIn = () => {
//     if (typeof window !== "undefined") {
//       window.open(`${contactInfo.linkedin}`, "_blank");
//     }
//   };

//   const handleResume = () => {
//     if (typeof window !== "undefined") {
//       window.open(`${contactInfo.resume}`, "_blank");
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column align-items-center m-0 mt-5 pt-5">
//         <h1 className="text-color text-center mb-3 fw-bold">
//           Let's have a talk
//         </h1>
//       </div>

//       <Row className="d-flex flex-column align-items-center m-0 mt-5 ">
//         <Col xs={12} md={6}>
//           <Card className="glass-effect-contact">
//             <Card.Body>
//               <Card.Title className="text-color text-center">
//                 <img src={phone} alt="phone-icon" width="5%" className="pb-1" />
//                 Phone
//               </Card.Title>
//               <Card.Text className="text-color text-center ">
//                 {contactInfo.phone}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={12} md={6} className="mt-3">
//           <Card className="glass-effect-contact">
//             <Card.Body>
//               <Card.Title className="text-color text-center">
//                 <img src={email} alt="email-icon" width="5%" className="pb-1" />
//                 Email
//               </Card.Title>
//               <Card.Text className="text-color text-center">
//                 You can send me an email
//               </Card.Text>
//               <div className="d-flex justify-content-center">
//                 <Button onClick={handleClick} variant="dark" size="lg">
//                   Contact me
//                 </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={12} md={6} className="mt-3">
//           <Card className="glass-effect-contact">
//             <Card.Body>
//               <Card.Title className="text-color text-center">
//                 <img
//                   src={linkedin}
//                   alt="linkedin-icon"
//                   width="5%"
//                   className="pb-1"
//                 />
//                 LinkedIn
//               </Card.Title>
//               <Card.Text className="text-color text-center">
//                 Connect with me on LinkedIn
//               </Card.Text>
//               <div className="d-flex justify-content-center">
//                 <Button variant="dark" size="lg" onClick={handleLinkedIn}>
//                   Connect
//                 </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col xs={12} md={6} className="mt-3">
//           <Card className="glass-effect-contact">
//             <Card.Body>
//               <Card.Title className="text-color test-padding text-center">
//                 <img
//                   src={resume}
//                   alt="linkedin-icon"
//                   width="5%"
//                   className="pb-1"
//                 />
//                 Get my resume
//               </Card.Title>
//               <Card.Text className="text-color text-center">
//                 Download my resume
//               </Card.Text>
//               <div className="d-flex justify-content-center">
//                 <Button
//                   variant="dark"
//                   size="lg"
//                   onClick={() => {
//                     handleResume();
//                   }}
//                 >
//                   Download
//                 </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default contact;
