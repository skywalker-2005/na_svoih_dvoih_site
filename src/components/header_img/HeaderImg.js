import './style.css';
import arrWh from "../../svg/arr_wh.svg";
import timeWh from "../../svg/time_wh.svg";
import human from "../../svg/human.svg";

const HeaderImg = (props) => {
  return (
    <div className="HeaderImg">
      <div>
        <img src={props.img} alt='' style={{ width: "100vw", filter: "brightness(60%)" }}/>
      </div>
      <div className="info_wrap">
        <div className="info_flex">
          <div className="main_rt">{props.title}</div>
          <div className="type_rt">{props.type}</div>
          <div className="foot_rt">
            <div className='item'>
              <img src={arrWh} alt='' style={{ width: "1.5vw" }} />
              <div>{props.distance}</div>
            </div>
            <div className='item'>
              <img src={timeWh} alt='' style={{ width: "1.5vw" }}/>
              <div>{props.duration}</div>
            </div>
            <div className='item'>
              <img src={human} alt='' style={{ width: "1vw" }} />
              <div>{props.wayType}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default HeaderImg;