import './creatorPage.css';
import Header from '../../Components/Header/Header';
import ThumbnailCreator from '../../Components/thumbnailCreator/thumbnailCreator';
import {Link, useParams} from 'react-router-dom';
import {useContext} from 'react';
import AuthContext from '../../store/auth-context';

function CreatorPage(props) {
    let {title} = useParams();

    let authCtx = useContext(AuthContext);

    return (
        <div className="creatorPage">   
            <Link to="/">Front Page</Link>
            <Header />
            <ThumbnailCreator 
                tokenItself = {authCtx.token}
                title = {title}/>
        </div>
    );
}

export default CreatorPage;