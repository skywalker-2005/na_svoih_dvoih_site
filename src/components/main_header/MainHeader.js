import "./style.css";
import arrow from "../../svg/arrow.svg";

import { useEffect } from 'react';

const MainHeader = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    document.body.style.setProperty('--scrollTop', `${scrollY}px`);
  };
  return (
    <div className="MainHeader">
      <div className="layers">
        <div
          className="layer layer-back"
          style={{ backgroundImage: "url(png/back.png)", filter: "brightness(95%)"}}
        ></div>
        <div
          className="layer layer-third"
          style={{ backgroundImage: "url(png/third.png)", filter: "brightness(95%)" }}
        ></div>
        <div
          className="layer layer-second"
          style={{ backgroundImage: "url(png/second.png)", filter: "brightness(95%)" }}
        ></div>
        <div className="main_text">
          <span className="description">открываем новые маршруты</span
          ><br /><span className="name" style={{ fontFamily: "Rubik-EB" }}>НА СВОИХ ДВОИХ</span>
        </div>
        <div
          className="layer layer-first"
          style={{ backgroundImage: "url(png/first.png)", filter: "brightness(95%)" }}
        ></div>
      </div>
      <div className="arr">
        <img src={arrow} alt="" style={{ width: "10vw" }} />
      </div>
    </div>
  );
};
 
export default MainHeader;
