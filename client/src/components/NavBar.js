import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo3.png";
import "./NavBar.css";

const NavBar = (props) => {
	return (
		<nav className="navbar navbar-light sticky-top">
			<div className="dropdown">
				{/* //id is to connect button with dropdown items */}

				<h3
					className="bi bi-list btn-lg dropdown-toggle"
					style={{ color: "white", paddingLeft: 10 }}
					type="button"
					id="menu-dropdown"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				></h3>

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
				</ul>
			</div>

			<NavLink to="/">
				<img
					className="logo"
					src={logo}
					alt="this is a logo of cinemaholics"
					style={{ width: 90, height: 60 }}
				/>
			</NavLink>
			{props.user ? (
				<div className="dropdown-center">
					<h3
						className="bi bi-person-circle dropdown-toggle  btn-light"
						style={{ color: "white", paddingRight: 15 }}
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					></h3>
					<ul className="dropdown-menu dropdown-menu-end dropdown-menu-start dropdown-menu-dark">
						<li>
							<a className="dropdown-item" href="/user">
								My account
							</a>
						</li>
						<li>
							<a
								className="dropdown-item"
								onClick={props.doLogout}
								// href="/login"
							>
								Logout
							</a>
						</li>
					</ul>
				</div>
			) : (
				<NavLink to="/login">
					<h3
						className="bi bi-person-circle  btn-light"
						style={{ color: "white", paddingRight: 15 }}
						type="button"
					></h3>
				</NavLink>
			)}
		</nav>
	);
};

export default NavBar;
