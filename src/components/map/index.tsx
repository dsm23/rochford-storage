import { useEffect, useRef } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet.fullscreen";
import "leaflet.fullscreen/Control.FullScreen.css";

import styles from "./styles.module.css";

const config = {
  fullscreenControl: true,
  fullscreenControlOptions: {
    forceSeparateButton: true,
  },
  minZoom: 7,
  maxZoom: 18,
} satisfies L.MapOptions;

const Map = () => {
  const refMap = useRef<HTMLDivElement>(null);

  const initializeMap = () => {
    const map = L.map(refMap?.current as HTMLDivElement, config).setView(
      [51.57784, 0.71992],
      16,
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.57784, 0.71992]).addTo(map).bindPopup("Rochford Storage");
  };

  useEffect(() => {
    initializeMap();
  }, []);

  return <div className={styles.map} ref={refMap} />;
};

export default Map;
