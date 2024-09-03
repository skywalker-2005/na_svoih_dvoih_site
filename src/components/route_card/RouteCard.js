import './style.css';
import bookmark from "../../svg/bookmark.svg";
import arr_wh from "../../svg/arr_wh.svg";
import time_wh from "../../svg/time_wh.svg";
import Btn from '../btn/Btn';

const RouteCard = (props) => {
  return (
    <div className="RouteCard" style={{ backgroundImage: `url(${props.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <img
        src={bookmark}
        alt=""
        style={{ position: "absolute", right: "7%", top: "7%", width: "1.5vw" }}
      />
      <div className='titles'>
        <div className="first_title">{props.title}</div>
        <div className="sec_title">{props.region}</div>
      </div>
      <div className="niz_title">
        <div>
          <img src={arr_wh} alt="" width="12%" />
          {props.distance}
        </div>
        <div>
          <img src={time_wh} alt="" width="12%" />
          {props.duration}
        </div>
      </div>
      <Btn text='Узнать больше >' link={props.link} />
    </div>
  );
}
 
export default RouteCard;