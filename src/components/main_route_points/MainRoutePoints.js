import './style.css';
import bag from "../../svg/bag.svg";
import timer from "../../svg/timer.svg";
import home from "../../svg/home.svg";
import people from "../../svg/people.svg";

const MainRoutePoints = (props) => {
  return (
    <div className='MainRoutePoints'>
      {props.safety && 
      <div className='route_point'>
        <img src={bag} alt=""/>
        <div>
          <h3>Безопасность</h3>
          <p>{props.safety}</p>
        </div>
      </div>
      }

      {props.shedule && 
      <div className='route_point'>
        <img src={timer} alt=""/>
        <div>
          <h3>Режим функционирования</h3>
          <p>{props.shedule}</p>
        </div>
      </div>
      }

      {props.comfort && 
      <div className='route_point'>
        <img src={home} alt=""/>
        <div>
          <h3>Благоустройство</h3>
          <p>{props.comfort}</p>
        </div>
      </div>
      }

      {props.size &&
      <div className='route_point'>
        <img src={people} alt=""/>
        <div>
          <h3>Рекреационная ёмкость</h3>
          <p>{props.size}</p>
        </div>
      </div>
      }
    </div>
  );
}
 
export default MainRoutePoints;