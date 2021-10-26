import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const NavLink = ({ children, active, ...props }) => {
  return (
    <Link
      className={`nav-link--container ${active ? "active" : ""} `}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
