import './utilityPage.css';
import Header from '../../Components/Header/Header';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function UtilityPage(props) {
    const [userCreations, setUserCreations] = useState([]);

    console.log("token in utility", props.token.token);

    let token = props.token.token;

    if(props.token.token === undefined){
        token = localStorage.getItem('token');
    }

    console.log("token in utility after", token);

    useEffect(() =>{
        fetch('http://localhost:3001/userFeed/utility', {
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        .then(res => res.json())
        .then(resData => {
            console.log(resData.posts);
            setUserCreations(
                resData.posts
            );
        })
        .catch(err => console.log(err));
    }, []);

    //console.log(userCreations);

    const deletePost = (i) => {
        fetch(`http://localhost:3001/userFeed/postDelete/${i}`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
                Authorization: 'Bearer ' + token
            },
            body: ''
        })
        .then(res => {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Deleting post failed!'); 
            }
            return res.json();
        })
        .then(resData => {
            setUserCreations(prevState => {
                return resData.posts;
            });
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