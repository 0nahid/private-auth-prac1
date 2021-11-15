import React from "react";
import { Link } from "react-router-dom";
import firebaseAuthentication from "../../Hook/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logout } = firebaseAuthentication();
  return (
    <div className="header">
      <Link to="/home">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <span>{user.displayName}</span>
      {user?.email && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Header;