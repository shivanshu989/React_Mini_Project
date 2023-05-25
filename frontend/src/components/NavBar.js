import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar(props) {

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    navigate('/login');
    localStorage.removeItem('user');
    setLoggedIn(false);
  }

  const [userid, setUserId] = useState("");

  useEffect(() => {
    if(localStorage.getItem('user')) {
      setLoggedIn(true);
      setUserId(JSON.parse(localStorage.getItem('user')));
    }
  }, [localStorage.getItem('user')])

  // console.log(userid);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container">

          <Link to="" className="navbar-brand me-2">
            <label>Health Edit</label>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              {loggedIn ? (
                <>
                  <button className="btn btn-primary px-3 me-2" onClick={handleLogout}>
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" type="button" className="btn btn-primary px-3 me-2">
                    Login
                  </Link>
                  <Link to="/signup" type="button" className="btn btn-primary me-3">
                    Sign Up
                  </Link>
                </>
              )}

            </div>

          </div>

        </div>

      </nav>
    </>
  );
}