import './userPanel.css';
import PanelItem from '../panelItem/panelItem';
import { useState, useEffect } from 'react';

function UserPanel() {
    const [userPanel, setUserPanel] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/userFeed/posts')
        .then(res => res.json())
        .then(resData => {
            console.log(resData);
            setUserPanel(resData);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="userPanel">
            {userPanel.map((i, index) => {
                return (<PanelItem 
                    key = {index}
                    item = {userPanel[index]}/>)
            })}
        </div>
    );
}

export default UserPanel;
