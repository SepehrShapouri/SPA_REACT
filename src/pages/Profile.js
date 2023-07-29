import { Route, Routes } from "react-router";
import SideBar from "../components/SideBar";
import DashBoard from "./DashBoard";
import Downloads from "./Downloads";
import Setting from "./Setting";
import App from "../App";
import { Outlet } from "react-router";
const Profile = () => {
  return <section>
    <p>welcome back chef!</p>
    <SideBar/>
    <Outlet/>
  </section>;
};

export default Profile;
