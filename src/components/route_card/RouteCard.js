import './style.css';
import bookmark from "../../svg/bookmark.svg";
import arr_wh from "../../svg/arr_wh.svg";
import time_wh from "../../svg/time_wh.svg";
import Btn from '../btn/Btn';
import { NavLink } from 'react-router-dom';

const RouteCard = (props) => {
  return (
    <NavLink to={props.link} className='RouteCard' style={{ backgroundImage: `url(${props.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='titles'>
        <div className="first_title">{props.title}</div>
        <div className="sec_title">{props.region}</div>
      </div>
      <div className="niz_title">
        <div>
          <img src={arr_wh} alt="" />
          {props.distance}
        </div>
        <div>
          <img src={time_wh} alt="" />
          {props.duration}
        </div>
      </div>
      <Btn text='Узнать больше >' link={props.link} />
    </NavLink>
  );
}
 
export default RouteCard;