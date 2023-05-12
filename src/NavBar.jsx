import NavBarItem from "./NavbarItem";
import Hamburger from "../assets/hamburger.png";
import "./NavBar.css";

const NavBar = ({
  planetNames,
  handlePlanetClick,
  data,
  handleChoice,
  isClicked,
}) => {
  return (
    <>
      <div className="main">
        <div className="header">
          <p>THE PLANETS</p>
          <img src={Hamburger} alt="Hamburger" onClick={handleChoice} />
        </div>
        <hr className="hr-head" />
        <div className="nav-items-container">
          {planetNames.map((name) => {
            const planet = data.find((planet) => planet.name === name);
            const color = planet ? planet.color : "";

            return (
              <div key={name} className="nav-item">
                <NavBarItem
                  name={name}
                  color={color}
                  isClicked={isClicked}
                  handleClick={() => handlePlanetClick(planet)}
                  handleChoice={handleChoice}
                />
              </div>
            );
          })}
        </div>
      </div>
      <hr className="hr-desk" />
    </>
  );
};

export default NavBar;
