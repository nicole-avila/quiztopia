import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { Map as MapGl } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;
// console.log(
//   "Kontrollera att access token hittas: ",
//   import.meta.env.VITE_MAPBOX_API_KEY
// );

export default function Mapbox() {
  const mapContainer = useRef(null);
  const mapRef = useRef<MapGl | null>(null);
  const [lat, setLat] = useState<number>(57.7006818);
  const [lon, setLon] = useState<number>(11.9545412);
  const [zoom, setZoom] = useState<number>(9);
  //   const [position, setPosition] = useState<number>(0); //hämta geolocation med denna state
  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;

    mapRef.current = new MapGl({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lat, lon],
      zoom: zoom,
    });
  }, [lat, lon, zoom]);

  return (
    <div>
      <div ref={mapContainer} style={{ width: "100%", height: "200px" }} />
      <p>
        {" "}
        Center position: {lat} latitude, {lon} longitude{" "}
      </p>
    </div>
  );
}
