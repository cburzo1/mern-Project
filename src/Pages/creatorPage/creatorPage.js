import './creatorPage.css';
import Header from '../../Components/Header/Header';
import ThumbnailCreator from '../../Components/thumbnailCreator/thumbnailCreator';
import {Link, useParams} from 'react-router-dom';

function CreatorPage(props) {
    let {title} = useParams();

    let token = props.token.token;

    if(props.token.token === undefined){
        token = localStorage.getItem('token');
    }

    return (
        <div className="creatorPage">   
            <Link to="/">Front Page</Link>
            <Header />
            <ThumbnailCreator 
                tokenItself = {token}
                title = {title}/>
        </div>
    );
}

export default CreatorPage;