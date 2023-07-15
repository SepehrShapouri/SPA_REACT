import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import routes from "./routes";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
          {routes.map((route)=>{
            return <Route key={route.path}{...route}/>
          })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
