import React, { useState } from "react";
import "./Planets.css";

import data from "../data.json";

const Overview = ({ planet }) => (
  <div className="section-content">
    <h3>Overview</h3>
    <p>{planet.overview.content}</p>
    <a href={planet.overview.source} target="_blank" rel="noopener noreferrer">
      Source
    </a>
    <img src={planet.images.planet} alt="Planet" />
  </div>
);

const Structure = ({ planet }) => (
  <div className="section-content">
    <h3>Structure</h3>
    <p>{planet.structure.content}</p>
    <a href={planet.structure.source} target="_blank" rel="noopener noreferrer">
      Source
    </a>
    <img src={planet.images.internal} alt="Internal Structure" />
  </div>
);

const Geology = ({ planet }) => (
  <div className="section-content">
    <h3>Geology</h3>
    <p>{planet.geology.content}</p>
    <a href={planet.geology.source} target="_blank" rel="noopener noreferrer">
      Source
    </a>
    <img src={planet.images.geology} alt="Geology" />
  </div>
);

function Planets() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    setActiveSection("overview");
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Planet Explorer</h1>
      </header>
      <div className="planet-list">
        {data.map((planet, index) => (
          <div
            key={index}
            className={`planet ${selectedPlanet === planet ? "active" : ""}`}
            onClick={() => handlePlanetClick(planet)}
          >
            {planet.name}
          </div>
        ))}
      </div>
      <div className="planet-details">
        {selectedPlanet ? (
          <>
            <h2>{selectedPlanet.name}</h2>
            <div className="section-buttons">
              <button
                className={activeSection === "overview" ? "active" : ""}
                onClick={() => handleSectionClick("overview")}
              >
                Overview
              </button>
              <button
                className={activeSection === "structure" ? "active" : ""}
                onClick={() => handleSectionClick("structure")}
              >
                Structure
              </button>
              <button
                className={activeSection === "geology" ? "active" : ""}
                onClick={() => handleSectionClick("geology")}
              >
                Geology
              </button>
            </div>
            {activeSection === "overview" && (
              <Overview planet={selectedPlanet} />
            )}
            {activeSection === "structure" && (
              <Structure planet={selectedPlanet} />
            )}
            {activeSection === "geology" && <Geology planet={selectedPlanet} />}
          </>
        ) : (
          <p>Select a planet to view details.</p>
        )}
      </div>
    </div>
  );
}

export default Planets;
