import './App.css';
import FrontPage from './Pages/frontPage/frontPage';
import CreatorPage from './Pages/creatorPage/creatorPage';
import UtilityPage from './Pages/utilityPage/utilityPage';
import SignLogPage from './Pages/signLogPage/signLogPage';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState({});

  console.log(token);

  return (
    <div>
      <Routes>
        <Route path = "/" element = {<FrontPage token = {token}/>}/>
        <Route path = "creator/:title" element = {<CreatorPage token = {token}/>}/>
        <Route path = "creator" element = {<CreatorPage token = {token}/> }/>
        <Route path = "utility" element = {<UtilityPage token = {token}/>}/>
        <Route path = "signLog" element = {
        <SignLogPage setToken = {setToken}
                     token = {token}/>}/>
        <Route path = "*" element = {<h3>No Match</h3>}/>
      </Routes>
    </div>
  )
}

export default App;
