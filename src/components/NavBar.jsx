import React from "react";
import SearchInput from "./SearchInput";
import { navItems } from "../data/navItems";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-blue">
        <div className="container flex">
          <a href="index.html" className="navbar-brand">
            <img src="images/new-logo.png" width='50px' height='50px' alt="site logo" />
          </a>
          <button type="button" className="navbar-show-btn">
            <img src="images/ham-menu-icon.png" alt="" />
          </button>

          <div className="navbar-collapse bg-white">
            <button type="button" className="navbar-hide-btn">
              <img src="images/close-icon.png" alt="" />
            </button>
            <ul className="navbar-nav">
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <HashLink to={item.path} className="nav-link">
                      {item.name}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
            <SearchInput />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
