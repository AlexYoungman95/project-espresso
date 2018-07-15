import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Settings from './Settings';

import '../styles/styling.scss';

const ProjectRouter = () => (
  <Router>
    <div>
      <Navbar />
      <div className="body">
        <Route exact path="/" component={Dashboard}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </div>
  </Router>
)

export default ProjectRouter;
