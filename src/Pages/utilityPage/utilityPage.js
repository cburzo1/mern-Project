import './utilityPage.css';
import Header from '../../Components/Header/Header';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function UtilityPage() {
    const [userCreations, setUserCreations] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/userFeed/posts')
        .then(res => res.json())
        .then(resData => {
            setUserCreations(resData.posts);
        })
        .catch(err => console.log(err));
    }, []);

    //console.log(userCreations);

    const deletePost = (i) => {
        fetch(`http://localhost:3001/userFeed/postDelete/${i}`,{
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: ''
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
            //setUserCreations(prevState => {return });
        })
        .catch(err => console.log("ERROR HERE::", err));
    }

    return (
        <div className="utilityPage">   
            <Link to="/">Front Page</Link>
            {userCreations.map(i => {
                console.log(i._id);
                    return (
                        <div key = {Math.random()}>
                            {i.thumbnailTitle}
                            <Link to = {'/creator/'+ 
                                JSON.stringify(i).replace('/', '...')
                            }>EDIT</Link>
                            <button onClick={() => deletePost(i._id)}>Delete</button>
                        </div>);
                })}
        </div>
    );
}

export default UtilityPage;