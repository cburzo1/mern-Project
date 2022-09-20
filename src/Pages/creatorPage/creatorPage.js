import './creatorPage.css';
import Header from '../../Components/Header/Header';
import ThumbnailCreator from '../../Components/thumbnailCreator/thumbnailCreator';

function CreatorPage() {
    return (
        <div className="creatorPage">   
            <Header />
            <ThumbnailCreator/>
        </div>
    );
}

export default CreatorPage;