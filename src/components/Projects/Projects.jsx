import folder from "../../assets/icons8-folder-32.png";
import foodapp from "../../assets/foodapp.png";
import sampleportfolio from "../../assets/sampleportfolio.png";
import landingPage from "../../assets/landingpage.png"
import votingapp from "../../assets/votingapp.png"
import quote from "../../assets/quotegen.png"
import clothingapp from "../../assets/clothingapp.png"
import todo from "../../assets/todo.png"
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
      image: todo,
      title: "Todo List",
      description:
        "It is a Todo list app which allows users to add, delete and edit daily tasks The app was built using React.Js and Vanilla CSS ",
      link: "https://todo-list-r-js.vercel.app/",
    },
     
    {
      image: clothingapp,
      title: "Clothing App",
      description:
        "This a clothing App where users can navigate through their favourite dresses, add items to cart and place order. It is built using React and Sass",
      link: "https://leo-clothing-app.netlify.app/",
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
        "It is a voting app, that shows track of percentage of people that voted. It was built using html, css and javascript",
        link:"https://kortsa.github.io/voting-system-js/"
    },
    {
      image: quote,
      title: "Quote Generator",
      description:
        "It is a quote generator app built using html, css and Javascript. The app displays random motivational quotes for the user when the user clicks on New quote",
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
