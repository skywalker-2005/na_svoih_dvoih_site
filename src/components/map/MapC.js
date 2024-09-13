import React, { useEffect } from "react";
import { Map } from "ol";
import { View } from "ol";
import { Tile } from "ol/layer";
import { OSM } from "ol/source";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { Style } from "ol/style";
import { Stroke } from "ol/style";
import { Point } from "ol/coordinate";
import { Feature } from "ol";
import { GeoJSON } from "ol/format";
import { get as getProjection } from "ol/proj";
import { transform } from "ol/proj";

// ...

const vectorSource = new VectorSource({
  url: "../../json/src/json/ср.geojsonl.json",
  format: new GeoJSON({
    defaultDataProjection: "EPSG:4326", // Предполагаемая система координат исходных данных
    featureProjection: "EPSG:3857", // Целевая система координат
  }),
});

vectorSource.on("change", function (e) {
  const active = e.target.getActive();
  if (!active) {
    console.log("Failed to load vector source");
  }
});

function MapComponent(props) {
  useEffect(() => {
    function init() {
      const vectorStyle = new Style({
        stroke: new Stroke({
          color: "#ffffff",
          width: 10,
        }),
      });

      const map = new Map({
        target: "js-mapp",
        layers: [
          new Tile({
            source: new OSM(),
          }),
          new VectorLayer({
            source: new VectorSource({
              url: "../../json/src/json/ср.geojsonl.json",
              format: new GeoJSON(),
            }),
            style: vectorStyle,
          }),
        ],
        view: new View({
          center: [4794713.725937663, 5602152.380958001],
          zoom: 7,
          projection: getProjection("EPSG:3857"),
        }),
        controls: [],
      });

      // Теперь map.addLayer работает корректно
      const tileLayer = new Tile({
        source: new OSM(),
      });
      map.addLayer(tileLayer);

      map.on("click", function (e) {
        console.log(e.coordinate);
      });
    }

    init();

    return () => {
      // Здесь можно добавить код для очистки ресурсов
    };
  }, []);

  return (
    <div id="js-mapp" style={{ width: "100%", height: "100vh" }}>
      {/* Здесь можно добавить дополнительный контент или элементы управления */}
    </div>
  );
}

export default MapComponent;
