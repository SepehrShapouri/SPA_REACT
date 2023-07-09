import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";

const routes = [
  { path: "/", Component: HomePage,exact:true},
  { path: "/about-us", Component: AboutUs },
  { path: "/profile", Component: Profile },
];
export default routes;
