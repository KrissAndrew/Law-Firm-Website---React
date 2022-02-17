import classes from "./NavBar.module.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";

import { CSSTransition } from "react-transition-group";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    if (screenWidth > 810) {
      setToggleMenu(false);
    }

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth]);

  return (
    <nav className={classes.Navbar} id="Navbar">
      <div className={classes.Logo}>
        <div className={classes.LogoImg}>
          <img src={logo} alt="K & A Icon" />
        </div>
        <div>Kriss & Andrew LLP</div>
      </div>
      {screenWidth > 810 && (
        <div className={classes.NavList}>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#practice">
              <li>Practice Areas</li>
            </a>
            <a href="#vision">
              <li>Our Vision</li>
            </a>
            <a href="#attorneys">
              <li>Attorneys</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      )}
      <CSSTransition
        in={toggleMenu}
        timeout={200}
        classNames="nav-transition"
        unmountOnExit
      >
        <div className={classes.NavList}>
          <ul>
            <a onClick={() => setToggleMenu(false)} href="#home">
              <li>Home</li>
            </a>
            <a onClick={() => setToggleMenu(false)} href="#practice">
              <li>Practice Areas</li>
            </a>
            <a onClick={() => setToggleMenu(false)} href="#vision">
              <li>Our Vision</li>
            </a>
            <a onClick={() => setToggleMenu(false)} href="#attorneys">
              <li>Attorneys</li>
            </a>
            <a onClick={() => setToggleMenu(false)} href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </CSSTransition>
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
