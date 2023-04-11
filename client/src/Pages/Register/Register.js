import { useState, state } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = (props) => {
	const INIT_REGISTRATION = {
		name: "",
		email: "",
		password: "",
	};

	const [registerForm, setRegisterForm] = useState(INIT_REGISTRATION);
	const navigate = useNavigate();

	const handleChange = (i) => {
		const { name, value } = i.target;
		setRegisterForm({ ...registerForm, [name]: value });
	};

	function handleSubmit(event) {
		event.preventDefault();
		props.addNewCb(registerForm);
		console.log("create an account submited", registerForm);
		// handleSubmit saves all info in register form
		setRegisterForm(INIT_REGISTRATION);
		navigate("/login");
	}

	return (
		<div>
			<button onClick={(m) => navigate("/login")}>Log in</button>

			<div className="container" id="formcontainer">
				<h1 id="welcomemessage">Welcome to Cinemaholics</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label for="exampleInputName1">Name</label>
						<input
							type="text"
							className="form-control"
							id="name"
							// name is needed so registerForm knows where to put input from this field
							name="name"
							aria-describedby="emailHelp"
							placeholder="John"
							value={registerForm.name}
							required
							onChange={handleChange}
						></input>
					</div>
					<div className="form-group">
						<label for="exampleInputEmail1">Email</label>
						<input
							type="text"
							className="form-control"
							name="email"
							id="email"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							value={registerForm.email}
							onChange={handleChange}
						></input>
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							name="password"
							placeholder="Password"
							value={registerForm.password}
							onChange={handleChange}
						></input>
					</div>
					{/* button needs to have type submit, without it it wont call handlesubmit funtion!!!! */}
					<button type="submit" className="btn btn-secondary">
						Create an account
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
