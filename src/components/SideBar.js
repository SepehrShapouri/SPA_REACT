import { Link, NavLink } from "react-router-dom";
import "./components.css";
const SideBar = () => {
  return (
    <ul className="aside">
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={"/profile/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={"/profile/Setting"}>Setting</NavLink>
      </li>
      <li>
        <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to={"/profile/Downloads"}>Download</NavLink>
      </li>
    </ul>
  );
};

export default SideBar;
