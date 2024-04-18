import { Link } from "react-router-dom";
import { useState } from "react";
import "./TopBar.css";

function TopBar() {
  const Lists = [
    {
      nav: "Projects",
      to: "/",
    },
    {
      nav: "Experience",
      to: "/experience",
    },
    {
      nav: "Education",
      to: "/education",
    },
    {
      nav: "Article",
      to: "/article",
    },
    {
      nav: "Contact",
      to: "/contact",
    },
  ];
  const [activeMenu, setActiveMenu] = useState("Projects");

  // Function to handle click event and set the active menu
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <div className="navbar container">
      <div className="btns">
        {Lists.map((list, index) => {
          return (
            <Link
              key={index}
              to={list.to}
              onClick={() => handleMenuClick(list.nav)}
              className={activeMenu === list.nav ? "active" : "btn"}
            >
              {list.nav}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TopBar;
