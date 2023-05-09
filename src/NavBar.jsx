import React from "react";
import data from "../data.json";
import NavBarItem from "./NavbarItem";
import Hamburger from "../assets/hamburger.png";
import "./NavBar.css";
import { useState } from "react";
const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prevState) => !prevState);
  }
  return (
    <div className="main">
      <div className="header">
        <p>THE PLANETS</p>
        <img src={Hamburger} onClick={handleClick}></img>
      </div>
      <hr className="hr-head" />
      <div className="nav-items-container">
        {data.map((e) => (
          <div to={e.name} key={e.name} className="nav-item">
            <NavBarItem name={e.name} color={e.color} isClicked={isClicked} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
