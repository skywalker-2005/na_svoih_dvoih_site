import './style.css';
import arr_wh from "../../svg/arr_wh.svg";
import Btn from '../btn/Btn';
import { NavLink } from 'react-router-dom';

const OoptCard = (props) => {
  return (
    
    <div className="OoptCard" style={{ backgroundImage: `url(${props.img})`, backgroundSize: 'cover',  backgroundPosition: 'center' }}>
      <div className='titles'>
        <div className="first_title">{props.title}</div>
        <div className="sec_title">{props.region}</div>
      </div>
      <div className="niz_title">
        <img src={arr_wh} alt="" width="10%" /> {props.routesNum}
      </div>
      <Btn text='Узнать больше >' link={props.link} />
    </div>
  );
}
 
export default OoptCard;