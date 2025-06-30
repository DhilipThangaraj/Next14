"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { setDefaults, fromAddress } from "react-geocode";
import Map, { Marker } from "react-map-gl";
import pin from "@/assets/images/pin.svg";
import Spinner from "./Spinner";

const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [viewPort, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: "100%",
    height: "500px",
  });
  const [loading, setLoading] = useState(true);
  const [geoCodeError, setGeoCodeError] = useState(false);

  setDefaults({
    key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY,
    language: "en",
    region: "in",
  });

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const res = await fromAddress(
          `${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zip}`
        );

        //check geocode result
        if (res.results.length === 0) {
          setGeoCodeError(true);
          return;
        }

        const { lat, lng } = res.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({
          ...viewPort,
          latitude: lat,
          longitude: lng,
        });
      } catch (error) {
        console.log(error);
        setGeoCodeError(true);
      } finally {
        setGeoCodeError(false);
      }
    };
  }, []);

  if (loading) return <Spinner />;

  if (geoCodeError)
    return <div className="text-xl">No location data found</div>;

  return <div>Property Map</div>;
};

export default PropertyMap;
