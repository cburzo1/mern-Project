import React, {useState, useEffect, useCallback} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () =>{}
    //email: ''
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    //const storedEmail = localStorage.getItem('email');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if(remainingTime <= 3600){
        localStorage.removeItem('token');
        //localStorage.removeItem('email');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        //email: storedEmail,
        token: storedToken,
        duration: remainingTime
    };
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();

    let initialToken;
    //let initialEmail;
    if(tokenData){
        initialToken = tokenData.token;
        //initialEmail = tokenData.email;
    }

    const [token, setToken] = useState(initialToken);
    //const [email, setEmail] = useState(initialEmail);

    const userIsLoggedIn = !!token;

   const logoutHandler =  useCallback( () =>{
        setToken(null);
        //setEmail('');
        localStorage.removeItem('token');
        //localStorage.removeItem('email');
        localStorage.removeItem('expirationTime');

        if(logoutTimer){
            clearTimeout(logoutTimer);
        }
    }, []);


    const loginHandler = (token, expirationTime) => {
        setToken(token);
        //setEmail(userName);
        localStorage.setItem('token', token);
        //localStorage.setItem('email', userName);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    useEffect(() => {
        if (tokenData){
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
        //email: email
    }

    return <AuthContext.Provider value = {contextValue}>
        {props.children}
    </AuthContext.Provider>;
}

export default AuthContext;