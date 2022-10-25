import './App.css';
import FrontPage from './Pages/frontPage/frontPage';
import CreatorPage from './Pages/creatorPage/creatorPage';
import UtilityPage from './Pages/utilityPage/utilityPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<FrontPage />}/>
        <Route path = "creator/:title" element = {<CreatorPage />}/>
        <Route path = "creator" element = {<CreatorPage />}/>
        <Route path = "utility" element = {<UtilityPage />}/>
        <Route path = "*" element = {<h3>No Match</h3>}/>
      </Routes>
    </div>
  )
}

export default App;
