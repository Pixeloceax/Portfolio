import React, { useState, useEffect } from "react";
import linkedin from "../../assets/icons/others/linkedin-icon.svg";
import github from "../../assets/icons/tools/github-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSlash,
  faEnvelope,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  useEffect(() => {
    if (popupVisible) {
      const timer = setTimeout(() => {
        setPopupVisible(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [popupVisible]);
  const handleEmailClick = () => {
    navigator.clipboard.writeText(process.env.REACT_APP_E_MAIL);
    setPopupVisible(true);
  };

  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = process.env.REACT_APP_RESUME_LINK;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="contact__inner">
        <div className="contact__content">
          <div className="contact__badge">
            <div className="badge__container">
              <div className="badge__name">Contact Me</div>
            </div>
            <div className="contact__badge-bottom ">
              <span className="blurb">Let's get in touch</span>
            </div>
          </div>
          <div className="contact__text">
            <p className="blurb">
              I'm currently looking for a job as a Full Stack engineer.
            </p>
          </div>
          <div className="contact__text">
            <p className="blurb">
              If you have any questions or want to work together, feel free to
              contact me.
            </p>

            <div className="contact__informations">
              <div className="contact__informations__item">
                <FontAwesomeIcon icon={faPhoneSlash} />
                <p>I can't take calls, I am affected by deafness</p>
              </div>
              <div className="contact__informations__item pointer">
                <FontAwesomeIcon icon={faEnvelope} />
                <p onClick={handleEmailClick}>
                  You can send me an email @ axel.valentinbvs@yahoo.com
                </p>
              </div>
              <div
                className="contact__informations__item pointer"
                onClick={handleResumeClick}
              >
                <FontAwesomeIcon icon={faFileDownload} />
                <p>Get my resume, Download my resume</p>
              </div>
            </div>

            <div className="contact__social">
              <a
                href="https://www.linkedin.com/in/axelvalentin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" width="30" height="30" />
              </a>
              <a
                href="https://github.com/Pixeloceax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github" width="30" height="30" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {popupVisible && (
        <div className="popup">
          <div className="popup__content">
            <p className="blurb">Email address copied!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
