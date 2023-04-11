import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Local } from "./helpers/Local";
import { Api } from "./helpers/Api";

import NavBar from "./components/NavBar";
import Homepage from "./Pages/Homepage/Homepage.js";
import Movies from "./Pages/Movies/Movies.js";
import Series from "./Pages/Series/Series.js";

import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Register/Register.js";

function App() {
	const [user, setUser] = useState(Local.getUser());
	const [loginErrorMsg, setLoginErrorMsg] = useState([]);
	let [allRegistered, setAllRegistered] = useState([]);
	const navigate = useNavigate();
	//BACKEND ROUTES
	//GET all registered users WORKS
	useEffect(() => {
		fetch("http://localhost:5000/users/register")
			.then((res) => res.json())
			.then((json) => {
				setAllRegistered(json);
				console.log(json);
			})
			.catch((error) => {
				console.log(`Server error: ${error.message}`);
			});
	}, []);

	// POST (add new user to DB)- not tested
	async function addNew(registerForm) {
		let options = {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(registerForm),
		};
		console.log(registerForm);
		console.log("passed to DB");

		try {
			let response = await fetch(
				// error says localhost3000 not found!!!!
				"http://localhost:5000/auth/register",
				options
			);
			if (response.ok) {
				let data = await response.json();
			} else {
				console.log(`Server error: ${response.status}: ${response.statusText}`);
			}
		} catch (err) {
			console.log(`Network error: ${err.message}`);
		}
	}
	//LOGIN
	async function doLogin(loginObj) {
		const myresponse = await Api.loginUser(loginObj);
		console.log("passed to DB");
		console.log(loginErrorMsg);
		if (myresponse.ok) {
			Local.saveUserInfo(myresponse.data.token, myresponse.data.user);
			console.log("you are logged in");
			setUser(myresponse.data.user);
			// need add line 80 because this will fetch all the fav data when loging in and not showing the one from the previous user
			// getFav(Local.getUserId());
			//remember to setloginerrormsg to false, so when loging out the error message won't appear if previously we had the message
			setLoginErrorMsg(!loginErrorMsg);
			//after clicking on login, if the action succeed then the user is redirected to the homepage
			navigate("*");
		} else {
			//no need to pass any argument since the default usestate is already set to true
			setLoginErrorMsg();
		}
	}
	// logout
	function doLogout() {
		Local.removeUserInfo();
		setUser(null);
		// (NavBar will send user to home page)
	}

	return (
		<div className="App">
			<NavBar />

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/series" element={<Series />} />
				<Route
					path="/login"
					element={<Login inputLoginCb={doLogin} loginError={loginErrorMsg} />}
				/>
				<Route path="/register" element={<Register addNewCb={addNew} />} />
			</Routes>
		</div>
	);
}

export default App;
