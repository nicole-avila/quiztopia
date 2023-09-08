import "./GameMapbox.scss";
import "../../sass/_mixins.scss";
import mapboxgl, { LngLatLike, Map as MapGlQuiz } from "mapbox-gl";
import { Marker } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { GameMapboxProps } from "../../interfaces";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

export default function GameMapbox({ locations }: GameMapboxProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapGlQuiz | null>(null);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [showMap, setShowMap] = useState<boolean>(true);

  useEffect(() => {
    if (!mapContainer.current || locations?.length === 0) {
      setShowMap(false);
      return;
    }
    mapRef.current?.remove();

    try {
      mapRef.current = new MapGlQuiz({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v12",
      });

      const map: MapGlQuiz = mapRef.current;

      locations.forEach((question) => {
        const { location, question: questionText } = question;
        const { longitude, latitude } = location;

        new Marker()
          .setLngLat([parseFloat(longitude), parseFloat(latitude)])
          .addTo(map)
          .setPopup(
            new mapboxgl.Popup({ offset: 10 }).setHTML(`<p>${questionText}</p>`)
          );
      });

      const markerLngLats: LngLatLike[] = locations.map((question) => {
        const { location } = question;
        const { longitude, latitude } = location;
        return [parseFloat(longitude), parseFloat(latitude)];
      });
      const bounds = new mapboxgl.LngLatBounds();
      markerLngLats.forEach((lngLat) => {
        bounds.extend(lngLat);
      });
      map.fitBounds(bounds, { padding: 50, maxZoom: 7 });

      setShowErrorMessage(false);
    } catch (error) {
      setShowMap(false);
      setShowErrorMessage(true);
    }
  }, [locations]);

  useEffect(() => {
    if (showMap === false) {
      setShowErrorMessage(true);
      setShowMap(true);
    }
  }, [showMap]);

  return (
    <div className="game-mapbox">
      {showMap && locations.length > 0 && (
        <div
          ref={mapContainer}
          style={{
            width: "80%",
            maxHeight: "300px",
            height: "280px",
            margin: "1rem auto",
            borderRadius: "2px",
          }}
        />
      )}
      {showErrorMessage && (
        <p className="game-mapbox__p">Quizet saknar koordinater</p>
      )}
    </div>
  );
}
