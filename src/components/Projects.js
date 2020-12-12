import React from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";

const Projects = ({ list }) => {
  return (
    <div className="projects">
      <h2 className="text-important">Projects </h2>
      <div className="projects-container">
        {list.map((proj, i) => (
          <ProjectCard
            key={i}
            description={proj.description}
            gitHubLink={proj.gitHubLink}
          >
            <img src={proj.imgSrc}></img>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};
export default Projects;
