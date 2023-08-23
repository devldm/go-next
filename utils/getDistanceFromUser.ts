import { locationObj } from "@/types";
import { getDistance } from "geolib";

export function getDistanceFromUser(
  userLocation: GeolocationCoordinates,
  propertyLocation: locationObj["coordinates"]
): number {
  if (userLocation && propertyLocation) {
    const distance = getDistance(
      { latitude: userLocation.latitude, longitude: userLocation.longitude },
      {
        latitude: propertyLocation[0],
        longitude: propertyLocation[1],
      }
    );
    // Turn Metres into KM
    return Math.floor(distance * 0.001);
  } else {
    return 0;
  }
}
