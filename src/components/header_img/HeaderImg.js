import './style.css';
import arrWh from "../../svg/arr_wh.svg";
import timeWh from "../../svg/time_wh.svg";
import human from "../../svg/human.svg";
import bear from "../../svg/bearHeader.svg";
import point from "../../svg/pointHeader.svg";
import BackBtn from '../back_btn/BackBtn';

const HeaderImg = (props) => {
  return (
    <div className="HeaderImg">
      {/* <div> */}
        <img src={props.img} alt='' style={{ width: "100vw", filter: "brightness(60%)", height: '50vw'}}/>
      {/* </div> */}
      <BackBtn />
      <div className="info_flex">
        <div className="main_rt">{props.title}</div>
        <div className="type_rt">{props.type}</div>
        {props.type === 'маршрут' && (
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
        )}
        {props.type === 'ООПТ' && (
          <div className="foot_rt">
            <div className='item'>
              <img src={bear} alt='' style={{ width: "1.5vw", color: "#fff"}} />
              <div>{props.ooptType}</div>
            </div>
            <div className='item'>
              <img src={arrWh} alt='' style={{ width: "1.5vw" }}/>
              <div>{props.routesNum}</div>
            </div>
            <div className='item'>
              <img src={point} alt='' style={{ width: "1vw", color: "#fff" }} />
              <div>{props.region}</div>
            </div>
          </div>
        )}
      </div>
      </div>
  );
}
 
export default HeaderImg;