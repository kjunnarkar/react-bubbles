import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import ProtectedRoute from './components/ProtectedRoute';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul className='top-links'>
          <li>
            <Link className='list-links' to='/login'>Login</Link>
          </li>
          <li>
            <Link className='list-links' to='/bubbles'>See Bubbles</Link>
          </li>
        </ul>
        <Route exact path="/" component={Login} />
        <Route path='/login' component={Login} />
        <ProtectedRoute exact path='/bubbles' component={BubblePage} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
      </div>
    </Router>
  );
}

export default App;
