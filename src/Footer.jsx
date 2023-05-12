import React, { useState } from "react";
import "./Footer.css";
const Footer = ({ planet }) => {
  return (
    <>
      <div className="footer">
        <div>
          <p>Rotation time </p>
          <p> {planet.rotation}</p>
        </div>
        <div>
          <p>Revolution time</p>
          <p> {planet.revolution}</p>
        </div>
        <div>
          <p>Radius </p>
          <p> {planet.radius}</p>
        </div>

        <div>
          <p>Average temp. </p>
          <p> {planet.temperature}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
