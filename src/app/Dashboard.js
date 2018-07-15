import React, { Component } from 'react';
import logo from '../images/logo.svg';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <div className="panel">
            <header>Dashboard</header>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
              <h2 className="testo">HEYO</h2>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;