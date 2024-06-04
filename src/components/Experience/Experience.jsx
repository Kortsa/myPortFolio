
import folder from "../../assets/icons8-bag-100.png";
import { experiences } from "../../Constants/experience";
import "./Experience.css";
function Experience() {
  
  return (
    <div className="experience-content container">
      <div className="title">
        <img src={folder} alt="" />
        <h2>Experience</h2>
      </div>
      <ul>
        {experiences.map((experience, id) => {
          return (
            <li className="experience" key={id}>
              <div className="experience-detail">
                <h4>{experience.date}</h4>
                <h3>{experience.title}</h3>
                <p>{experience.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Experience;
