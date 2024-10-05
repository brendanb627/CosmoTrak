import React from "react";
import { PlanetDefault } from "../Components/planet-default";
import { PageLayout } from "../Components/sidebar";

const sun = {
  name: "Object: Sun",
  info: "The Sun is the star at the center of the solar system and is the primary source of light and energy for our planet.",
  gravity: "The surface gravity of the Sun is approximately 274.0 m/s^2",
  planetTexture: "sun_2k.webp",
  radiantIntensity:"0.001",
  radiant: "0x0000ff",
  mass: "The mass of the Sun is approximately 1.989 x 10^3",
  radius: "The radius of the Sun is approximately 6.96 x 10^8"
};
export const Sun = () => {
  return (
    <>
      <PlanetDefault Planet={sun} />
    </>
  );
};
