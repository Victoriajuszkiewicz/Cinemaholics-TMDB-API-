import React from "react";
// import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const NavBar = (props) => {
  return (
    <nav className="navbar bg-secondary">
      <div className="dropdown">
        <button
          className="btn btn-secondary btn-lg dropdown-toggle"
          type="button"
          //id is to connect button with dropdown items
          id="menu-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="bi bi-list"></i>
        </button>

        <ul className="dropdown-menu dropdown-menu-dark">
          <li>
            <a className="dropdown-item">Movies</a>
          </li>
          <li className="dropdown-item" type="button">
            Series
          </li>
          <li className="dropdown-item" type="button">
            Trending
          </li>
        </ul>
      </div>
      {/* Logo path = /* */}
      <img
        className="logo"
        src={logo}
        alt="this is a logo of cinemaholics"
        style={{ width: 80, height: 50 }}
      />
      <button className="btn btn-secondary">
        <h2 className="bi bi-person-circle"></h2>
      </button>
    </nav>
  );
};

export default NavBar;
