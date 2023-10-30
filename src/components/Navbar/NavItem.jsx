import React from "react";

const NavItem = ({ info }) => {
  return (
    <li className="nav-item">
      <a href={info.slug} className="nav-link">
        {info.title}
      </a>
    </li>
  );
};

export default NavItem;
