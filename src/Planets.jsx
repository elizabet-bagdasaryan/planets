import React, { useState } from "react";
import "./Planets.css";
import data from "../data.json";
import NavBar from "./NavBar";
import Overview from "./Overview";
import Structure from "./Structure";
import Geology from "./Geology";
import Footer from "./Footer";
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

  const planetNames = data.map((planet) => planet.name);

  return (
    <div className="main-section">
      <NavBar
        planetNames={planetNames}
        handlePlanetClick={handlePlanetClick}
        data={data}
      />
      <div className="planet-details">
        {selectedPlanet ? (
          <>
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
            <hr className="hr-buttons" />

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
      {selectedPlanet && <Footer planet={selectedPlanet} />}
    </div>
  );
}

export default Planets;
