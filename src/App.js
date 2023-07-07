import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Navigations from "./components/Navigation";
import "./App.css";
import Profile from "./pages/Profile";
import Layout from "./layout/Layout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/profile" Component={Profile} />
            <Route path="/" exact={true} Component={HomePage} />
            <Route path="/about-us" Component={AboutUs} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
