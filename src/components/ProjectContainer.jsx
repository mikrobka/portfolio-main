import React from "react";
import projects from "../projects.json";
import Project from "./Project";
import "../components/ProjectContainer.css";

const ProjectContainer = () => {
  return (
    <div className="projectContainer">
      <h2 className="notable">Some fun projects...</h2>
      {projects.projects.map((item) => (
        <Project item={item} />
      ))}
      <a
        style={{ textDecoration: "none" }}
        href=""
        target="_blank"
      >
        <h6 style={{ color: "#f5f5f5" }}>email</h6>
      </a>
      <h6 style={{ color: "#f5f5f5" }}></h6>
    </div>
  );
};

export default ProjectContainer;
