import React from "react";
import { Link } from "react-router-dom";
import firebaseAuthentication from "../../Hook/useFirebase";

const Login = () => {
  const { signInWithGoogle } = firebaseAuthentication();
  return (
    <div>
      Please Login here
      <button onClick={signInWithGoogle}>Google Signin</button>
      <br />
      <Link to="/register">New User?</Link>
    </div>
  );
};

export default Login;
