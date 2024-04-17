import { Outlet } from "react-router-dom";
import SideBar from "../../navigation/SideBarNav/SideBar";
import TopBar from "../../navigation/TopbarNav/TopBar";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="contents">
        <SideBar />
        <div>
        <TopBar />
        <Outlet />
        </div>
        
      </div>
     
  
    </>
  );
}
export default NavBar;
