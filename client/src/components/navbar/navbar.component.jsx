import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <header>
        <div className="left-wrapper">
          <i className="logo">Ilam Ko Chino</i>
          <nav className="link-wrapper">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </nav>
        </div>
        <div className="button-wrapper">
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
