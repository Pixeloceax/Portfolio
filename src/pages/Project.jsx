import React from "react";

// import components
import MySkills from "../components/MySkills";
import MyProjects from "../components/MyProjects";

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
          <MySkills />
        </section>

        {/* project section */}
        <section id="Projects">
          <div className="d-flex flex-column align-items-center m-0 mt-5 pt-5">
            <h1 className="text-color text-center mb-3 fw-bold">My Projects</h1>
          </div>
          {/* project component */}
          <MyProjects />
        </section>
      </main>
    </>
  );
};

export default Project;
