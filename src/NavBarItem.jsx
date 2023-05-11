import React, { useState } from "react";
import "./NavbarItem.css";
import data from "../data.json";
import Arrow from "../assets/arrow.png";

const NavBarItem = ({ name, color, isClicked }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={isClicked ? "names-wrapper-active" : "names-wrapper"}>
      <div className="item">
        <div className="planets-list">
          <div className="circle" style={{ backgroundColor: color }}></div>
          <button
            className="nav-btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              borderTopColor: isHovered ? color : "",
            }}
          >
            {name}
          </button>
        </div>
        <img src={Arrow} alt="Arrow" />
      </div>
      <hr className="hr-items" />
    </div>
  );
};

export default NavBarItem;
