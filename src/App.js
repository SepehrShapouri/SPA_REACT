import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Navigations from "./components/Navigation";
import "./App.css";
import Profile from "./pages/Profile";
import Layout from "./layout/Layout";
import routes from "./routes";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
          {routes.map((route)=>{
            return <Route {...route}/>
          })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
