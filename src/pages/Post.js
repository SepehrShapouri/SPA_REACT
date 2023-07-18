import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export function withRouter(Children) {
    return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />;
    };
  }
const Post = (props) => {
    const id = props.match.params.id || 1
    console.log(props.match.params.id)
    return ( 
        <>
        <p>welcome to posts section</p>
        <p>post-{id}</p>
        <Link to={`/Posts/${parseInt(id)+1}`}>Next Post?</Link>
        </>
     );
}
 
export default withRouter(Post);