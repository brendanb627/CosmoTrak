import React from "react";
import { PlanetDefault } from "../Components/planet-default";

const VenusLevels = {
  "hBR": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus is a very hot planet with thick clouds.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is made of rock with many volcanoes.",
    atmDef: "Venus has a thick atmosphere with toxic gases.",
    orbDef: "Venus takes 225 Earth days to orbit the Sun.",
    expDef: "NASA sent spacecraft to study Venus."
  },
  "h190": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus is the second planet from the Sun and is very hot. Its thick clouds trap heat, making Venus the hottest planet in the solar system.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is made of rock and has many volcanoes. It has a solid surface covered in lava flows.",
    atmDef: "Venus has a thick atmosphere of carbon dioxide with clouds of sulfuric acid, which traps heat and makes the surface extremely hot.",
    orbDef: "Venus takes 225 Earth days to orbit the Sun, but one day on Venus is longer than one year, lasting 243 Earth days.",
    expDef: "NASA and other space agencies have sent spacecraft to study Venus. The first missions to Venus sent back pictures of its surface and atmosphere."
  },
  "h420": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus is the second planet from the Sun and is the hottest planet in the solar system. Its thick clouds trap heat, making it even hotter than Mercury.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is made of rock and has many volcanoes. It has large plains covered in lava flows, and its surface shows signs of volcanic activity.",
    atmDef: "Venus’s atmosphere is made mostly of carbon dioxide and is thick with clouds of sulfuric acid. These clouds trap heat, causing surface temperatures to reach up to 900°F (475°C).",
    orbDef: "Venus takes 225 Earth days to orbit the Sun, but its day is longer than its year. One day on Venus lasts 243 Earth days.",
    expDef: "NASA and other space agencies have sent many spacecraft to study Venus. The first missions took pictures of Venus’s surface and revealed its thick atmosphere and volcanic activity."
  },
  "h520": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus is the second planet from the Sun and is the hottest planet in the solar system. Its thick clouds trap heat, making it even hotter than Mercury.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is made of rock and has many volcanoes. Its surface is covered in large lava plains and volcanoes that may still be active.",
    atmDef: "Venus has a thick atmosphere made mostly of carbon dioxide. Its clouds are made of sulfuric acid, which traps heat and raises the surface temperature to 900°F (475°C).",
    orbDef: "Venus takes 225 Earth days to orbit the Sun, but one day on Venus lasts 243 Earth days. This means that Venus’s day is longer than its year.",
    expDef: "NASA and other space agencies have sent spacecraft to study Venus. These missions have taken pictures of Venus’s surface and atmosphere, revealing that Venus may still have active volcanoes."
  },
  "h740": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus is the second planet from the Sun and the hottest planet in the solar system. Its thick clouds trap heat, making it even hotter than Mercury.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is a rocky planet with many volcanoes and lava plains. Its surface shows signs of volcanic activity, and scientists believe some of these volcanoes may still be active today.",
    atmDef: "Venus has a thick atmosphere made mostly of carbon dioxide, with clouds of sulfuric acid that trap heat. The surface temperature of Venus can reach up to 900°F (475°C), making it hotter than Mercury.",
    orbDef: "Venus takes 225 Earth days to orbit the Sun, but its day is longer than its year. One day on Venus lasts 243 Earth days.",
    expDef: "NASA and other space agencies have sent spacecraft to Venus, revealing details about its thick atmosphere, volcanic surface, and extreme temperatures. These missions have helped scientists understand how Venus's surface and atmosphere have changed over time."
  },
  "h830": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus is the second planet from the Sun and the hottest planet in the solar system. Its thick atmosphere traps heat, making it even hotter than Mercury.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is a rocky planet covered with volcanoes and large plains of lava. Its surface shows signs of volcanic activity, and scientists believe some of these volcanoes may still be active.",
    atmDef: "Venus has a thick atmosphere made mostly of carbon dioxide, with clouds of sulfuric acid that trap heat. This causes surface temperatures to reach up to 900°F (475°C), making it the hottest planet in the solar system.",
    orbDef: "Venus takes 225 Earth days to orbit the Sun, but its day lasts longer than its year. A day on Venus is 243 Earth days long.",
    expDef: "NASA and other space agencies have sent spacecraft to study Venus. These missions have helped scientists understand Venus’s thick atmosphere, volcanic surface, and extreme temperatures."
  },
  "h925": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus is the second planet from the Sun and the hottest planet in the solar system. Its thick atmosphere traps heat, making it hotter than Mercury.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is a rocky planet with volcanoes and large plains of lava. Its surface shows signs of volcanic activity, and scientists believe that some volcanoes may still be active today.",
    atmDef: "Venus has a thick atmosphere made mostly of carbon dioxide. Clouds of sulfuric acid trap heat, causing surface temperatures to rise as high as 900°F (475°C).",
    orbDef: "Venus takes 225 Earth days to orbit the Sun, but one day on Venus lasts 243 Earth days, making its day longer than its year.",
    expDef: "NASA and other space agencies have sent spacecraft to Venus. These missions have provided valuable information about Venus’s thick atmosphere and volcanic surface, helping scientists understand how Venus has evolved over time."
  },
  "h970": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus, the second planet from the Sun, is the hottest planet in the solar system. Its thick clouds trap heat, making it even hotter than Mercury.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is a rocky planet with large lava plains and volcanoes. Its surface is mostly made up of volcanic rock, and there is evidence that volcanoes on Venus may still be active today.",
    atmDef: "Venus’s atmosphere is mostly made of carbon dioxide, with clouds of sulfuric acid. These clouds trap heat, causing Venus’s surface temperatures to reach 900°F (475°C), making it the hottest planet in the solar system.",
    orbDef: "Venus takes 225 Earth days to complete one orbit around the Sun, but its day is longer than its year. One day on Venus lasts 243 Earth days.",
    expDef: "NASA and other space agencies have sent spacecraft to study Venus. These missions have given us detailed images of Venus’s surface and atmosphere, revealing its thick clouds, extreme temperatures, and volcanic activity."
  },
  "h1010": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus, the second planet from the Sun, is the hottest planet in the solar system. Its thick atmosphere traps heat, making it hotter than Mercury.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is a rocky planet with large lava plains and volcanoes. Its surface shows signs of volcanic activity, and scientists believe that some of these volcanoes may still be active today.",
    atmDef: "Venus’s atmosphere is mostly made of carbon dioxide, with clouds of sulfuric acid that trap heat. This causes surface temperatures to rise as high as 900°F (475°C), making Venus the hottest planet in the solar system.",
    orbDef: "Venus takes 225 Earth days to orbit the Sun, but one day on Venus lasts 243 Earth days. This means that Venus’s day is longer than its year.",
    expDef: "NASA and other space agencies have sent spacecraft to study Venus. These missions have revealed detailed information about Venus’s thick atmosphere, volcanic surface, and extreme temperatures."
  },
  "h1050": {
    name: "Venus",
    type: "Terrestrial planet",
    size: "Radius = 6,051 km  Mass 4.87 × 10²⁴ kg",
    moons: "None",
    orbPer: "1 day = 243 Earth Days",
    summary: "Venus, the second planet from the Sun, is the hottest planet in the solar system. Its thick clouds trap heat, making its surface even hotter than Mercury’s.",
    planetTexture: "venusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Venus is a rocky planet covered in large lava plains and volcanoes. Its surface shows evidence of volcanic activity, and scientists believe that some of these volcanoes may still be active today.",
    atmDef: "Venus’s atmosphere is primarily composed of carbon dioxide, with thick clouds of sulfuric acid that trap heat. This leads to surface temperatures as high as 900°F (475°C), making Venus the hottest planet in the solar system.",
    orbDef: "Venus takes 225 Earth days to orbit the Sun, but its day is longer than its year. One day on Venus lasts 243 Earth days.",
    expDef: "NASA and other space agencies have sent several spacecraft to study Venus. These missions have revealed a great deal about Venus’s thick atmosphere, its volcanic surface, and the extreme conditions that make Venus the hottest planet in the solar system."
  }
};

export const PlanetVenus = () => {
  // console.log(MercuryLevels)

  return (
    <>
      {/* Pass planetData based on the selected reading level to PlanetDefault */}
      <PlanetDefault planetDatas={VenusLevels} />
    </>
  );
};