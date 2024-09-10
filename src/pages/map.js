import React, { useEffect, useRef } from "react";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Загрузка скриптов Leaflet и qgis2web_expressions.js
    const leafletScript = document.createElement("script");
    leafletScript.src = "./../qgis2web_leaflet/js/leaflet.js";
    document.body.appendChild(leafletScript);

    const qgis2webScript = document.createElement("script");
    qgis2webScript.src = "./../qgis2web_leaflet/js/qgis2web_expressions.js";
    document.body.appendChild(qgis2webScript);

    // Добавляем обработчик загрузки скриптов
    let scriptLoaded = false;

    leafletScript.onload = () => {
      scriptLoaded = true;
    };

    qgis2webScript.onload = () => {
      if (scriptLoaded) {
        // Здесь будет код для инициализации карты
        initMap();
      }
    };
  }, []);

  function initMap() {
    window.L = L;
    // Инициализация карты
    var map = L.map(mapRef.current).setView([55.7558, 37.6173], 13);

    // Загрузка тилей
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      subdomains: ["a", "b", "c"],
    }).addTo(map);

    // Загрузка данных GeoJSON
    fetch("/data/data.geojson")
      .then((response) => response.json())
      .then((data) => {
        L.geoJSON(data).addTo(map);
      });
  }

  return (
    <div ref={mapRef} id="map" style={{ width: "100%", height: "600px" }}></div>
  );
};

export default MapComponent;
