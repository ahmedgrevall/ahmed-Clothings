import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "./../../Assets/4.3 crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="options" to="/shop">
          Shop
        </Link>
        <Link className="options" to="/shop">
          Contact
        </Link>
        <Link className="options" to="/shop">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
