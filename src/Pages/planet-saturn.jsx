import React from "react";
import { PlanetDefault } from "../Components/planet-default";

const SaturnLevels = {
  "hBR": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn is a gas giant known for its large rings.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is made of gas with no solid surface.",
    atmDef: "Saturn has a thick atmosphere of gas.",
    orbDef: "Saturn takes 29.5 Earth years to go around the Sun.",
    expDef: "NASA’s Cassini spacecraft studied Saturn and its rings."
  },
  "h190": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn is the second-largest planet in the solar system and is famous for its bright, wide rings.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is a gas giant, meaning it has no solid ground. It has many moons, with Titan being the largest.",
    atmDef: "Saturn’s atmosphere is made up of hydrogen and helium, the same gases found in stars.",
    orbDef: "Saturn takes 29.5 Earth years to complete one trip around the Sun. A day on Saturn lasts about 10.7 Earth hours.",
    expDef: "NASA’s Cassini spacecraft orbited Saturn from 2004 to 2017, studying the planet, its rings, and its moons in detail."
  },
  "h420": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn is the second-largest planet in the solar system, known for its bright, wide rings. It has over 80 moons, with Titan being the largest.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is made of hydrogen and helium gas, with no solid surface. It has 83 moons, including Titan and Enceladus. Saturn's rings are made of ice and rock particles.",
    atmDef: "Saturn’s atmosphere is mostly hydrogen and helium. The strong winds on Saturn create bands of clouds that wrap around the planet.",
    orbDef: "Saturn takes 29.5 Earth years to orbit the Sun. A day on Saturn is shorter than a day on Earth, lasting only 10.7 Earth hours.",
    expDef: "NASA’s Cassini spacecraft spent 13 years studying Saturn and its rings. Cassini discovered new moons, explored Titan, and observed water jets from the moon Enceladus."
  },
  "h520": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn is the second-largest planet and is best known for its bright, wide rings. It has 83 known moons, with Titan being the largest.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is a gas giant, so it doesn’t have a solid surface. Its rings are made of small pieces of ice and rock. Saturn has 83 moons, including Titan, which is the largest, and Enceladus, which has water jets shooting into space.",
    atmDef: "Saturn’s atmosphere is mostly hydrogen and helium, with strong winds and storms. These gases are the same that make up stars.",
    orbDef: "Saturn takes 29.5 Earth years to orbit the Sun. A day on Saturn is short, lasting only 10.7 Earth hours.",
    expDef: "NASA’s Cassini spacecraft studied Saturn for 13 years, providing us with detailed images and information about the planet, its rings, and its moons."
  },
  "h740": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn, the second-largest planet in the solar system, is known for its stunning rings. It has 83 moons, including Titan, which is bigger than the planet Mercury.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is made up mostly of hydrogen and helium, with no solid ground. It has 83 known moons, and its rings are made of ice and rock particles. Titan, Saturn's largest moon, has a thick atmosphere, and Enceladus has geysers that shoot water into space.",
    atmDef: "Saturn’s atmosphere is mostly hydrogen and helium, the same gases found in stars. Saturn also has strong winds, storms, and bands of clouds around the planet.",
    orbDef: "Saturn takes 29.5 Earth years to make one complete orbit around the Sun. A day on Saturn is about 10.7 Earth hours long, much shorter than a day on Earth.",
    expDef: "NASA’s Cassini spacecraft orbited Saturn from 2004 to 2017. It sent back detailed images of Saturn’s rings, discovered new moons, and studied Titan’s atmosphere and Enceladus’s water jets."
  },
  "h830": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn, the second-largest planet in our solar system, is a gas giant known for its bright, wide rings. It has 83 moons, including Titan, which has a thick atmosphere.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is a gas giant made mostly of hydrogen and helium, with no solid surface. It has 83 moons, the largest of which is Titan, which has a thick atmosphere. Saturn’s rings are made of billions of pieces of ice and rock, ranging in size from tiny grains to large boulders.",
    atmDef: "Saturn's atmosphere is mostly hydrogen and helium. The planet is famous for its strong winds and storms, and its cloud bands are constantly changing. Some storms on Saturn can last for years.",
    orbDef: "Saturn takes 29.5 Earth years to complete one orbit around the Sun. A day on Saturn lasts about 10.7 Earth hours.",
    expDef: "NASA’s Cassini spacecraft studied Saturn from 2004 to 2017. It sent back detailed images of the planet’s rings and moons, discovered new moons, and studied the geysers on Enceladus and the thick atmosphere on Titan."
  },
  "h925": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn is the second-largest planet in the solar system and is known for its wide, bright rings. It has 83 moons, with Titan being the largest.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is a gas giant, made mostly of hydrogen and helium. It has no solid surface. Saturn’s 83 moons include Titan, which is larger than Mercury and has a thick atmosphere, and Enceladus, which has geysers that shoot water into space. Saturn’s rings are made of billions of ice and rock particles, which range in size from tiny grains to huge chunks.",
    atmDef: "Saturn’s atmosphere is mostly hydrogen and helium, with strong winds that create bands of clouds. Some storms on Saturn last for years, and the planet’s cloud patterns are always changing.",
    orbDef: "Saturn takes 29.5 Earth years to orbit the Sun. A day on Saturn is about 10.7 Earth hours long, making its day much shorter than Earth’s.",
    expDef: "NASA’s Cassini spacecraft spent 13 years studying Saturn. It provided detailed images of Saturn’s rings and moons, discovered new moons, and explored Titan’s thick atmosphere and Enceladus’s water geysers."
  },
  "h970": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn is the second-largest planet in the solar system and is known for its bright, wide rings. Saturn has 83 known moons, including Titan, which is larger than the planet Mercury.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is a gas giant with no solid surface. It is made mostly of hydrogen and helium. Saturn’s 83 moons include Titan, the largest, and Enceladus, which has water jets shooting from its surface. Saturn’s rings are made up of billions of pieces of ice and rock, ranging from tiny grains to large boulders.",
    atmDef: "Saturn’s atmosphere is made mostly of hydrogen and helium. The planet has strong winds and large storms, some of which last for years. Saturn’s atmosphere forms cloud bands that change constantly.",
    orbDef: "Saturn takes 29.5 Earth years to orbit the Sun. A day on Saturn is about 10.7 Earth hours long.",
    expDef: "NASA’s Cassini spacecraft studied Saturn from 2004 to 2017, sending back detailed images of the planet, its rings, and its moons. Cassini discovered new moons and provided insights into Titan’s atmosphere and Enceladus’s water jets."
  },
  "h1010": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn is the second-largest planet in our solar system, known for its spectacular rings and numerous moons. Titan, Saturn’s largest moon, has a thick atmosphere and is larger than Mercury.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is a gas giant, made up mostly of hydrogen and helium. It has no solid surface. Saturn is famous for its large, bright rings, which are made up of billions of ice and rock particles. It also has 83 known moons, including Titan, which has a thick atmosphere, and Enceladus, which has water jets that shoot from its surface.",
    atmDef: "Saturn’s atmosphere is mostly hydrogen and helium, the same gases that make up stars. Saturn is known for its strong winds and violent storms, which create constantly changing cloud patterns. Some storms on Saturn can last for years.",
    orbDef: "Saturn takes 29.5 Earth years to orbit the Sun, but a day on Saturn is only about 10.7 Earth hours long.",
    expDef: "NASA’s Cassini spacecraft orbited Saturn for 13 years, from 2004 to 2017. It captured detailed images of Saturn’s rings and moons, discovered new moons, and studied Titan’s atmosphere and Enceladus’s water geysers."
  },
  "h1050": {
    name: "Saturn",
    type: "Gas giant",
    size: "Radius = 58,232 km  Mass 5.68 × 10²⁶ kg",
    moons: "83 (Titan, Enceladus, others)",
    orbPer: "1 day = 10.7 Earth hours",
    summary: "Saturn, the second-largest planet in our solar system, is a gas giant known for its bright, wide rings and numerous moons. Saturn’s largest moon, Titan, has a thick atmosphere and is bigger than the planet Mercury.",
    planetTexture: "saturnTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Saturn is a gas giant composed mainly of hydrogen and helium, with no solid surface. It is famous for its bright, wide rings, which are made up of billions of ice and rock particles. Saturn has 83 moons, the largest of which is Titan. Titan has a thick atmosphere, and Enceladus, another of Saturn’s moons, has water jets that shoot into space from beneath its icy surface.",
    atmDef: "Saturn’s atmosphere is made mostly of hydrogen and helium. The planet has extremely strong winds and large storms, some of which last for many years. The atmosphere forms cloud bands that change constantly, creating beautiful patterns across the planet.",
    orbDef: "Saturn takes 29.5 Earth years to orbit the Sun, but its day is much shorter, lasting only 10.7 Earth hours.",
    expDef: "NASA’s Cassini spacecraft orbited Saturn from 2004 to 2017, providing scientists with detailed images of Saturn’s rings and moons. Cassini discovered new moons, studied Titan’s thick atmosphere, and observed the water jets on Enceladus, which shoot from the moon’s surface."
  }
};

export const PlanetSaturn = () => {
  // console.log(MercuryLevels)

  return (
    <>
      {/* Pass planetData based on the selected reading level to PlanetDefault */}
      <PlanetDefault planetDatas={SaturnLevels} />
    </>
  );
};
