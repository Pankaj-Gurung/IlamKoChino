import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
      <header>
        <div>Ilam Ko Chino</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </nav>
        
      </header>
    </div>
  );
};

export default Navbar;
