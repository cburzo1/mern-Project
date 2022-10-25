import './creatorPage.css';
import Header from '../../Components/Header/Header';
import ThumbnailCreator from '../../Components/thumbnailCreator/thumbnailCreator';
import {Link, useParams} from 'react-router-dom';

function CreatorPage() {
    const {id} = useParams();

    console.log(id);

    return (
        <div className="creatorPage">   
            <Link to="/">Front Page</Link>
            <Header />
            <ThumbnailCreator/>
        </div>
    );
}

export default CreatorPage;