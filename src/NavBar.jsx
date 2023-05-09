import React from "react";
import data from "../data.json";
import NavBarItem from "./NavbarItem";
import Hamburger from "../assets/hamburger.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <div className="header">
        <p>THE PLANETS</p>
        <img src={Hamburger}></img>
      </div>
      <hr className="hr-head" />
      <div>
        {data.map((e) => (
          <div to={e.name} key={e.name}>
            <NavBarItem name={e.name} color={e.color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
