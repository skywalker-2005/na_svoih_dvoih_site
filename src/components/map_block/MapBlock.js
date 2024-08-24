import map from "../../png/map.png";
import './style.css';

const MapBlock = () => {
  return (
    <div className="MapBlock">
      <img src={map} alt="" />
      <div className="goto">Перейти к карте {'>'}</div>
    </div>
  );
}
 
export default MapBlock;