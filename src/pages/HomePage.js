import { Link } from "react-router-dom";

const HomePage = (props) => {
    return ( 
        <>
        <p>This is Home Page!</p>
        <Link to={"/about-us"}>About us</Link>
        </>
     );
}
 
export default HomePage;