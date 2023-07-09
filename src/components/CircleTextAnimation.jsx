import React from "react";
import svgCircle from "../assets/svg/circle-text.svg";

const CircleTextAnimation = () => {
  return (
    <div className="circle-text-animation-placement">
      <img
        className="circle-text-animation-circle"
        src={svgCircle}
        alt="svgCircleText"
        width={275}
        height={280}
      />
    </div>
  );
};

export default CircleTextAnimation;
