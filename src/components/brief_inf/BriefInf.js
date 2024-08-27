import './style.css';
import levelsLow from "../../svg/levels_low.svg";
import levelsMiddle from "../../svg/levels_middle.svg";
import levelsHigh from "../../svg/levels_high.svg";
import point from "../../svg/point.svg";
import bear from "../../svg/bear.svg";

const BriefInf = (props) => {
  let levels, levelsText;
  switch (props.level) {
    case 'низкий':
      levels = levelsLow;
      levelsText = 'Низкий уровень сложности';
      break;
    case 'средний':
      levels = levelsMiddle;
      levelsText = 'Средний уровень сложности';
      break;
    case 'высокий':
      levels = levelsHigh;
      levelsText = 'Высокий уровень сложности';
      break;
    default:
      levels = levelsLow;
      levelsText = 'Низкий уровень сложности';
      break;
  }
  return (
    <div className='BriefInf'>
      <div className='item'>
        <img src={levels} alt='' style={{ width: "1vw", marginBottom: "0.2vw" }}/>
        <div>{levelsText}</div>
      </div>
      <div className='item'>
        <img src={point} alt='' style={{ width: "0.8vw", marginBottom: "0.2vw" }}/>
        <div>{props.region}</div>
      </div>
      <div className='item'>
        <img src={bear} alt='' style={{ width: "1.4vw", marginBottom: "0.2vw" }}/>
        <div>{props.oopt}</div>
      </div>
    </div>
  );
}
 
export default BriefInf;