import "./style.css";
import arrow from "../../svg/arrow.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="layers">
        <div
          className="layer layer-back"
          style={{ backgroundImage: "url(png/back.png)" }}
        ></div>
        <div
          className="layer layer-third"
          style={{ backgroundImage: "url(png/third.png)" }}
        ></div>
        <div
          className="layer layer-second"
          style={{ backgroundImage: "url(png/second.png)" }}
        ></div>
        <div className="main_text">
          <span style={{ fontSize: "2.5vw" }}>открываем новые маршруты</span
          ><br /><span style={{ fontFamily: "Rubik-EB" }}>НА СВОИХ ДВОИХ</span>
        </div>
        <div
          className="layer layer-first"
          style={{ backgroundImage: "url(png/first.png)" }}
        ></div>
      </div>
      <div className="arr">
        <img src={arrow} alt="" style={{ width: "10vw" }} />
      </div>
    </div>
  );
}
 
export default Header;
