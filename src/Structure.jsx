import React, { useState } from "react";
import "./Planets.css";
const Structure = ({ planet }) => (
  <div className="section-content">
    <img src={planet.images.internal} alt="Internal Structure" />
    <h2>{planet.name}</h2>
    <p>{planet.structure.content}</p>
    <p className="source">
      Source:
      <a
        href={planet.structure.source}
        target="_blank"
        rel="noopener noreferrer"
      >
        Wikipedia
      </a>
    </p>
  </div>
);

export default Structure;
