import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo3.png";
import "./NavBar.css";

const NavBar = (props) => {
  // const handleLogoClick = () => {};

  return (
    <nav className="navbar navbar-light sticky-top">
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
            <NavLink to="/movies" className="dropdown-item">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/series" className="dropdown-item">
              Series
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="trending" className="dropdown-item">
              Trending
            </NavLink>
          </li> */}
        </ul>
      </div>

      <NavLink to="/">
        <img
          className="logo"
          src={logo}
          alt="this is a logo of cinemaholics"
          style={{ width: 90, height: 60 }}
          // onClick={() => handleLogoClick()}
        />
      </NavLink>
      <NavLink to="/login">
        {/* <button className="btn btn-secondary"> */}
        <h3 className="bi bi-person-circle btn-light" id="loginicon"></h3>
        {/* </button> */}
      </NavLink>
    </nav>
  );
};

export default NavBar;
