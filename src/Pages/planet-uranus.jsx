import React from "react";
import { PlanetDefault } from "../Components/planet-default";

const UranusLevels = {
  "hBR": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus is a cold planet with a blue color and faint rings.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is mostly made of icy gas.",
    atmDef: "Uranus has a very cold atmosphere.",
    orbDef: "Uranus takes 84 Earth years to go around the Sun.",
    expDef: "NASA’s Voyager 2 flew by Uranus to study it."
  },
  "h190": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus is the seventh planet from the Sun and is very cold. Its blue color comes from the gases in its atmosphere.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is made mostly of gas, with a small core in the center. It has many moons, the biggest ones are Miranda, Ariel, and Titania.",
    atmDef: "The atmosphere of Uranus is very cold and is made mostly of hydrogen, helium, and methane. The methane makes the planet look blue.",
    orbDef: "Uranus takes 84 Earth years to complete one orbit around the Sun. A day on Uranus lasts 17.2 Earth hours.",
    expDef: "NASA’s Voyager 2 spacecraft flew by Uranus in 1986 and gave us our only close-up pictures of the planet."
  },
  "h420": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus is the seventh planet from the Sun and is known for its cold atmosphere and blue color. It has 27 moons, and its biggest are Miranda, Ariel, and Titania.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is mostly made of hydrogen, helium, and methane gases, with a small rocky core in the center. Uranus also has faint rings made of ice and rock.",
    atmDef: "Uranus’ atmosphere is made mostly of hydrogen and helium, with methane gas giving it a blue-green color. The temperature in Uranus’s atmosphere is very cold, reaching -224°C.",
    orbDef: "Uranus takes 84 Earth years to orbit the Sun. It spins on its side, which is unique among the planets, and its day lasts 17.2 Earth hours.",
    expDef: "NASA’s Voyager 2 spacecraft flew by Uranus in 1986, giving scientists their first detailed look at the planet and its moons."
  },
  "h520": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus is the seventh planet from the Sun and is famous for its cold atmosphere and blue-green color. It has 27 moons, including Miranda, Ariel, and Titania.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is made mostly of hydrogen, helium, and methane gases. It has a small rocky core. Uranus also has faint rings made of ice and rock.",
    atmDef: "Uranus’ atmosphere is cold and is made up mostly of hydrogen, helium, and methane, which gives it its blue-green color. The temperature can reach as low as -224°C, making it the coldest planet in the solar system.",
    orbDef: "Uranus takes 84 Earth years to go around the Sun. It spins on its side, unlike any other planet, and one day lasts 17.2 Earth hours.",
    expDef: "NASA’s Voyager 2 spacecraft flew by Uranus in 1986. It took pictures of the planet and its moons, showing us details of the planet for the first time."
  },
  "h740": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus is the seventh planet from the Sun and is known for its cold, blue-green color. It has 27 moons, including Miranda, Ariel, and Titania.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is made mostly of hydrogen, helium, and methane gases, with a small rocky core. Uranus has faint rings made of ice and rock and has 27 known moons.",
    atmDef: "Uranus has a very cold atmosphere made of hydrogen, helium, and methane, which gives the planet its blue-green color. The temperature can drop to -224°C, making Uranus the coldest planet in the solar system.",
    orbDef: "Uranus takes 84 Earth years to complete one orbit around the Sun. It rotates on its side, which is different from all other planets. A day on Uranus lasts 17.2 Earth hours.",
    expDef: "NASA’s Voyager 2 spacecraft flew by Uranus in 1986. It sent back pictures of Uranus and its moons, providing the first detailed look at the planet."
  },
  "h830": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus is the seventh planet from the Sun, known for its cold atmosphere and blue-green color. Uranus has 27 moons, including Miranda, Ariel, and Titania.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is mostly made of hydrogen, helium, and methane gases, with a small rocky core at its center. Uranus has faint rings made of ice and rock, and 27 moons, with Miranda and Titania being some of the largest.",
    atmDef: "Uranus’s atmosphere is made up mostly of hydrogen and helium, with some methane, which gives the planet its blue-green color. It is the coldest planet in the solar system, with temperatures dropping to -224°C.",
    orbDef: "Uranus takes 84 Earth years to orbit the Sun, but its day is much shorter, lasting only 17.2 Earth hours. Uranus is unique because it spins on its side.",
    expDef: "NASA’s Voyager 2 spacecraft passed by Uranus in 1986, providing the first close-up images of the planet and its moons. Voyager 2 discovered new details about Uranus’s rings and found that its moons have complex surfaces."
  },
  "h925": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus is the seventh planet from the Sun and is known for its cold, blue-green appearance. It has 27 moons, including Miranda, Ariel, and Titania.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is made of hydrogen, helium, and methane gases, and it has a small rocky core. Uranus has faint rings of ice and rock, and it is surrounded by 27 known moons. Titania is the largest of these moons, while Miranda has a surface with cliffs and valleys.",
    atmDef: "Uranus’s atmosphere is made mostly of hydrogen and helium, with methane giving it a blue-green color. Uranus has the coldest atmosphere of all the planets, with temperatures reaching as low as -224°C.",
    orbDef: "Uranus takes 84 Earth years to complete one orbit around the Sun. Its unique tilt causes it to rotate on its side, making its seasons very long. A day on Uranus lasts 17.2 Earth hours.",
    expDef: "NASA’s Voyager 2 spacecraft passed Uranus in 1986, giving us the first close-up images of the planet. Voyager discovered new details about Uranus’s moons and faint rings, and revealed that its moons have diverse and unique surfaces."
  },
  "h970": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus is the seventh planet from the Sun, with a cold, blue-green atmosphere. Uranus is unique for rotating on its side and has 27 moons, including Miranda, Ariel, and Titania.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is mostly made of hydrogen, helium, and methane gases, with a small rocky core. Uranus has faint rings made of ice and rock. It has 27 moons, including Miranda, which has tall cliffs, and Titania, the largest moon.",
    atmDef: "Uranus has a very cold atmosphere composed mainly of hydrogen and helium, with some methane, which gives it a blue-green color. Its temperature can drop to -224°C, making it the coldest planet in the solar system.",
    orbDef: "Uranus takes 84 Earth years to orbit the Sun, and it rotates on its side. This causes extreme seasons, and a day on Uranus lasts 17.2 Earth hours.",
    expDef: "NASA’s Voyager 2 spacecraft flew by Uranus in 1986, sending back the first detailed images of the planet and its moons. The spacecraft discovered that Uranus has rings and showed the diversity of its moons, including Titania and Miranda."
  },
  "h1010": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus is the seventh planet from the Sun and is known for its blue-green color and unique tilt, which causes it to rotate on its side. It has 27 moons, including Miranda, Ariel, and Titania.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is an ice giant made mostly of hydrogen, helium, and methane gases, with a small rocky core at its center. It has faint rings made of ice and rock and 27 moons, including Miranda, which has tall cliffs, and Titania, the largest moon.",
    atmDef: "Uranus has a cold atmosphere made mostly of hydrogen, helium, and methane. The methane gives it a blue-green color, and the temperature can drop as low as -224°C, making it the coldest planet in the solar system.",
    orbDef: "Uranus takes 84 Earth years to orbit the Sun. It is unique because it rotates on its side, causing extreme seasonal changes. A day on Uranus lasts 17.2 Earth hours.",
    expDef: "NASA’s Voyager 2 spacecraft flew by Uranus in 1986, giving us the first close-up look at the planet and its moons. Voyager discovered Uranus’s faint rings and studied its moons, including Miranda and Titania."
  },
  "h1050": {
    name: "Uranus",
    type: "Ice giant",
    size: "Radius = 25,362 km  Mass 8.68 × 10²⁵ kg",
    moons: "27 (Miranda, Ariel, others)",
    orbPer: "1 day = 17.2 Earth hours",
    summary: "Uranus, the seventh planet from the Sun, is known for its unique sideways rotation and blue-green color. It has 27 moons, with Miranda, Ariel, and Titania being the largest.",
    planetTexture: "uranusTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Uranus is an ice giant composed mainly of hydrogen, helium, and methane, with a small rocky core at its center. Uranus has faint rings made of ice and rock, and it is surrounded by 27 moons. Titania is the largest of these moons, and Miranda is known for its tall cliffs and valleys.",
    atmDef: "Uranus’s atmosphere is composed mostly of hydrogen and helium, with methane giving it a blue-green color. It has the coldest atmosphere of all the planets, with temperatures dropping to -224°C.",
    orbDef: "Uranus takes 84 Earth years to orbit the Sun, but its day lasts only 17.2 Earth hours. The planet’s extreme axial tilt causes it to rotate on its side, which leads to extreme seasonal changes.",
    expDef: "NASA’s Voyager 2 spacecraft flew by Uranus in 1986, providing the first close-up images of the planet and its moons. Voyager revealed that Uranus has faint rings and discovered new details about the planet’s moons, including Miranda and Titania."
  }
};

// Parent component to manage reading levels
export const PlanetUranus = () => {
  // console.log(MercuryLevels)

  return (
    <>
      {/* Pass planetData based on the selected reading level to PlanetDefault */}
      <PlanetDefault planetDatas={UranusLevels} />
    </>
  );
};
