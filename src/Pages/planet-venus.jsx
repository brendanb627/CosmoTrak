import React from "react";
import { PlanetDefault } from "../Components/planet-default";
import { PageLayout } from "../Components/sidebar";

export const PlanetVenus = () => {
  const Jupiter = {
    name: "Jupiter",
    size: "142,984 km",
    mass: "318.0 x 10^23 kg",
    distance: "778.3 million km",
    planetTexture: "venus_surface_2k.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/J",
  };
  return (
      <PlanetDefault planet={Jupiter} />
  );
};
