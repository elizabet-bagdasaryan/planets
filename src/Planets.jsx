import React, { useState } from "react";
import "./Planets.css";
import data from "../data.json";
import NavBar from "./NavBar";
import Overview from "./Overview";
import Structure from "./Structure";
import Geology from "./Geology";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";

function Planets() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [isClicked, setIsClicked] = useState(false);

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const handleChoice = () => {
    setIsClicked((prevState) => !prevState);
  };
  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    setActiveSection("overview");
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const getButtonStyle = (section) => {
    if (activeSection === section && selectedPlanet) {
      return {
        borderBottomColor: selectedPlanet.color,
      };
    }
    return {};
  };

  const getBigButtonStyle = (section) => {
    if (activeSection === section && selectedPlanet) {
      return {
        backgroundColor: selectedPlanet.color,
      };
    }
    return {};
  };

  const planetNames = data.map((planet) => planet.name);

  return (
    <div className="main-section">
      <NavBar
        planetNames={planetNames}
        handlePlanetClick={handlePlanetClick}
        data={data}
        handleChoice={handleChoice}
        isClicked={isClicked}
      />

      <div
        className={`planet-details ${
          isSmallScreen && !isClicked ? "small-screen-style" : ""
        }`}
      >
        {selectedPlanet ? (
          <>
            <div className="section-buttons">
              <button
                className={activeSection === "overview" ? "active" : ""}
                style={getButtonStyle("overview")}
                onClick={() => handleSectionClick("overview")}
              >
                Overview
              </button>
              <button
                className={activeSection === "structure" ? "active" : ""}
                style={getButtonStyle("structure")}
                onClick={() => handleSectionClick("structure")}
              >
                Structure
              </button>
              <button
                className={activeSection === "geology" ? "active" : ""}
                style={getButtonStyle("geology")}
                onClick={() => handleSectionClick("geology")}
              >
                Geology
              </button>
            </div>
            <hr className="hr-buttons" />
            {activeSection === "overview" && (
              <Overview planet={selectedPlanet} />
            )}{" "}
            <div className="section-buttons-desk">
              <button
                className={activeSection === "overview" ? "active" : ""}
                style={getBigButtonStyle("overview")}
                onClick={() => handleSectionClick("overview")}
              >
                <p>01 </p> <p>Overview</p>
              </button>
              <button
                className={activeSection === "structure" ? "active" : ""}
                style={getBigButtonStyle("structure")}
                onClick={() => handleSectionClick("structure")}
              >
                <p>02 </p> <p>Internal Structure</p>
              </button>
              <button
                className={activeSection === "geology" ? "active" : ""}
                style={getBigButtonStyle("geology")}
                onClick={() => handleSectionClick("geology")}
              >
                <p>03 </p> <p>Surface Geology</p>
              </button>
            </div>
            {activeSection === "structure" && (
              <Structure planet={selectedPlanet} />
            )}
            {activeSection === "geology" && <Geology planet={selectedPlanet} />}
          </>
        ) : (
          <p></p>
        )}
        {selectedPlanet && <Footer planet={selectedPlanet} />}
      </div>
    </div>
  );
}

export default Planets;
