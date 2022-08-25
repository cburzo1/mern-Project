import './userPanel.css';
import PanelItem from '../panelItem/panelItem';
import { useState, useEffect } from 'react';

function UserPanel() {
    const [userPanel, setUserPanel] = useState([0, 0 , 0, 0]);

    useEffect(() =>{
        //setUserPanel([0, 0, 0]);
    }, []);

    return (
        <div className="userPanel">
            {userPanel.map((i, index) => {
                return <PanelItem key = {index}/>
            })}
        </div>
    );
}

export default UserPanel;
