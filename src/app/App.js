import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Settings from './Settings';

import '../styles/styling.scss';

const ProjectRouter = () => (
  <Router>
    <div>
      <Navbar />
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/settings" component={Settings}/>
    </div>
  </Router>
)

export default ProjectRouter;
