import './frontPage.css';
import UserPanel from '../../Components/userPanel/userPanel';
import {Link} from 'react-router-dom';

function FrontPage() {
    return (
        <div className="frontPage">
            <Link to="creator">Creator Page</Link>
            <Link className="utilityPageLink" to="utility">Utility Page</Link>
            <Link className="signLogPageLink" to="signLog">SignLog Page</Link>
            <UserPanel/>
        </div>
    );
}

export default FrontPage;