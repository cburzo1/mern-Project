import './App.css';
import FrontPage from './Pages/frontPage/frontPage';
import CreatorPage from './Pages/creatorPage/creatorPage';
import UtilityPage from './Pages/utilityPage/utilityPage';
import SignLogPage from './Pages/signLogPage/signLogPage';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  console.log(authCtx.token);

  return (
    <div>
      <Routes>
        <Route path = "/" element = {<FrontPage />}/>
        <Route path = "/creator/:title" element = {authCtx.isLoggedIn ?<CreatorPage /> : <Navigate to = "/signLog"/>}/>
        <Route path = "/creator" element = {authCtx.isLoggedIn ?<CreatorPage />: <Navigate to = "/signLog"/>}/>
        <Route path = "/utility" element = {authCtx.isLoggedIn ? <UtilityPage /> : <Navigate to = "/signLog"/>}/>
        <Route path = "signLog" element = {<SignLogPage />}/>
        <Route path = "*" element = {<h3>No Match</h3>}/>
      </Routes>
    </div>
  )
}

export default App;
