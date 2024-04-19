import folder from "../../assets/icons8-folder-32.png";
import foodapp from "../../assets/foodapp.png";
import sampleportfolio from "../../assets/sampleportfolio.png";
import landingPage from "../../assets/landingpage.png"
import votingapp from "../../assets/votingapp.png"
import quote from "../../assets/quotegen.png"
import "./Projects.css";
function Projects() {
  
  const projectLists = [
    {
      image: foodapp,
      title: "Food App",
      description:
        "This a simple food web app built which allow users to navigate through their favourite meals. A user can select number of meals, place and order navigate to the payment page. The app was built using React.Js and Vanilla CSS ",
      link: "https://food-app-ruddy-delta.vercel.app/",
    },
    {
      image: sampleportfolio,
      title: "Sample Portfolio",
      description:
        "This a an inspirational portfolio website designed by myself. It was built using Vanilla JavaScript and CSS",
        link:"https://kortsa.github.io/project1/"
    },
    {
      image: landingPage,
      title: "Landing Page",
      description:
        "This a simple landing page i built when i started learning Javascript. i drew the inspiration from online. I used Html, Css and Javascript",
        link:"https://kortsa.github.io/landingpage/"
    },
    {
      image: votingapp,
      title: "Voting App",
      description:
        "This a simple landing page i built when i started learning Javascript. i drew the inspiration from online. I used Html, Css and Javascript",
        link:"https://kortsa.github.io/voting-system-js/"
    },
    {
      image: quote,
      title: "Quote Generator",
      description:
        "This a simple landing page i built when i started learning Javascript. i drew the inspiration from online. I used Html, Css and Javascript",
        link:"https://kortsa.github.io/quoteGenerator_js/"
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
              <a href={project.link} >
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
