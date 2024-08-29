import "./style.css";
import logo from "../../svg/logo.svg";

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink to="/">
        <img src={logo} alt="" className="logo" />
      </NavLink>
      <NavLink className="reef" to='/'>
        <li>Главная</li>
      </NavLink>
      <NavLink className="reef" to='/map'>
        <li>Карта</li>
      </NavLink>
      <NavLink className="reef" to='/oopt'>
        <li>ООПТ</li>
      </NavLink>
      <NavLink className="reef" to='/routeInfo'>
        <li>Тропа</li>
      </NavLink>
      <NavLink className="reef" to='/about'>
        <li><div>О нас</div></li>
      </NavLink>
    </div>
  );
}
 
export default Navbar;