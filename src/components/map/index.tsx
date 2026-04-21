import { useEffect, useRef } from "react";
import { Icon, LatLng, map as lmap, marker, tileLayer } from "leaflet";
import type { Map as LMap, MapOptions } from "leaflet";
import FullScreen from "leaflet.fullscreen";
import markerRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
import "leaflet.fullscreen/dist/Control.FullScreen.css";

const config: MapOptions = {
  minZoom: 7,
  maxZoom: 18,
};

const fullScreenControl = new FullScreen({
  forceSeparateButton: true,
});

const latlng = new LatLng(51.57784, 0.71992);

const customIcon = new Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Standard Leaflet size
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // Size of the shadow
});

const noop = () => {};

const Map = () => {
  const refMap = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<LMap>(null);

  useEffect(() => {
    // Prevent double-initialization in React 18 Strict Mode
    if (mapInstance.current) return noop;

    if (refMap.current) {
      const map = lmap(refMap.current satisfies HTMLDivElement, config).setView(
        latlng,
        16,
      );

      map.addControl(fullScreenControl);

      tileLayer(`${window.location.origin}/map-tiles/{z}/{x}/{y}.png`, {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, map style <a href="https://www.thunderforest.com">Thunderforest</a>',
      }).addTo(map);

      marker(latlng, { icon: customIcon })
        .addTo(map)
        .bindPopup("Rochford Storage");

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
