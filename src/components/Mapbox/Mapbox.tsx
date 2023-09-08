import "./Mapbox.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { Map as MapGl, Marker } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { geolocation } from "../../api/geolocation";
import { CoordsProps, setState } from "../../interfaces";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

interface LocationProps {
  setNewLat: setState<number>;
  setNewLon: setState<number>;
}

export default function Mapbox({
  setNewLat,
  setNewLon,
}: LocationProps): JSX.Element {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapGl | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<CoordsProps | null>(
    null
  );
  const [position, setPosition] = useState<CoordsProps | null>(null);
  const [message, setMessage] = useState<string>("");
  const lat: number = 57.7006818;
  const lon: number = 11.9545412;
  const zoom: number = 9;

  const addMarker = (lngLat: mapboxgl.LngLat) => {
    if (mapRef.current) {
      if (mapRef.current.getLayer("marker")) {
        mapRef.current.removeLayer("marker");
        mapRef.current.removeSource("marker");
      }

      new Marker().setLngLat(lngLat).addTo(mapRef.current);
    }
  };

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;
    mapRef.current = new MapGl({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lon, lat],
      zoom: zoom,
    });

    const handleMapClicked = (e: any) => {
      setNewLat(e.lngLat.lat);
      setNewLon(e.lngLat.lng);
      addMarker(e.lngLat);
    };

    mapRef.current.on("click", handleMapClicked);
  }, [lat, lon, zoom]);

  useEffect(() => {
    if (mapRef.current !== null) {
      geolocation(setMessage, setPosition, (center) => {
        mapRef.current?.setCenter(center);
        addMarker(new mapboxgl.LngLat(center[1], center[0]));
      });
    }
  }, [mapRef.current]);

  return (
    <div className="mapbox">
      <p className="mapbox__message">{message}</p>
      <div className="mapbox__map" ref={mapContainer} />
      {selectedPosition && (
        <p>
          {" "}
          Selected position: {selectedPosition.latitude} latitude and{" "}
          {selectedPosition.longitude} longitude
        </p>
      )}
    </div>
  );
}
