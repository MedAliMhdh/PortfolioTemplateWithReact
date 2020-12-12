import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ children, description, gitHubLink }) => {
  return (
    <div className="project-card">
      <div>{children}</div>
      <p>{description}</p>
      <p>
        Github{" "}
        <a href={gitHubLink} target="_blank">
          {" "}
          Link
        </a>
      </p>
    </div>
  );
};
export default ProjectCard;
