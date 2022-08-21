import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route exact path='/' element = {<LandingPage />} />
            <Route path='/LoginPage' element = {<LoginPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
