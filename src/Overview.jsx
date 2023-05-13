import React from "react";
import "./Planets.css";
import Src from "../assets/source.png";
const Overview = ({ planet }) => (
  <>
    <img src={planet.images.planet} alt="Planet" className="planet-img" />
    <div className="section-content">
      <h2>{planet.name}</h2>
      <p>{planet.overview.content}</p>
      <p className="source">
        Source:
        <a
          href={planet.overview.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia<img src={Src}></img>
        </a>
      </p>
    </div>
  </>
);

export default Overview;
