import { useEffect, useRef } from "react";
import L, { LatLng } from "leaflet";
import FullScreen from "leaflet.fullscreen";

import "leaflet/dist/leaflet.css";
import "leaflet.fullscreen/dist/Control.FullScreen.css";

const config: L.MapOptions = {
  minZoom: 7,
  maxZoom: 18,
};

const fullScreenControl = new FullScreen({
  forceSeparateButton: true,
});

const latlng = new LatLng(51.57784, 0.71992);

const noop = () => {};

const Map = () => {
  const refMap = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map>(null);

  useEffect(() => {
    // Prevent double-initialization in React 18 Strict Mode
    if (mapInstance.current) return noop;

    if (refMap.current) {
      const map = L.map(
        refMap.current satisfies HTMLDivElement,
        config,
      ).setView(latlng, 16);

      map.addControl(fullScreenControl);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(latlng).addTo(map).bindPopup("Rochford Storage");

      mapInstance.current = map;
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div className="h-125 w-full" ref={refMap} />;
};

export default Map;
