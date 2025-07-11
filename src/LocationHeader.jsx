import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const LocationHeader = () => {
  const [location, setLocation] = useState("Fetching location...");
  const [city, setCity] = useState("..."); // <-- use state for city
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await res.json();

        const city =
          data?.address?.city ||
          data?.address?.town ||
          data.address.village ||
          "Unknown Location";

        setLocation(data.display_name || "Your Location");
        setCity(city); // Set the city state

        console.log("Location fetched:", data.display_name);
        console.log("City:", city);
      },
      
      (err) => {
        console.error("Location error:", err);
        setLocation("Unable to get {location}");
      }
    );
  }, []);

  return <div className=" text-center py-2">📍 Deliver to: {city}</div>;
};
export default LocationHeader;
