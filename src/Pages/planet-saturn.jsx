import React from "react";
import { PlanetDefault } from "../Components/planet-default";

export const PlanetSaturn = () => {
  const Jupiter = {
    name: "Jupiter",
    size: "142,984 km",
    mass: "318.0 x 10^23 kg",
    distance: "778.3 million km",
    planetTexture: "saturn_2k.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    ringTexture: "saturn_ring.webp",
    hasRing: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/J",
  };
  return <PlanetDefault planet={Jupiter} />;
};
