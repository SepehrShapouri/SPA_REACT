import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <ul className="aside">
      <li>
        <Link to={"/profile/Dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link to={"/profile/Setting"}>Setting</Link>
      </li>
      <li>
        <Link to={"/profile/Downloads"}>Download</Link>
      </li>
    </ul>
  );
};

export default SideBar;
