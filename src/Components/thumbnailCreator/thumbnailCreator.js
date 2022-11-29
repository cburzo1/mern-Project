import './thumbnailCreator.css';
import { useState } from 'react';

function ThumbnailCreator(props) {
    const [valThumbnail, setThumbnailVal] = useState('');
    const [valImage, setImageVal] = useState({});
    const [statusMsg, setStatusMsg] = useState('');

    let title;
    let url;
    if(props.title){
        props.title.replace('...', '/');
        title = JSON.parse(props.title);
    }

    const changeThumbnailVal = (e) => {
        setThumbnailVal(e.target.value);
    }

    const changeImageVal = (e) => {
        setImageVal(e.target.files[0]);
    }

    const Accept = () => {

        const formData = new FormData();

        formData.append('ThumbnailTitle', valThumbnail);
        formData.append('image', valImage);

        fetch(title != null? url = `http://localhost:3001/userFeed/post/${title._id}`: url = 'http://localhost:3001/userFeed/post',{
            headers:{
                Authorization: 'Bearer ' + props.tokenItself
            },
            method: 'POST',
            body: formData
        })
        .then(res => {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Creating or editing a post failed!'); 
            }
            return res.json();
        })
        .then(resData => {
            const post = JSON.stringify(resData);
            setTimeout(() => {
                setStatusMsg('');
            }, 3000);
            setStatusMsg('You successfully Added a Thumbnail!');
        })
        .catch(err => console.log("ERROR HERE::", err));
    }

    return (
        <div className="thumbnailCreator">
            <div className = "textBox">
                <p>Title:</p>
                <input onChange={changeThumbnailVal} value = {valThumbnail}></input>
            </div>
            <div className = "imageBox">
                <p>Image:</p>
                    <input type="file" id="myFile" name="filename" onChange={changeImageVal}/>
            </div>
            <div className = "accept">
                <button onClick={Accept}>Accept</button>
                <h3>{statusMsg}</h3>
            </div>
        </div>
    );
}

export default ThumbnailCreator;