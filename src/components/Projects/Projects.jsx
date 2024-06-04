import folder from "../../assets/icons8-folder-32.png";

import "./Projects.css";
import { projectLists } from "../../Constants/projectLists";
function Projects() {
  return (
    <div className="project-content container">
      <div className="title">
        <img src={folder} alt="" />
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {projectLists.map((project, index) => {
          return (
            <div className="project" key={index}>
              <div className="image">
                <img src={project.image} alt="" />
              </div>
              <a href={project.link} target="blank">
                <h2> {project.title} </h2>
              </a>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
