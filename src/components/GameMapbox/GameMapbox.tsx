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
  //   const [lng, setLng] = useState<number>(0);
  //   const [lat, setLat] = useState<number>(0);
  //   const [zoom, setZoom] = useState<number>(8);

  useEffect(() => {
    if (!mapContainer.current || !locations) return;

    mapRef.current?.remove();

    mapRef.current = new MapGlQuiz({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [11.9545, 57.7006],
      zoom: 8,
    });

    const map: MapGlQuiz = mapRef.current;
    // map.on("move", () => {
    //   interface Position {
    //     lng: number;
    //     lat: number;
    //   }

    //   const position: Position = map.getCenter();
    //   setLat(Number(position.lat.toFixed(4)));
    //   setLng(Number(position.lng.toFixed(4)));
    //   setZoom(map.getZoom());
    // });

    locations.forEach((location) => {
      const { longitude, latitude } = location.location;
      new Marker()
        .setLngLat([parseFloat(longitude), parseFloat(latitude)])
        .addTo(map);
    });
  }, [locations]);
  console.log(locations);

  return (
    <div>
      <div
        ref={mapContainer}
        style={{
          width: "100%",
          height: "200px",
          margin: "1rem auto",
          borderRadius: "8px",
        }}
      />
      <div></div>
    </div>
  );
}
