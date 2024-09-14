import "./style.css";
import logo from "../../svg/logo.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      <div className={`menu ${isOpen ? "open" : ""}`}>
        <NavLink className="reef" to="/" onClick={() => setIsOpen(false)}>
          <li>Главная</li>
        </NavLink>
        {/* <NavLink
          className="reef"
          to="/mapPage"
          onClick={() => setIsOpen(false)}
        >
          <li>Карта</li>
        </NavLink> */}
        <NavLink className="reef" to="/oopt" onClick={() => setIsOpen(false)}>
          <li>Тропы</li>
        </NavLink>
        <NavLink className="reef" to="/about" onClick={() => setIsOpen(false)}>
          <li>О нас</li>
        </NavLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default Navbar;
