import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Navigations from "./components/Navigation";
import "./App.css"
const App = () => {
  return ( 
    <>
    <BrowserRouter>
    <Navigations/>
    <Routes>
      <Route path="/" exact={true} Component={HomePage}/>
      <Route path="/about-us"  Component={AboutUs}/>
    </Routes>
    </BrowserRouter>
    </>
   );
}
 
export default App;