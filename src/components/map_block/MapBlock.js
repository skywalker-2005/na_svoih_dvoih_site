import map from "../../png/map.png";
import Btn from '../btn/Btn';
import './style.css';

const MapBlock = () => {
  return (
    <div className="MapBlock">
      <img src={map} alt="" />
      <Btn text='Перейти к карте >' link='' />
    </div>
  );
}
 
export default MapBlock;