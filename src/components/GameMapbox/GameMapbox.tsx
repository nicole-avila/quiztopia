import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { Map as MapGlQuiz } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

export default function GameMapbox() {
  const mapContainer = useRef<HTMLDivElement | null>(null); //skapar en ref för att kunna referera till map(kartan) containern
  const mapRef = useRef<MapGlQuiz | null>(null); // för att kunna referera till mapboxGl
  const [longitude, setLongitude] = useState(57.7006818);
  const [latitude, setLatitude] = useState(11.9545412);
  const zoom: number = 10;

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;
    mapRef.current = new MapGlQuiz({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longitude, latitude],
      zoom: zoom,
    });
  }, []);

  return (
    <div>
      <div
        ref={mapContainer}
        style={{
          width: "400px",
          height: "200px",
          margin: "1rem auto",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
