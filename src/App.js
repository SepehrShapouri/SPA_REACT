import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import routes from "./routes";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import NotFound from "./pages/notFound";
import Blog from "./components/Blog";
import BlogPage from "./pages/BlogPage";
import Post from "./pages/Post";
import PostPage from "./pages/PostPage";
import DashBoard from "./pages/DashBoard";
import Setting from "./pages/Setting";
import Downloads from "./pages/Downloads";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="blogs/:id" element={<Blog />} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="posts/:id" element={<Post />} />
            <Route path="posts" element={<PostPage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="profile" element={<Profile />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route path="setting" element={<Setting />} />
              <Route path="downloads" element={<Downloads />} />
            </Route>
            <Route path="" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
