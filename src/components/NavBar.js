import React from 'react';
import { Router,Route,Link } from 'react-router-dom';
import About from './About'
import Login from './Login'
import Signup from './Signup';
import App from '../App';

export default function Navbar(props){
  return(
    <>
    <Router>
    <switch>
      <Route path="/">
        <App/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
    </switch>
  </Router>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Health Edit</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to='/about'>About us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/login'>Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/signup'>Signup</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}