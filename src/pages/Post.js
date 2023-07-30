import { useParams,useLocation} from "react-router-dom";
import queryString from 'query-string';
import { Link } from "react-router-dom";
export function withRouter(Children) {
    return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />;
    };
  }
const Post = (props) => {
    const location = useLocation()
    const id = props.match.params.id || 1
    const query = queryString.parse(location.search)
    console.log(query)
    return ( 
        <div className="postpage">
        <h2 className="blogpagetitle">welcome to posts section</h2>
        <p className="blogpagecontent">post no.{id},{query.name}</p>
        <div  className="BlogLinkHolder">
        <Link to={`/posts/${parseInt(id)+1}`}>Next Post?</Link>
        <Link to={"/posts"}>Back to Posts Page?</Link>
        </div>
        </div>
     );
}
 
export default withRouter(Post);