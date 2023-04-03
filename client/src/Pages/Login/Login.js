import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={(m) => navigate("/register")}>Register</button>
      <h1>Welcome back!</h1>
      <form>
        <label>Email</label>
        <input></input>
        <label>Password</label>
        <input></input>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
