import React, { useState } from "react";
import "./Navbar.css";
import { NavData } from "../../utils/NavData";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="navbar_container">
      <div className="logo">
        <h2>
          Santhosh <span>Sandy</span>
        </h2>
      </div>
      <div className="menu_icon" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`navbar_content ${menu ? 'open' : ''} ` }>
        {NavData.map((item, index) => (
          <NavLink key={index} to={item.path}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
