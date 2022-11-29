import './frontPage.css';
import UserPanel from '../../Components/userPanel/userPanel';
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import AuthContext from '../../store/auth-context';

function FrontPage() {
    const authCtx = useContext(AuthContext);

    let logStatus;

    if(!authCtx.isLoggedIn){
        logStatus = "SignIn";
    }else{
        logStatus = "LogOut"
    }

    const toLogOut = () =>{
        if(logStatus == 'LogOut'){
            authCtx.logout();
        }
    }
    
    return (
        <div className="frontPage">
            {authCtx.isLoggedIn && <Link to="/creator">Creator Page</Link>}
            {authCtx.isLoggedIn && <Link className="utilityPageLink" to="utility">Utility Page</Link>}
            <Link className="signLogPageLink" onClick={toLogOut} to="/signLog">{logStatus}</Link>
            <UserPanel/>
        </div>
    );
}

export default FrontPage;