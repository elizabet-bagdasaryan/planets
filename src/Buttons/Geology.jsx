import React from "react";
import "./Planets.css";
import Src from "../assets/source.png";
const Geology = ({ planet }) => (
  <>
    <div className="images">
      <img src={planet.images.planet} alt="Planet" className="planet-img" />
      <img src={planet.images.geology} alt="Geology" />
    </div>
    <div className="section-content">
      <h2>{planet.name}</h2>
      <p>{planet.geology.content}</p>
      <p className="source">
        Source:
        <a
          href={planet.geology.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia <img src={Src}></img>
        </a>
      </p>
    </div>
  </>
);

export default Geology;
