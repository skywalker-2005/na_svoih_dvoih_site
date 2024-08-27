import './style.css';
import arr_wh from "../../svg/arr_wh.svg";

const OoptCard = (props) => {
  return (
    <div className="OoptCard">
      <img src={props.img} alt="" width="108%" />
      <div className="first_title">
        {props.title}
      </div>
      <div className="sec_title">
        {props.region}
      </div>
      <div className="niz_title">
        <img src={arr_wh} alt="" width="15%" /> {props.routesNum}
      </div>
      <div className="know_more">
        Узнать больше {'>'}
      </div>
    </div>
  );
}
 
export default OoptCard;