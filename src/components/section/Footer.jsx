import React from "react";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="footer-text">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by Axel VALENTIN © {currentDate}
      </p>
    </div>
  );
};

export default Footer;
