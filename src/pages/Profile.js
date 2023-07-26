import { Route, Routes } from "react-router";
import SideBar from "../components/SideBar";
import DashBoard from "./DashBoard";
import Downloads from "./Downloads";
import Setting from "./Setting";
import App from "../App";
const Profile = () => {
  return <section>
    <p>welcome back chef!</p>
    <SideBar/>
  </section>;
};

export default Profile;
