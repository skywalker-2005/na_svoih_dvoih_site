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
      <img src={props.img} alt='' style={{ width: "100vw", filter: "brightness(60%)", height: '50vw'}}/>
      <BackBtn />
      <div className="info_flex">
        <div className="main_rt">{props.title}</div>
        <div className="type_rt">{props.type}</div>
        {props.type === 'маршрут' && (
          <div className="foot_rt">
            <div className='item'>
              <div><img src={arrWh} alt='' style={{ width: "1.5vw" }} /></div>
              <div>{props.distance}</div>
            </div>
            <div className='item'>
              <div><img src={timeWh} alt='' style={{ width: "1.5vw" }}/></div>
              <div>{props.duration}</div>
            </div>
            <div className='item'>
              <div><img src={human} alt='' style={{ width: "1vw" }} /></div>
              <div>{props.wayType}</div>
            </div>
          </div>
        )}
        {props.type === 'ООПТ' && (
          <div className="foot_rt">
            <div className='item'>
              <div style={{marginRight: '0.5vw'}}><img src={bear} alt='' style={{ height: "1.2vw", marginTop: '0.2vw' }} /></div>
              <div>{props.ooptType}</div>
            </div>
            <div className='item'>
              <div><img src={arrWh} alt='' style={{ height: "1.5vw", marginTop: '0.2vw' }}/></div>
              <div>{props.routesNum}</div>
            </div>
            <div className='item'>
              <div><img src={point} alt='' style={{ height: "1.5vw", marginTop: '0.2vw' }} /></div>
              <div>{props.region}</div>
            </div>
          </div>
        )}
      </div>
      </div>
  );
}
 
export default HeaderImg;