import './thumbnailCreator.css';
import { useState } from 'react';

function ThumbnailCreator() {
    const [val, setVal] = useState('');

    const changeVal = (e) => {
        setVal(e.target.value);
    }

    const Accept = () => {
        fetch('http://localhost:3001/userFeed/post', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                ThumbnailTitle: val
            })
        })
        .then(res => {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Creating or editing a post failed!'); 
            }
            return res.json();
        })
        .then(resData => {
            const post = JSON.stringify(resData);
            console.log(post);
        });
    }

    return (
        <div className="thumbnailCreator">
            <div className = "textBox">
                <p>Title:</p>
                <input onChange={changeVal} value = {val}></input>
            </div>
            <div className = "imageBox">
                <p>Image:</p>
                    <input type="file" id="myFile" name="filename" />
            </div>
            <div className = "accept">
                <button onClick={Accept}>Accept</button>
            </div>
        </div>
    );
}

export default ThumbnailCreator;