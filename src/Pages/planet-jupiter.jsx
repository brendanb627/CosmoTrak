import React from "react";
import { PlanetDefault } from "../Components/planet-default";

const JupiterLevels = {
  "hBR": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter is the largest planet in our solar system and is mostly made of gas.",
    planetTexture: "jupiterTexture.jpg",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter has no solid ground. It is made of gas.",
    atmDef: "Jupiter has clouds of gas, mainly hydrogen and helium.",
    orbDef: "Jupiter takes 12 Earth years to go around the Sun.",
    expDef: "NASA sent spacecraft like Juno to study Jupiter."
  },
  "h190": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter is the largest planet in our solar system. It is mostly made of gas and has strong winds.",
    planetTexture: "jupiterTexture.jpg",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter does not have a solid surface like Earth. It is made mostly of gas, such as hydrogen and helium.",
    atmDef: "Jupiter’s atmosphere is thick and contains clouds made of hydrogen and helium. It has powerful storms, like the Great Red Spot, which is bigger than Earth.",
    orbDef: "Jupiter takes about 12 Earth years to orbit the Sun. Its day is much shorter, lasting just 10 Earth hours.",
    expDef: "NASA has sent spacecraft to study Jupiter, including the Juno mission, which helps scientists learn more about the planet’s storms and atmosphere."
  },
  "h420": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter is the largest planet in the solar system and is mostly made of gas, like hydrogen and helium. It has a lot of moons, and the biggest one is Ganymede.",
    planetTexture: "jupiterTexture.webp",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter is a gas giant, so it does not have a solid surface. Its atmosphere has colorful bands and large storms, like the Great Red Spot.",
    atmDef: "Jupiter’s atmosphere is made mostly of hydrogen and helium. The planet experiences powerful storms and has high-speed winds, with its most famous storm being the Great Red Spot.",
    orbDef: "Jupiter takes 12 Earth years to complete one orbit around the Sun. It spins very fast, so one day on Jupiter is only 10 Earth hours.",
    expDef: "NASA’s Juno spacecraft is studying Jupiter's atmosphere, storms, and magnetic field. Past missions like Galileo also gave us a lot of information about the planet."
  },
  "h520": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter is the biggest planet in our solar system. It’s made mostly of hydrogen and helium, and it has 79 known moons.",
    planetTexture: "jupiterTexture.webp",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter is a gas giant, so it doesn’t have a solid surface like Earth. Its atmosphere has strong winds and storms, including the Great Red Spot, a storm that’s been going for hundreds of years.",
    atmDef: "Jupiter’s atmosphere is mostly hydrogen and helium, and it has many storms. The Great Red Spot is the largest and has lasted for centuries. The planet also has very fast winds and thick clouds.",
    orbDef: "Jupiter takes 12 Earth years to orbit the Sun. A day on Jupiter is only 10 Earth hours because it spins very fast.",
    expDef: "NASA’s Juno mission is currently studying Jupiter’s atmosphere, storms, and magnetic field. Past missions like Voyager and Galileo also gave us valuable data on Jupiter and its moons."
  },
  "h740": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter is the largest planet in our solar system, known for its swirling clouds, powerful storms, and dozens of moons. It is mostly composed of hydrogen and helium.",
    planetTexture: "jupiterTexture.webp",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter is a gas giant, which means it does not have a solid surface. Its atmosphere has swirling bands of clouds and strong winds. The Great Red Spot is the most famous storm on Jupiter and is much larger than Earth.",
    atmDef: "Jupiter’s atmosphere is made mostly of hydrogen and helium. It has thick clouds and strong storms, including the Great Red Spot, a storm that has been raging for hundreds of years. Winds on Jupiter can reach up to 360 km/h.",
    orbDef: "Jupiter takes 12 Earth years to complete its orbit around the Sun. One day on Jupiter is very short, lasting only 10 Earth hours due to its fast rotation.",
    expDef: "NASA’s Juno mission is currently providing detailed data on Jupiter’s atmosphere and magnetic field. Previous missions like Galileo and Voyager have greatly expanded our understanding of the planet and its moons."
  },
  "h830": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter, the largest planet in our solar system, is mostly composed of hydrogen and helium. It is famous for its massive storms and its many moons, including Ganymede, the largest moon in the solar system.",
    planetTexture: "jupiterTexture.webp",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter is a gas giant, which means it does not have a solid surface like Earth. Instead, it is mostly made of gases like hydrogen and helium. Its atmosphere has colorful bands and massive storms, including the Great Red Spot, a storm larger than Earth that has lasted for hundreds of years.",
    atmDef: "Jupiter’s atmosphere is primarily composed of hydrogen and helium. The planet has thick clouds, strong winds, and violent storms, including the Great Red Spot, which is a storm larger than Earth and has been going on for centuries. Winds on Jupiter can reach extremely high speeds, up to 360 km/h.",
    orbDef: "Jupiter orbits the Sun in 12 Earth years, but its day is much shorter than Earth’s, lasting just 10 Earth hours because it rotates very quickly.",
    expDef: "Jupiter has been explored by several spacecraft, including NASA’s Juno mission, which is currently providing detailed information about the planet’s atmosphere, storms, and magnetic field. Earlier missions like Galileo and Voyager also contributed significantly to our understanding of the planet and its moons."
  },
  "h925": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter is the largest planet in the solar system, and it is primarily made of hydrogen and helium. It has 79 known moons, including the largest moon in the solar system, Ganymede.",
    planetTexture: "jupiterTexture.webp",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter is a gas giant, meaning it has no solid surface like Earth. It is mostly made up of hydrogen and helium. Its atmosphere is known for its bands of clouds and giant storms, like the Great Red Spot, which is a storm larger than Earth and has lasted for centuries.",
    atmDef: "Jupiter’s atmosphere is made mostly of hydrogen and helium, with thick clouds and fast winds. The Great Red Spot is the most famous storm on Jupiter and has been raging for centuries. The planet also has intense winds, which can reach speeds of 360 km/h.",
    orbDef: "Jupiter takes about 12 Earth years to orbit the Sun. One day on Jupiter is just 10 Earth hours long due to the planet’s fast rotation.",
    expDef: "NASA’s Juno mission is currently studying Jupiter’s atmosphere and magnetic field. Previous missions like Galileo and Voyager provided key insights into the planet’s structure, storms, and moons."
  },
  "h970": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter, the largest planet in the solar system, is composed primarily of hydrogen and helium. It is home to some of the most intense storms in the solar system, including the Great Red Spot, a storm larger than Earth that has lasted for centuries.",
    planetTexture: "jupiterTexture.webp",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter is a gas giant with no solid surface. It is composed mostly of hydrogen and helium, with swirling clouds and storms that dominate its atmosphere. The Great Red Spot is the most famous of these storms, and it has been raging for centuries.",
    atmDef: "Jupiter’s atmosphere is mostly made of hydrogen and helium, with powerful storms and fast winds. The Great Red Spot is a storm larger than Earth that has been active for hundreds of years, and Jupiter’s winds can reach speeds of up to 360 km/h.",
    orbDef: "Jupiter takes 12 Earth years to orbit the Sun, but its day is just 10 Earth hours long due to its rapid rotation.",
    expDef: "NASA’s Juno mission is currently gathering detailed data on Jupiter’s atmosphere and magnetic field. Previous missions like Galileo and Voyager provided crucial information on the planet’s structure, storms, and moons."
  },
  "h1010": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter is the largest planet in our solar system, composed primarily of hydrogen and helium. It is known for its massive storms, including the Great Red Spot, and its many moons, the largest being Ganymede.",
    planetTexture: "jupiterTexture.webp",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter is a gas giant with no solid surface, composed primarily of hydrogen and helium. Its atmosphere features swirling clouds and large storms, the most famous of which is the Great Red Spot, a storm larger than Earth that has been raging for centuries.",
    atmDef: "Jupiter’s atmosphere is mostly hydrogen and helium, with massive storms like the Great Red Spot, a storm larger than Earth that has lasted for centuries. Jupiter’s winds are extremely fast, reaching up to 360 km/h.",
    orbDef: "Jupiter takes 12 Earth years to orbit the Sun, and its rapid rotation results in a day that lasts just 10 Earth hours.",
    expDef: "NASA’s Juno mission is currently studying Jupiter’s atmosphere, storms, and magnetic field. Earlier missions, such as Galileo and Voyager, provided valuable data on Jupiter’s structure and its many moons."
  },
  "h1050": {
    name: "Jupiter",
    type: "Gas giant",
    size: "Radius = 69,911 km  Mass 1.90 × 10²⁷ kg",
    moons: "79 (Biggest: Ganymede)",
    orbPer: "1 day = 10 Earth hours",
    summary: "Jupiter is the largest planet in our solar system. It is a gas giant primarily made of hydrogen and helium and is home to massive storms, such as the Great Red Spot, which has been raging for centuries.",
    planetTexture: "jupiterTexture.webp",
    radiantIntensity: "0.002",
    radiant: "0xffd700",
    geoDef: "Jupiter, the largest planet in the solar system, is a gas giant composed mostly of hydrogen and helium. It has no solid surface, and its atmosphere is characterized by swirling bands of clouds and intense storms, like the Great Red Spot, a storm that is larger than Earth and has been active for hundreds of years.",
    atmDef: "Jupiter’s atmosphere is made of hydrogen and helium, and it features some of the most intense storms in the solar system. The Great Red Spot, a storm larger than Earth, has been raging for centuries. Jupiter also has incredibly fast winds, which can reach speeds of up to 360 km/h.",
    orbDef: "Jupiter takes 12 Earth years to orbit the Sun, and because it rotates very quickly, a day on Jupiter lasts just 10 Earth hours.",
    expDef: "Jupiter has been the subject of numerous space missions, including NASA’s Juno mission, which is currently gathering detailed data on the planet’s atmosphere, storms, and magnetic field. Previous missions like Galileo and Voyager have provided significant insights into Jupiter’s structure and its many moons."
  }
};


export const PlanetJupiter = () => {
  // console.log(MercuryLevels)

  return (
    <>
      {/* Pass planetData based on the selected reading level to PlanetDefault */}
      <PlanetDefault planetDatas={JupiterLevels} />
    </>
  );
};

