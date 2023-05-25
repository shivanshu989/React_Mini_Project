import React from 'react'
import './SignupForm.css'
import Navbar from '../NavBar';
import { useState } from 'react';
import axios from 'axios';


function SignupForm() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/signup', {fname, lname, email, password, contact})
        .then((obj) => {
            console.log(obj);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <>
            <Navbar />
            <div className='wrapper d-flex align-items-center justify-content-center w-100'>
                <div ClassName='signupform'>
                    <h2 className='mb-3'>Signup Form</h2>
                    <form className='needs-validation'>
                        <div className='form-group  was-validated mb-2'>
                            <label htmlFor='first name' className='form-label'>First Name</label>
                            <input type='first name' className='form-control' required onChange={(e) => setFname(e.target.value)}></input>
                            <div className="invalid-feedback">
                                Please Enter your First Name
                            </div>
                        </div>
                        <div className='form-group  was-validated mb-2'>
                            <label htmlFor='last name' className='form-label'>Last Name</label>
                            <input type='last name' className='form-control' required onChange={(e) => setLname(e.target.value)}></input>
                            <div className="invalid-feedback">
                                Please Enter your Last Name
                            </div>
                        </div>
                        <div className='form-group  was-validated mb-2'>
                            <label htmlFor='email' className='form-label'>Email Address</label>
                            <input type='email' className='form-control' required onChange={(e) => setEmail(e.target.value)}></input>
                            <div className="invalid-feedback">
                                Please Enter your email
                            </div>
                        </div>
                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input type="password" className='form-control'
                                required onChange={(e) => setPassword(e.target.value)}></input>
                            <div className="invalid-feedback">
                                Please Enter your Password
                            </div>
                        </div>
                        <div className='form-group  was-validated mb-2'>
                            <label htmlFor='contact number' className='form-label'>Contact Number</label>
                            <input type='contact number' className='form-control' required onChange={(e) => setContact(e.target.value)}></input>
                            <div className="invalid-feedback">
                                Please Enter your Contact Number
                            </div>
                        </div>
                        <button className='btn btn-success w-100 mt-2' onClick={handleSignUp}>SIGN UP</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignupForm;