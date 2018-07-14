import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';

import '../styles/styling.scss';

const ProjectRouter = () => (
  <Router>
    <div>
      <nav className="navbar">
        <div className="navbar--left">
          <ul className="navlist">
            <li className="nav-item"><Link to="/">Home</Link></li>
          </ul>
        </div>
        <div className="navbar--right">
          <ul className="navlist">
            <li className="nav-item"><Link to="/settings">Settings</Link></li>
          </ul>
        </div>
      </nav>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/settings" component={Settings}/>
    </div>
  </Router>
)

export default ProjectRouter;
