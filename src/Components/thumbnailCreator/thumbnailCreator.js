import './thumbnailCreator.css';

function ThumbnailCreator() {
    return (
        <div className="thumbnailCreator">
            <div className = "textBox">
                <p>Title:</p>
                <input></input>
            </div>
            <div className = "imageBox">
                <p>Image:</p>
                    <input type="file" id="myFile" name="filename" />
            </div>
        </div>
    );
}

export default ThumbnailCreator;