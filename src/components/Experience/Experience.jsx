
import folder from "../../assets/icons8-folder-32.png";

import "./Experience.css";
function Experience() {
  
  const experiences = [
    {
      date: "FEBRUARY,2022 - JULY, 2022",
      title: "Intership @NodeEight",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae fugit veritatis totam quod doloribus aperiam iure ducimus quos culpa rerum?",
    },
    {
      date: "November,2023 - April, 2024",
      title: "Intership @NodeEight",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae fugit veritatis totam quod doloribus aperiam iure ducimus quos culpa rerum?",
    },
  ];
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
