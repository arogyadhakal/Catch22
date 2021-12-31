import './App.css';
import React from 'react';
import Navbar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
