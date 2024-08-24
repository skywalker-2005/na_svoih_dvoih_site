import "./style.css";
import logo from "../../svg/logo.svg";
import search from "../../svg/search.svg";

// import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <a href="#route"><img src={logo} alt="" className="logo" /></a>
      <a href="#route" className="reef"><div>Главная</div></a>
      <a href="oopt.html" className="reef"><div>ООПТ</div></a>
      <a href="map.html" className="reef"><div>Карта</div></a>
      <div className="reef">О нас</div>
      <div className="reef">Новости</div>
      <img src={search} alt="" className="lupa" />
    </div>
  );
}
 
export default Navbar;