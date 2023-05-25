import React from 'react'
import './LoginForm.css'
import Navbar from '../NavBar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {email, password})
    .then((obj) => {
      if(obj.data.user) {
        // User loggged in
        // console.log(obj.data.user);
        localStorage.setItem('user', JSON.stringify(obj.data.user._id));
        navigate('/');
      } else {
        console.log("User not found!! Please signup first");
      }
    })
  }

  return (
    <>
      <Navbar />
      <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <div ClassName='login'>
          <h2 className='mb-3'>Login Form</h2>
          <form action="POST" className='needs-validation'>
            <div className='form-group  was-validated mb-2'>
              <label htmlFor='email' className='form-label'>Email Address</label>
              <input type='email' className='form-control' onChange={(e)=>{setEmail(e.target.value)}} required></input>
              <div className="invalid-feedback">
                Please Enter your email
              </div>
            </div>
            <div className='form-group was-validated mb-2'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input type="password" className='form-control' onChange={(e)=>{setPassword(e.target.value)}} required></input>
              <div className="invalid-feedback">
                Please Enter your Password
              </div>
            </div>
            <button className='btn btn-success w-100 mt-2' onClick={handleLogin}>SIGN IN</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm