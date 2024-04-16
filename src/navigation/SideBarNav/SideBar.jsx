import profile from "../../assets/profilepic.jpg";
import twitter from "../../assets/twitter_icon.png";
import facebook from "../../assets/facebook_icon.png";
import linkedIN from "../../assets/linkedin_icon.png"
import "./SideBar.css";
function SideBar() {
  return (
    <div className="side-bar-content">
      <div className="about-info">
        <img src={profile} alt="" />
        <h2>Leo Klomegah</h2>
        <p>I am a Front-end software Developer Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, cumque.</p>
      </div>

      <div className="socials">
        <img src={linkedIN} alt="" />
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />

      </div>

      <div className="skills">
        <p>REACT.JS</p>
        <p>CSS</p>
        <p>HTML</p>
        <p>JAVASCRIPT</p>
        <p>NODE.JS</p>

      </div>
    </div>
  );
}
export default SideBar;
