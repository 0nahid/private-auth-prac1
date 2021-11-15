import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="register-form">
      <h2>Register here</h2>
      <form>
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <input type="submit" value="Register" />
      </form>
      <Link to="/login">Already registered?</Link>
    </div>
  );
};

export default Register;
