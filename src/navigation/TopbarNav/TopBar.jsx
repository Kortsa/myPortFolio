import { Link } from "react-router-dom";
// import { useState } from "react";
import "./TopBar.css";

function TopBar() {
  // const [menu, setMenu] = useState("project")
  return (
    <div className="navbar container">
      <div className="btns">
        <Link
         to="/"
         
         className="btn"
         >
          Projects
        </Link>
        <Link to="/experience" className="btn">
          Experience
        </Link>
        <Link to="/education" className="btn">
          Education
        </Link>
        <Link to="/article" className="btn">
          Article
        </Link>

        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
    </div>
  );
}
export default TopBar;
