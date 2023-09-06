import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { Map as MapGlQuiz } from "mapbox-gl";
import { Marker } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { QuestionData } from "../../interfaces";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

export interface GameMapboxProps {
  locations: QuestionData[] | null;
}

export default function GameMapbox({ locations }: GameMapboxProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapGlQuiz | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!mapContainer.current || !locations) return;

    mapRef.current?.remove();

    try {
      mapRef.current = new MapGlQuiz({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [11.9545, 57.7006],
        zoom: 8,
      });

      const map: MapGlQuiz = mapRef.current;

      locations.forEach((location) => {
        const { longitude, latitude } = location.location;
        new Marker()
          .setLngLat([parseFloat(longitude), parseFloat(latitude)])
          .addTo(map);
      });
    } catch (error) {
      setErrorMessage("Quizet saknar koordinater");
    }
  }, [locations]);
  console.log(locations);

  return (
    <div>
      <b style={{ color: "purple", background: "#ffffff" }}></b>
      <p>{errorMessage}</p>
      <div
        ref={mapContainer}
        style={{
          width: "100%",
          height: "200px",
          margin: "1rem auto",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
