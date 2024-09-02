import './style.css';
import arr_wh from "../../svg/arr_wh.svg";
import Btn from '../btn/Btn';

const OoptCard = (props) => {
  return (
    <div className="OoptCard" style={{ backgroundImage: `url(${props.img})`, backgroundSize: 'cover',  backgroundPosition: 'center' }}>
      <h3 className="first_title">{props.title}</h3>
      <p className="sec_title">{props.region}</p>
      <div className="niz_title">
        <img src={arr_wh} alt="" width="10%" /> {props.routesNum}
      </div>
      <Btn text='Узнать больше >' link={props.link} />
    </div>
  );
}
 
export default OoptCard;