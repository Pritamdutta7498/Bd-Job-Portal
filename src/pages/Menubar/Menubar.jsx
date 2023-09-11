import React from "react";
import './Menubar.css';
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="Menubar-container">
      <div className="logo">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/4017/4017739.png"
          alt=""
        />
      </div>
      <div className="menu-container">
        <Link className="menu-item" to="/">
          <li>Home</li>
        </Link>
        <Link className="menu-item" to="/MyJobs">
          <li>My Job</li>
        </Link>
        <Link className="menu-item" to="/addJob">
          <li>Post Job</li>
        </Link>

        <Link className="menu-item" to="/login">
          <li>Login</li>
        </Link>

        <Link className="menu-item" to="/register">
          <li>Registration</li>
        </Link>
      </div>
    </div>
  );
};

export default Menubar;
