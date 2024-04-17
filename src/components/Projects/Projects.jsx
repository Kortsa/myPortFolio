import folder from "../../assets/icons8-folder-32.png";
import foodapp from "../../assets/foodapp.png";
import sampleportfolio from "../../assets/sampleportfolio.png";
import "./Projects.css";
function Projects() {
  const projectLists = [
    {
      image: foodapp,
      title: "Food App",
      description:
        "loLorem ipsum dolor sit amet consectetur adipisicing elit. Illum quiseaque est quod autem dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates.",
    },
    {
      image: sampleportfolio,
      title: "Sample Portfolio",
      description:
        "loLorem ipsum dolor sit amet consectetur adipisicing elit. Illum quiseaque est quod autem dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates.",
    },
    {
      image: sampleportfolio,
      title: "Sample Portfolio",
      description:
        "loLorem ipsum dolor sit amet consectetur adipisicing elit. Illum quiseaque est quod autem dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates.",
    },
  ];
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
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
