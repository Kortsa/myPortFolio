
import folder from "../../assets/icons8-bag-100.png";

import "./Experience.css";
function Experience() {
  
  const experiences = [
    {
      date: "November,2023 - Present",
      title: "National Service @NodeEight",
      desc: "After completion of University, i joined NodeEight for my National Service. During my National Service, i was part of the first Cohort of the jesi program and i joined the Software class. We learned Javascript and React.js for Frontend development and we also learned NodeJs for Backend",
    },
    {
      date: "may,2022 - August, 2022",
      title: "Intership @NodeEight",
      desc: "NodEight is an innovative Hub at Ho where i did my school intership at. I worked with the media department for a month and half where i learned photography and graphic designing. i was later moved to the tech department where i learned web programming.",
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
