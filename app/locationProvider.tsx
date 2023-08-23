"use client";

import { createContext, useState } from "react";

export const LocationContext = createContext({});

export default function LocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location, setLocation] = useState({
    longitude: 0,
    latitude: 0,
    accuracy: 1,
    altitude: 0,
    altitudeAccuracy: 1,
    heading: 0,
    speed: 0,
  } as GeolocationCoordinates);

  function success(pos: GeolocationPosition) {
    const crd: GeolocationCoordinates = pos.coords;

    setLocation(crd);
  }

  function error(err: GeolocationPositionError) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  if ("geolocation" in navigator && location.latitude === 0) {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
}
