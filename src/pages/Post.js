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
        <>
        <p>welcome to posts section</p>
        <p>post no.{id},{query.name}</p>
        <Link to={`/Posts/${parseInt(id)+1}`}>Next Post?</Link>
        <br></br>
        <Link to={"/posts"}>Back to Posts Page?</Link>
        </>
     );
}
 
export default withRouter(Post);