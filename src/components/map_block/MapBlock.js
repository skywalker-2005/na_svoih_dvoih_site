import Btn from "../btn/Btn";
import "./style.css";
import MapComponent from "../map/MapC";

const MapBlock = () => {
  return (
    <div className="MapBlock">
      <MapComponent />
      <Btn text="Перейти к карте >" link="/mapPage" />
    </div>
  );
};

export default MapBlock;
