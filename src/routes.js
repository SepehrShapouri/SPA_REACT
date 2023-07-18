import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import NotFound from "./pages/notFound";
import Blog from "./components/Blog";
import BlogPage from "./pages/BlogPage";
import Post from "./pages/Post";

const routes = [
  {path:"/blogs/:id",Component:Blog},
  {path:"/blogs",Component:BlogPage},
  { path: "/", Component: HomePage,key:1},
  { path: "/about-us", Component: AboutUs,key:2},
  { path: "/profile", Component: Profile,key:3},
  {path:"/posts/:id?",Component:Post},
  {path:"*",Component:NotFound,key:4}
];
export default routes;
