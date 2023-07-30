import {Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
const blogPosts = [
  { id: 1, content: "blog post number one,this is a test" },
  { id: 2, content: "blog post number two,this is a test" },
  { id: 3, content: "blog post number three,this is a test" },
  { id: 4, content: "blog post number four,this is a test" },
];
const Blog = (props) => {
  const id = props.match.params.id;
  const activePost = blogPosts.filter((post) => {
    return post.id == id;
  });
  console.log(activePost[0].content);
  return (
    <div className="activeblog">
      <h2 className="blogpagetitle">Blog Page - {id}</h2>
      <p className="blogpagecontent">{activePost[0].content}</p>
      <div className="BlogLinkHolder">
        <Link to={"/blogs"}> Go to Blog Page</Link>
        {id >= 4 ? (
          <Link to={`/blogs/${parseInt(id) - 1}`}>
            end of this section,previous blog?
          </Link>
        ) : (
          <Link to={`/blogs/${parseInt(id) + 1}`}>Go to Next Page</Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Blog);
