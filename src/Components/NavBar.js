import classes from "./NavBar.module.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={classes.Navbar} id="Navbar">
      <div className={classes.Logo}>
        <div className={classes.LogoImg}>
          <img src={logo} alt="K & A Icon" />
        </div>
        <div>Kriss & Andrew LLP</div>
      </div>
      {(toggleMenu || screenWidth > 810) && (
        <div className={classes.NavList}>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/">
              <li>Practice Areas</li>
            </a>
            <a href="/">
              <li>Our Vision</li>
            </a>
            <a href="/">
              <li>Attorneys</li>
            </a>
            <a href="/">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      )}
      <img
        className={classes.btn}
        onClick={toggleNav}
        src="https://img.icons8.com/material-outlined/48/000000/menu--v3.png"
        alt="Burgey"
      />
    </nav>
  );
};

export default NavBar;
