import folder from "../../assets/icons8-education-48.png";
import "./education.css";
function Education() {
  return (
    <div className="education-content try container">
      <div className="title">
        <img src={folder} alt="" />
        <h2>Education</h2>
      </div>

      <div className="educations">
        <div className="education-title">
          <div className="box"></div>
          <div className="education-desc">
            <h5>
              HND Information Communication Technology <br />
              <span>January 2020 - 2023</span>
            </h5>
          </div>
        </div>
        <div className="education-title">
          <div className="box"></div>
          <div className="education-desc">
            <h5>
              BTECH Information Communication Technology <br />
              <span>January 2024 - 2025</span>
            </h5>
          </div>
        </div>
      </div>

      <div className="certificates">
        <div className="certificate">
          <div className="cert"></div>
        </div>
        <div className="certificate">
          <div className="cert"></div>
        </div>
        <div className="certificate">
          <div className="cert"></div>
        </div>
      </div>
    </div>
  );
}
export default Education;
