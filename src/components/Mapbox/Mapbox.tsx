import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { Map as MapGl } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { geolocation } from "../../api/geolocation";
import { CoordsProps } from "../../interfaces";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

type sSN<T> = React.Dispatch<React.SetStateAction<T>>;

interface LocationProps {
  setNewLat: sSN<number>;
  setNewLon: sSN<number>;
}

export default function Mapbox({ setNewLat, setNewLon }: LocationProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null); //skapar en ref för att kunna referera till map(kartan) containern
  const mapRef = useRef<MapGl | null>(null); // för att kunna referera till mapboxGl
  const [selectedPosition, setSelectedPosition] = useState<CoordsProps | null>(
    null
  );
  const [position, setPosition] = useState<CoordsProps | null>(null);
  const lat: number = 57.7006818;
  const lon: number = 11.9545412;
  const zoom: number = 9;

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;
    mapRef.current = new MapGl({
      //Skapar en ny MapboxGL och sparar den i mapRef
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lon, lat],
      zoom: zoom,
    });

    const handleMapClicked = (e) => {
      setNewLat(e.lngLat.lat);
      setNewLon(e.lngLat.lng);
    };

    mapRef.current.on("click", handleMapClicked); //Lägger till/anropar klicket på KARTAN
  }, [lat, lon, zoom]);
  console.log(position);

  useEffect(() => {
    if (mapRef.current !== null) {
      //Körs när kartan har skapats, alltså när mapRef har triggats
      geolocation(setPosition, (center) => mapRef.current?.setCenter(center)); // Geo körs efter mapbox-kartan har skapats
    } //sätter kartans center med det ett nytt centrumvärde.
  }, [mapRef.current]);

  return (
    <div>
      <div
        ref={mapContainer}
        style={{
          width: "400px",
          height: "200px",
          margin: "auto",
        }}
      />
      {selectedPosition && ( //om positionen har valts så renderar lat o lon koordinaterna
        <p>
          {" "}
          Selected position: {selectedPosition.lat} latitude and{" "}
          {selectedPosition.lon} longitude
        </p>
      )}
    </div>
  );
}
// Center position: {lat} latitude, {lon} longitude{" "}
