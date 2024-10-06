import React from "react";
import { PlanetDefault } from "../Components/planet-default";

const Mercury = {
  name: "Mercury",
  type: "Terrestrial planet",

  summary: "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon",
  planetTexture: "mercuryTexture.webp",
  radiantIntensity:"0.001",
  radiant: "0x0000ff",
  geoDef: `Geology:

Mercury's surface is characterized by:\n\n

Cratered terrain: Mercury's surface is heavily cratered, indicating a geologically inactive surface with no tectonic activity or volcanic eruptions.
Basins and plains: Large impact basins, such as the Caloris Basin, are filled with smooth, dark plains that are thought to be volcanic in origin.
Faults and ridges: Mercury's surface has a network of faults and ridges, which suggest that the planet has undergone significant tectonic activity in the past.
Lobate scarps: These are long, curved cliffs that formed as a result of tectonic activity, which pushed the crust upwards to create these features.`
}

export const PlanetMercury = () => {
  return (
    <>
      <PlanetDefault
        planet={Mercury}
      />
    </>
  );
};

