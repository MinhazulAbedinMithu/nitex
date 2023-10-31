import React, { useEffect, useState } from "react";
import imgLogo from "../../images/nitex_logo.png";
import "./style.scss";
import navData from "./navList";
import NavItem from "./NavItem";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="nav-full">
      <div className="container nav-container">
        <div className="logo">
          <a href="/">
            <img src={imgLogo} alt="Nitex" />
          </a>
        </div>
        <div className="humberger-menu" onClick={handleClick}>
          {open ? <MdClose /> : <MdMenu />}
        </div>
        <div className={`nav-info ${open && "small-device"}`}>
          <ul className="nav-list">
            {navData.map((info, index) => (
              <NavItem key={index} info={info} />
            ))}
          </ul>
          <button className="button">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
