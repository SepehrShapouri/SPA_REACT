import { Link } from "react-router-dom";
const Navigations = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigations;
