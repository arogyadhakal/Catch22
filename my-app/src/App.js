import './App.css';
import React from 'react';
import Navbar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
