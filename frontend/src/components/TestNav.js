import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar(props) {

  const [login, setLogin] = useState(false);

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container">

        <Link to="" className="navbar-brand me-2">
          <label>Logo</label>
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
              <Link className="nav-link" to="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">About Us</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            {login ? (
              <>
                <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} style={{ height: "2.5rem", width: "2.5rem", borderRadius: "50%", border: "1px solid gray", marginRight: "0.5rem" }} alt="" />
                <Link type="button" className="btn btn-primary px-3 me-2" onClick={(e) => {
                  setLogin(false);
                }}>
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link type="button" className="btn btn-primary px-3 me-2" onClick={(e) => {
                  setLogin(true);
                }}>
                  Login
                </Link>
                <Link type="button" className="btn btn-primary me-3">
                  Sign up for free
                </Link>
              </>
            )}

          </div>

        </div>

      </div>

    </nav>
  );
}