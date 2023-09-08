import { CoordsProps, setState } from "../interfaces";

export async function geolocation(
  setMessage: setState<string>,
  setSelectedPosition: setState<CoordsProps | null>,
  setCenter: (pos: [number, number]) => void
) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const coords: GeolocationCoordinates = position.coords;
        setSelectedPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setCenter([coords.longitude, coords.latitude]);
      },
      () => {
        setMessage("Please enable position to see your location.");
      }
    );
  }
}
