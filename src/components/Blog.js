import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
const Blog = (props) => {
const id = props.match.params.id
  return (
    <div>
      <h2>Blog Page - {id}</h2>
      <Link to={"/blogs"}> Go to Blog Page</Link>
    </div>
  );
};

export default withRouter(Blog);
