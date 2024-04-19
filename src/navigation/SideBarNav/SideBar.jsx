import profile from "../../assets/profilepic.jpg";
import twitter from "../../assets/twitter_icon.png";
import github from "../../assets/icons8-github-30.png";
import linkedIN from "../../assets/linkedin_icon.png";
import "./SideBar.css";
function SideBar() {
  return (
    <div className="side-bar-content">
      <div className="about-info">
        <img src={profile} alt="" />
        <h2>Leo Klomegah</h2>
        <p>
          I love programming and challenges, i am currently doing my National Service at NodeEight and
          I am focused on expanding my experience in developing high performing websites.
        </p>
      </div>

      <div className="socials">
      <a href="https://www.linkedin.com/in/klomegah-leo-ba03b9208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">  <img src={linkedIN} alt="" /></a>
       <a href="https://twitter.com/home" target="_blank"> <img src={twitter} alt="" /></a>
       <a href="https://github.com/"> <img src={github} alt="" /> </a>
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
