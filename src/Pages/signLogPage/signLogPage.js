import './signLogPage.css';
import Header from '../../Components/Header/Header';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function SignLogPage(props) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [signLog, setsignLog] = useState(false);

    const emailSetter = (e) => {
        setUserEmail(e.target.value);
    }

    const passwordSetter = (e) => {
        setUserPassword(e.target.value);
    }

    const userNameSetter = (e) => {
        setUserName(e.target.value);
    }

    const submitCredentials = (e) => {
        e.preventDefault();

        fetch(signLog ? 'http://localhost:3001/auth/login' : 'http://localhost:3001/auth/signup',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
                username: userName
            })
        })
        .then(res => {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Creating a user failed!'); 
            }
            return res.json();
        })
        .then(resData => {
            const post = JSON.stringify(resData);
            localStorage.setItem('token', resData.token);
            props.setToken(resData);
        })
        .catch(err => console.log("ERROR HERE::", err));
    }
   
    const signLogSwitch = (e) => {
        setsignLog(prevState => {
            return !prevState;
        });
    }

    return (
        <div className="signLogPage">   
            <Link to="/">Front Page</Link>
            <br/>
            <h3>Email: </h3>
            <input onChange = {emailSetter} value = {userEmail}/>
            <h3 style = {signLog?{display: 'none'}: {display: 'block'}}>UserName: </h3>
            <input onChange = {userNameSetter} value = {userName} style = {signLog?{display: 'none'}: {display: 'block'}}/>
            <h3>Password: </h3>
            <input  onChange = {passwordSetter} value = {userPassword} />
            <button onClick = {submitCredentials}>Submit</button>
            <button onClick = {signLogSwitch}>{signLog ? 'Sign Up': 'Log In'}</button>
        </div>
    );
}

export default SignLogPage;