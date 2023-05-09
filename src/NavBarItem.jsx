import React from "react";
import { useState } from "react";
import "./NavbarItem.css";
import data from "../data.json";
import Arrow from "../assets/arrow.png";

const NavBarItem = ({ name, color, isClicked }) => {
  return (
    <div className={isClicked ? "names-wrapper-active" : "names-wrapper"}>
      <div className="item">
        <div className="planets-list">
          <div className="circle" style={{ backgroundColor: color }}></div>
          <button className="nav-btn">{name}</button>
        </div>
        <img src={Arrow}></img>
      </div>
      <hr className="hr-items"></hr>
    </div>
  );
};

export default NavBarItem;
