import { Link } from "react-router-dom";

const posts = [
  { name: "post-1", to: "/posts/1" },
  { name: "post-2", to: "/posts/2" },
  { name: "post-3", to: "/posts/3" },
];
const PostPage = () => {
  return (
    <div className="blogpage">
      <h2>Post Page</h2>
      <div className="blogitemsholder">
      {posts.map((post)=>{
        return(
            <li key={post.to} className="blogitem">
            <Link to={{pathname:post.to,search:"name=ali"}}>{post.name}</Link>
        </li>
        )
      })}
      </div>
    </div>
  );
};

export default PostPage;