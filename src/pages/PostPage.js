import { Link } from "react-router-dom";

const posts = [
  { name: "post-1", to: "/posts/1" },
  { name: "post-2", to: "/posts/2" },
  { name: "post-3", to: "/posts/3" },
];
const PostPage = () => {
  return (
    <div>
      <h2>Post Page</h2>
      {posts.map((post)=>{
        return(
            <li key={post.to}>
            <Link to={{pathname:post.to,search:"name=ali"}}>{post.name}</Link>
        </li>
        )
      })}
    </div>
  );
};

export default PostPage;