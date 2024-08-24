import './style.css';

import dark_green from "../../png/dark_green.png";
import arrow2 from "../../svg/arrow2.svg";
import route_line from "../../svg/route_line.svg";
import ph_otkr2 from "../../png/ph_otkr2.png";
import otkr_arr from "../../svg/otkr_arr.svg";
import time_otkr2 from "../../svg/time_otkr2.svg";

const AboutNsd = () => {
  return (
    <div className="AboutNsd">
      <img src={dark_green} alt="" width="100%" />
      <div className="flex_second">
        <div className="cyfr">
          <span style={{ color: "azure" }}>Цифровая платформа для поиска <br />пеших троп на территории России</span>
        </div>
        <img src={arrow2} alt="" className="sec_ar" />
        <div className="find2">
          <span style={{ fontFamily: "Rubik-B", color: "#1e444b" }}>Найти тропу</span>
        </div>
      </div>
      <div className="route">
        <img src={route_line} alt="" width="100%" />
      </div>
      <div className="chisla">
        <div className="a">1</div>
        <div className="b">2</div>
        <div className="c">3</div>
        <div className="d">4</div>
        <div className="e">5</div>
      </div>
      <div className="titles">
        <div className="aa">открой карту</div>
        <div className="bb">исследуй территорию</div>
        <div className="cc">изучи маршрут</div>
        <div className="dd">скачай трек</div>
        <div className="ee">отправляйся в путешествие</div>
      </div>
      <div className="foot_sec">
        <div style={{ fontFamily: "Rubik-B", fontSize: "2vw", marginRight: "8em" }}>
          Уже на <br />платформе
        </div>
        <div>троп</div>
        <div>нац. парков</div>
        <div>заповедника</div>
      </div>
      <div className="foot_sec_chis">
        <div>8</div>
        <div style={{ paddingRight: "6vw" }}>5</div>
        <div style={{ marginRight: "-0.7em" }}>2</div>
      </div>
      <div className="otkr2">
        <img src={ph_otkr2} alt="" width="100%" /><br />
        <span
          style={{ fontFamily: "Rubik-B", fontSize: "1vw", textAlign: "center" }}
          >Софийские озёра</span
        ><br />
        <img
          src={otkr_arr}
          alt=""
          style={{ fontFamily: "Rubik-EB", fontSize: "1vw" }}
        />5 км <img src={time_otkr2} alt="" />2-3 ч <br />
        Софийские озёра в Архызе — сложный, но очень красивый и посещаемый
        маршрут. Сюда можно добраться в рамках однодневной экскурсии, но
        лучше...
      </div>
    </div>
  );
}
 
export default AboutNsd;