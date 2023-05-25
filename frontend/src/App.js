import './App.css';
import NavBar from './components/NavBar';
import React, { useEffect } from'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import About from './components/About/About'
import Login from './components/LoginForm/LoginForm'
import Signup from './components/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import { useState } from 'react';

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;