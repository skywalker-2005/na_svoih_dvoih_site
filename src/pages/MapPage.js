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
import useMapScale from "../components/map/MapC";
import { useLocation } from "react-router-dom";
import React, { useCallback, useState } from "react";

const MapPage = (props) => {
  const imgStyle = { width: "1vw", marginRight: "0.5vw" };
  const imgStyleLarge = { width: "1.8vw" };

  const [zoomIn, setZoomIn] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);

  const handleZoomIn = () => {
    setZoomIn(true);
  };

  const handleZoomOut = () => {
    setZoomOut(true);
  };

  return (
    <>
      <div className="map-page">
        <MapComponent onZoomIn={zoomIn} onZoomOut={zoomOut} />
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
          <div className="plmiitem" onClick={handleZoomIn}>
            <img src={plus} alt="Увеличить" className="plm" />
          </div>
          <div className="plmiitem" onClick={handleZoomOut}>
            <img
              src={minus}
              alt="Уменьшить"
              className="plm"
              style={{ paddingTop: "50%" }}
            />
          </div>
          <div className="plmiitem">
            <img src={navi} alt="Навигация" className="plm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;
