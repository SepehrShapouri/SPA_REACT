import { NavLink } from "react-router-dom";
const items = [
  { name: "Home", to: "/", exact: true },
  { name: "About-us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
];
const Navigations = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigations;
