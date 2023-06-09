import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

// import Switch from "../../components/Switch.js";

const INIT_LOGINFORM = {
	emailLogin: "",
	passwordLogin: "",
};

const Login = (props) => {
	const [loginInput, setLoginInput] = useState(INIT_LOGINFORM);
	const { inputLoginCb, loginError } = props;
	const navigate = useNavigate();
	const [isToggled, setIsToggled] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginInput({ ...loginInput, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		inputLoginCb(loginInput);
		setLoginInput(INIT_LOGINFORM);
	};

	return (
		<div>
			{/* <Switch
				rounded={true}
				isToggled={isToggled}
				onToggled={() => setIsToggled(!isToggled)}
			/> */}
			<div className="button-box">
				<div id="btn"></div>
				<button
					type="button"
					className="toggle-btn"
					onClick={(m) => navigate("/login")}
				>
					Log in
				</button>
				<button
					type="button"
					className="toggle-btn"
					onClick={(m) => navigate("/register")}
				>
					Register
				</button>
			</div>

			<div className="container">
				<h1 id="welcomemessage">Welcome back!</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<div className="row  justify-content-center">
							<div className="col-sm-3">
								<label for="exampleInputEmail1">Email</label>

								<input
									className="form-control"
									id="email"
									type="email"
									placeholder="nugget@example.com"
									name="emailLogin"
									value={loginInput.emailLogin}
									onChange={handleChange}
									required
								></input>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="row  justify-content-center">
							<div className="col-sm-3">
								<label for="exampleInputPassword">Password</label>
								<input
									className="form-control"
									id="password"
									type="password"
									name="passwordLogin"
									placeholder="your password..."
									value={loginInput.passwordLogin}
									label="Password"
									onChange={handleChange}
									required
								></input>
							</div>
						</div>
					</div>
					<button
						variant="secondary"
						type="submit"
						className="btn btn-danger"
						id="buttonlogin"
					>
						Log in
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
