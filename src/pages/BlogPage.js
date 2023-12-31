import { Link } from "react-router-dom";

const items = [
  { name: "blog-1", to: "/blogs/1"},
  { name: "blog-2", to: "/blogs/2" },
  { name: "blog-3", to: "/blogs/3"},
];
const BlogPage = () => {
  return (
    <div className="blogpage">
      <h2>Blog Page</h2>
      <div className="blogitemsholder">
        {items.map((item) => {
          return (
            <li className="blogitem" key={item.to}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
