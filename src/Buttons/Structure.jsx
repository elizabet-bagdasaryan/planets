import React from "react";
import "../Planets/Planets.css";
import Src from "../../assets/source.png";

const Structure = ({ planet }) => (
  <>
    <img
      src={planet.images.internal}
      alt="Internal Structure"
      className="planet-img"
    />
    <div className="section-content">
      <h2>{planet.name}</h2>
      <p>{planet.structure.content}</p>
      <p className="source">
        Source:
        <a
          href={planet.structure.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia<img src={Src}></img>
        </a>
      </p>
    </div>
  </>
);

export default Structure;
