import './style.css';
import arr_wh from "../../svg/arr_wh.svg";

const OoptCard = (props) => {
  return (
    <div className="OoptCard">
      <img src={props.imgSrc} alt="" width="108%" />
      <div className="first_title">
        {props.ooptName}
      </div>
      <div className="sec_title">
        {props.regionName}
      </div>
      <div className="niz_title">
        <img src={arr_wh} alt="" width="15%" /> {props.routesNumber}
      </div>
      <div className="know_more">
        Узнать больше {'>'}
      </div>
    </div>
  );
}
 
export default OoptCard;