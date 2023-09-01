import { CoordsProps } from "../interfaces";
type setState<T> = React.Dispatch<React.SetStateAction<T>>;

export async function geolocation(
  setPosition: setState<CoordsProps | null>,
  setCenter: (pos: [number, number]) => void
) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const coords: GeolocationCoordinates = position.coords;
        setPosition({ lat: coords.latitude, lon: coords.longitude });
        setCenter([coords.longitude, coords.latitude]);
      }
    );
  }
}
