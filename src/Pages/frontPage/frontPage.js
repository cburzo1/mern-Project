import './frontPage.css';
import UserPanel from '../../Components/userPanel/userPanel';
import {Link} from 'react-router-dom';

function FrontPage(props) {

    const tokenItem = localStorage.getItem('token');
    console.log(props.token.token);
    
    return (
        <div className="frontPage">
            {tokenItem?<Link to="creator">Creator Page</Link>: null}
            {tokenItem?<Link className="utilityPageLink" to="utility">Utility Page</Link>: null}
            <Link className="signLogPageLink" to="signLog">SignLog Page</Link>
            <UserPanel/>
        </div>
    );
}

export default FrontPage;