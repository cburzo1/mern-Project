import './App.css';
import FrontPage from './Pages/frontPage/frontPage';
import CreatorPage from './Pages/creatorPage/creatorPage';
import {Routes, Route, Outlet, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "frontPage" element = {<FrontPage/>}/>
        <Route path = "creator" element = {<CreatorPage/>}/>
        <Route path = "*" element = {<h3>No Match</h3>}/>
      </Routes>
    </div>
  );
}

export default App;
