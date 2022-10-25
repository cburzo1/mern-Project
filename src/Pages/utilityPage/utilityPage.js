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

    return (
        <div className="utilityPage">   
            <Link to="/">Front Page</Link>
            {userCreations.map(i => {
                console.log(i._id);
                    return (
                        <div key = {Math.random()}>
                            {i.thumbnailTitle}
                            <Link to = {'/creator/'+ 
                                i.thumbnailTitle
                            }>EDIT</Link>
                        </div>);
                })}
        </div>
    );
}

export default UtilityPage;