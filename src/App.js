import React from "react";

/* import react router dom */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* import bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

/* import pages */
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

/* import components */
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
