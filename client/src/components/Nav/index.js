import React from "react";
import "./style.css";
import image from "../../Images/logo2.jpg"
import { Link } from "react-router-dom";
import "./style.css"

function Nav() {
  return (
    <nav id="myNav"className="navbar navbar-expand-lg navbar ">
      <a className="navbar-brand" id="navbar-profile" href="/home">
        <img style={{ height: 50, width: 45, clear: "both", textAlign: "center" }} src={image} alt="logo"/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/exercises"
              className={window.location.pathname === "/users/login" ? "nav-link active" : "nav-link"}
            >
              Exercises
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/users/login"
              className={window.location.pathname === "/users/login" ? "nav-link active" : "nav-link"}
            >
              Log In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/users/register"
              className={window.location.pathname === "/users/register" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
