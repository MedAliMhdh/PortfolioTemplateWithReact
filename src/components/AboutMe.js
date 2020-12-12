import React from "react";
import "./AboutMe.css";

const AboutMe = ({ name, children }) => {
  return (
    <div className="about-me">
      <h1>
        Hello my name is <span className="text-important">{name}</span>,<br />{" "}
        and i make a horrible websites
      </h1>
      <p>{children}</p>
    </div>
  );
};

export default AboutMe;
