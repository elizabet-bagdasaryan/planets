import React, { useState } from "react";
import "./Planets.css";

const Overview = ({ planet }) => (
  <div className="section-content">
    <img src={planet.images.planet} alt="Planet" />
    <h2>{planet.name}</h2>
    <p>{planet.overview.content}</p>
    <p className="source">
      Source:
      <a
        href={planet.overview.source}
        target="_blank"
        rel="noopener noreferrer"
      >
        Wikipedia
      </a>
    </p>
  </div>
);

export default Overview;
