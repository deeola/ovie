import React from "react";

const Hero = () => {
  return (
    <div className="heroContainer">
      <h1 className="helloThere">Hello There!</h1>
      <p className="name">
        I'm <span>Precious Ovie-George</span>
      </p>
      <p className="role">A Data Scientist and Business Analyst</p>
      <a className="resumeButton" href="#" target="_blank">
        Download Resume
      </a>
    </div>
  );
};

export default Hero;
