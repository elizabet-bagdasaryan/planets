import React, { useState } from "react";
import "./NavbarItem.css";
import Arrow from "../assets/arrow.png";

const NavBarItem = ({ name, color, isClicked, handleClick, handleChoice }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePlanetChoosing = () => {
    handleChoice();
    handleClick();
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
            onClick={handlePlanetChoosing}
          >
            {name}
          </button>
        </div>
        <img src={Arrow} alt="Arrow" onClick={handlePlanetChoosing} />
      </div>
      <hr className="hr-items" />
    </div>
  );
};

export default NavBarItem;
