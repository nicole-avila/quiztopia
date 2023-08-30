import { useEffect } from "react";
type setState<T> = React.Dispatch<React.SetStateAction<T>>;

export function Geolocation(setPosition: setState<GeolocationPosition>) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location: GeolocationPosition) => {
        setPosition(location);
      }
    );
  }, []);
}
// skapa posistion, setPosition usesatet() men vart vill jag hämta det först ?
//Vilken comp. ? och NÄR ?
