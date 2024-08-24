import './style.css';
import bookmark from "../../svg/bookmark.svg";
import arr_wh from "../../svg/arr_wh.svg";
import time_wh from "../../svg/time_wh.svg";

const RouteCard = (props) => {
  return (
    <div className="RouteCard">
      <img src={props.imgSrc} alt="" width="85%" />
      <div className="first_title">{props.routeName}</div>
      <img
        src={bookmark}
        alt=""
        style={{ position: "absolute", left: "20vw", top: "2vw", width: "2vw" }}
      />
      <div className="sec_title">{props.regionName}</div>
      <div className="niz_title">
        <img src={arr_wh} alt="" width="20%" />
        {props.distance} <br />
        <img src={time_wh} alt="" width="20%" />
        {props.duration}
      </div>
      <div className="know_more">Узнать больше {'>'}</div>
    </div>
  );
}
 
export default RouteCard;