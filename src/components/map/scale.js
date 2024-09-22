// useMapScale.js
import { useState, useCallback } from "react";

const useMapScale = () => {
  const [scaleLevel, setScaleLevel] = useState(7); // Начальный уровень масштаба

  const zoomIn = useCallback(() => {
    setScaleLevel((prev) => Math.min(prev + 1, 18)); // Максимальный уровень масштаба
  }, []);

  const zoomOut = useCallback(() => {
    setScaleLevel((prev) => Math.max(prev - 1, 5)); // Минимальный уровень масштаба
  }, []);

  return { scaleLevel, zoomIn, zoomOut };
};

export default useMapScale;
