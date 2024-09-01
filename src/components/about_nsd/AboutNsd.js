import './style.css';

import dark_green from "../../png/dark_green.png";
import arrow2 from "../../svg/arrow2.svg";
import route_line from "../../svg/route_line.svg";
import ph_otkr2 from "../../png/ph_otkr2.png";
import otkr_arr from "../../svg/otkr_arr.svg";
import time_otkr2 from "../../svg/time_otkr2.svg";
import Btn from '../btn/Btn';

const AboutNsd = () => {
  let routesNum = 8, parksNum = 5, reservesNum = 2;
  return (
    <div className="AboutNsd">
      <img src={dark_green} alt="" width="100%" />
      <div className="first_block">
        <p style={{ color: "azure" }}>Цифровая платформа для поиска <br />пеших троп на территории России</p>
        <img src={arrow2} alt="" className="sec_ar" />
        <Btn text='Найти тропу' link='/oopt' />
      </div>
      <div className="route">
        <img src={route_line} alt="" width="100%" />
      </div>
      <div className="numbers">
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
      <div className='score'>
        <h2>Уже на <br />платформе</h2>
        <div className='score_num'>
          <div className='block_num'>
            <h2>{routesNum}</h2>
            <h3>троп</h3>
          </div>
          <div className='block_num'>
            <h2>{parksNum}</h2>
            <h3>нац. парков</h3>
          </div>
          <div className='block_num'>
            <h2>{reservesNum}</h2>
            <h3>заповедника</h3>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={ph_otkr2} alt="" width="100%" /><br />
        <span style={{ fontFamily: "Rubik-B", fontSize: "1vw", textAlign: "center" }}>Софийские озёра</span><br />
        <img src={otkr_arr} alt="" style={{ width: "0.8vw", marginRight: '0.2vw' }}/>
        5 км
        <img src={time_otkr2} alt="" style={{ width: "0.8vw", marginRight: '0.2vw', marginLeft: '0.5vw' }}/>
        2-3 ч <br />
        Софийские озёра в Архызе — сложный, но очень красивый и посещаемый
        маршрут. Сюда можно добраться в рамках однодневной экскурсии, но
        лучше...
      </div>
    </div>
  );
}
 
export default AboutNsd;