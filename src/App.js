import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
const App = () => {
  return ( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact={true} Component={HomePage}/>
      <Route path="/about-us"  Component={AboutUs}/>
    </Routes>
    </BrowserRouter>
    </>
   );
}
 
export default App;