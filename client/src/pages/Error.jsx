import {Link} from "react-router-dom";

export default function Error(){
    return(
        <h1>Nothing Here <Link to={'/messages'} >Go back to Messages</Link></h1>
    )
}