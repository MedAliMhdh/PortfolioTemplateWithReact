import React from "react";
import "./header.css";

const Header = ({ name, navb }) => {
  return (
    <div className="header">
      <h1>{name}</h1>
      <nav className="navmenu">
        {navb.map((elm, i) => (
          <li key={i} href="#">
            {elm}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Header;
