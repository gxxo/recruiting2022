import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Result from './components/views/ResultPage/Result';
import ResultPage from './components/views/ResultPage/ResultPage';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route exact path='/' element = {<LandingPage />} />
            <Route path='/LoginPage' element = {<LoginPage />} />
            <Route path='/Result' element = {<Result />} />
            <Route path='/ResultPage' element = {<ResultPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
