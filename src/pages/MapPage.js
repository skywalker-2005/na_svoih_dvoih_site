import "../styles/style.css";
import search from "../svg/search.svg";
import sear_map from "../svg/sear_map.svg";
import bear from "../svg/bear.svg";
import tree from "../svg/tree.svg";
import otkrArr from "../svg/otkr_arr.svg";
import museum from "../svg/museum.svg";
import plus from "../svg/plus.svg";
import minus from "../svg/minus.svg";
import navi from "../svg/navi.svg";
import MapComponent from "../components/map/MapC";
import React from "react";
import useMapScale from "../components/map/MapC";

// import {
//   interaction,
//   layer,
//   custom,
//   control,
//   Interactions,
//   Overlays,
//   Controls,
//   Map,
//   Layers,
//   Overlay,
//   Util,
// } from "react-openlayers";

const MapPage = () => {
  const imgStyle = { width: "1vw", marginRight: "0.5vw" };
  const imgStyleLarge = { width: "1.8vw" };

  const { zoomIn, zoomOut } = useMapScale();

  return (
    <>
      <div className="map-page">
        <MapComponent />
      </div>
      <div className="search_wrap">
        <div className="search">
          <div className="search_item sit1">
            <img src={search} alt="" style={{ ...imgStyle, opacity: 1 }} />
            Маршрут, регион, достопримечательности
          </div>
          <div className="search_item sit2">
            <img src={sear_map} alt="" style={imgStyleLarge} />
          </div>
          <div className="search_item sit3">Все</div>
          <div className="search_item sit4">
            <img
              src={bear}
              alt=""
              style={{ ...imgStyle, width: "1.3vw", marginRight: "0.5vw" }}
            />
            Заповедники
          </div>
          <div className="search_item sit5">
            <img src={tree} alt="" style={imgStyle} />
            Национальные парки
          </div>
          <div className="search_item sit6">
            <img src={otkrArr} alt="" style={imgStyle} />
            Тропы
          </div>
          <div className="search_item sit7">
            <img src={museum} alt="" style={{ ...imgStyle, width: "1.1vw" }} />
            Достопримечательности
          </div>
        </div>
      </div>
      <div className="plmi_wrap">
        <div className="plmi">
          <div className="plmiitem">
            <img src={plus} alt="" className="plm" onClick={zoomIn} />
          </div>
          <div className="plmiitem">
            <img
              src={minus}
              alt=""
              className="plm"
              style={{ paddingTop: "50%" }}
              onClick={zoomOut}
            />
          </div>
          <div className="plmiitem">
            <img src={navi} alt="" className="plm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;
