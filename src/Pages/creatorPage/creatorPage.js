import './creatorPage.css';
import Header from '../../Components/Header/Header';
import ThumbnailCreator from '../../Components/thumbnailCreator/thumbnailCreator';
import {Link, useParams} from 'react-router-dom';

function CreatorPage(props) {
    let {title} = useParams();

    return (
        <div className="creatorPage">   
            <Link to="/">Front Page</Link>
            <Header />
            <ThumbnailCreator 
                tokenItself = {props.token.token}
                title = {title}/>
        </div>
    );
}

export default CreatorPage;