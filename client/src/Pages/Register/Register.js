import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>REGIST</h1>
      <button onClick={(m) => navigate("/login")}>Log in</button>
      <h1>Welcome to Cinemaholics</h1>
      <form>
        <label>Name</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <label>Password</label>
        <input></input>
        <button>Create an account</button>
      </form>
    </div>
  );
};

export default Register;
