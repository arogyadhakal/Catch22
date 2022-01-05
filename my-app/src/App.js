import React from 'react';
import Navbar from "./components/NavBar/NavBar";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Home from './components/Pages/HomeComponent';
import Goal from './components/Pages/GoalPage';
import Reminder from './components/Pages/ReminderPage';
import Display from './components/Pages/DisplayPage';
import Form from './components/Pages/SignUpPage';
import Login from './components/Pages/LoginPage';
import YoutubeDisplay from './components/YoutubeDisplay';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/goal-page" element={<Goal/>}/>
        <Route path="/reminder-page" element={<Reminder/>}/>
        <Route path="/youtube-page" element={<YoutubeDisplay/>}/>
        <Route path="/display-page" element={<Display/>}/>
        <Route path="/signup-page" element={<Form/>}/>
        <Route path="/log-in" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;