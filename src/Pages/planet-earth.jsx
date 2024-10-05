import React from "react";
import { PlanetDefault } from "../Components/planet-default";
import { PageLayout } from "../Components/sidebar";
import { useThree } from "react-three-fiber";

export const PlanetEarth = () => {
  const Earth = {
    name: "Earth",
    size: "142,984 km",
    mass: "318.0 x 10^23 kg",
    distance: "778.3 million km",
    image: "earth.png",
    planetTexture: "earthbeefy.jpg",
    radiantIntensity: "0.003",
    radiant: "0x76d3e8",
  };
  return (
    <>
      <PlanetDefault planet={Earth} />
    </>
  );
};
