import React from "react";
import { PlanetDefault } from "../Components/planet-default";

const NeptuneLevels = {
  "hBR": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune is a gas giant, far from the Sun. It is blue in color.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune is made of gas and has no solid surface.",
    atmDef: "Neptune has a thick atmosphere of gas.",
    orbDef: "Neptune takes 165 Earth years to orbit the Sun.",
    expDef: "NASA's Voyager 2 visited Neptune in 1989."
  },
  "h190": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune is the farthest planet from the Sun. It is a gas giant and is known for its deep blue color.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune has no solid surface because it is made up of gas. It has many moons, with Triton being the largest.",
    atmDef: "Neptune has a thick atmosphere made mostly of hydrogen, helium, and methane, which gives it its blue color.",
    orbDef: "Neptune takes 165 Earth years to go around the Sun. A day on Neptune is about 16 Earth hours long.",
    expDef: "NASA’s Voyager 2 flew by Neptune in 1989, capturing the first close-up images of the planet and its moons."
  },
  "h420": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune is a gas giant and the farthest planet from the Sun. It has 14 known moons, and Triton is the largest.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune is made up of gas, with no solid ground. It has a total of 14 moons, including Triton, which is the largest. The planet is blue because of the methane in its atmosphere.",
    atmDef: "Neptune has a thick atmosphere made up of hydrogen, helium, and methane. The methane in its atmosphere is what gives Neptune its deep blue color.",
    orbDef: "Neptune takes 165 Earth years to make one full trip around the Sun. A day on Neptune is shorter than a day on Earth, lasting only 16 Earth hours.",
    expDef: "NASA's Voyager 2 is the only spacecraft to have visited Neptune. It flew by the planet in 1989 and sent back detailed pictures of Neptune and its largest moon, Triton."
  },
  "h520": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune is the farthest planet from the Sun and is a gas giant. Its blue color comes from the methane in its atmosphere.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune is a gas giant, which means it has no solid surface. It has 14 known moons, and Triton is the largest and most interesting, as it orbits Neptune in the opposite direction to most moons.",
    atmDef: "Neptune's atmosphere is mostly made of hydrogen, helium, and methane. Methane is responsible for the planet's bright blue color, and Neptune also experiences the strongest winds in the solar system.",
    orbDef: "Neptune takes 165 Earth years to orbit the Sun. A day on Neptune is about 16 Earth hours long, making its days shorter than Earth's.",
    expDef: "Voyager 2 is the only spacecraft to have visited Neptune. It made a close flyby in 1989, sending back detailed images of the planet and discovering new moons and rings."
  },
  "h740": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune is the eighth planet from the Sun and the farthest known planet in our solar system. It is a gas giant, known for its deep blue color and powerful storms.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune is a gas giant with no solid surface. Its blue color comes from the methane in its atmosphere, which absorbs red light and reflects blue. The planet has 14 known moons, and its largest moon, Triton, is unusual because it orbits Neptune in the opposite direction of the planet's rotation.",
    atmDef: "Neptune's atmosphere is thick and made mostly of hydrogen, helium, and methane. The methane in its atmosphere gives Neptune its blue color. The planet experiences the fastest winds in the solar system, reaching speeds of up to 1,200 miles per hour.",
    orbDef: "Neptune takes 165 Earth years to complete one orbit around the Sun. A day on Neptune is short, lasting only 16 Earth hours, compared to 24 hours on Earth.",
    expDef: "NASA's Voyager 2 is the only spacecraft to have visited Neptune. In 1989, it flew by the planet and discovered new moons and rings. Voyager 2 provided the first close-up images of Neptune and Triton."
  },
  "h830": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune, the farthest planet from the Sun, is a gas giant known for its deep blue color and extreme weather. The planet has 14 moons, with Triton being the largest.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune is a gas giant with no solid surface. Its blue color is due to the methane in its atmosphere. The planet has 14 known moons, with Triton being the largest. Triton is unique because it orbits Neptune in the opposite direction of the planet's rotation, which suggests it may have been captured by Neptune's gravity.",
    atmDef: "Neptune’s atmosphere is made of hydrogen, helium, and methane. Methane is responsible for Neptune’s deep blue color. The planet experiences extremely strong winds, the fastest in the solar system, and has large, dark storms similar to Jupiter's Great Red Spot.",
    orbDef: "Neptune takes 165 Earth years to orbit the Sun. A day on Neptune lasts about 16 Earth hours, making its days shorter than Earth's.",
    expDef: "NASA’s Voyager 2 spacecraft flew past Neptune in 1989, making it the only spacecraft to visit the planet. Voyager 2 provided detailed images of Neptune’s atmosphere, moons, and rings, and discovered several new moons."
  },
  "h925": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune is the farthest planet from the Sun in our solar system. It is a gas giant with a bright blue color caused by methane in its atmosphere.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune is made of gas, primarily hydrogen, helium, and methane. The methane in Neptune’s atmosphere gives the planet its blue color. Neptune has 14 moons, and its largest moon, Triton, orbits in the opposite direction to Neptune’s rotation. This suggests that Triton may have been captured by Neptune’s gravity long ago.",
    atmDef: "Neptune’s atmosphere is thick and primarily made of hydrogen and helium, with a smaller amount of methane. Methane absorbs red light, making Neptune appear blue. Neptune has the fastest winds in the solar system, which can reach speeds of over 1,200 miles per hour.",
    orbDef: "Neptune takes 165 Earth years to orbit the Sun. A day on Neptune lasts only 16 Earth hours, much shorter than a day on Earth.",
    expDef: "Voyager 2 is the only spacecraft to have visited Neptune. In 1989, Voyager 2 sent back detailed images of Neptune and its moons, discovering new moons and rings during its flyby."
  },
  "h970": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune, the eighth and farthest planet from the Sun, is a gas giant known for its striking blue color and strong winds. It has 14 known moons, the largest of which is Triton.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune is a gas giant with no solid surface. It has a striking blue color due to methane in its atmosphere, and it is known for its extreme winds and large storms. Neptune has 14 moons, with Triton being the largest. Triton orbits Neptune in the opposite direction of the planet’s rotation, suggesting that it may have been captured by Neptune’s gravity.",
    atmDef: "Neptune’s atmosphere is primarily made of hydrogen, helium, and methane. The methane absorbs red light, making the planet appear blue. Neptune is known for having the fastest winds in the solar system, which can reach speeds of over 1,200 miles per hour.",
    orbDef: "Neptune takes 165 Earth years to orbit the Sun, making it the slowest of the planets. A day on Neptune lasts about 16 Earth hours, which is shorter than a day on Earth.",
    expDef: "NASA’s Voyager 2 spacecraft flew by Neptune in 1989, sending back the first close-up images of the planet and its moons. Voyager 2 discovered new moons and rings around Neptune during its flyby."
  },
  "h1010": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune is the eighth and farthest planet from the Sun, known for its deep blue color. It is a gas giant with 14 known moons, including Triton, which is unique because it orbits Neptune in the opposite direction of the planet's rotation.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune is a gas giant with no solid surface. It is composed mainly of hydrogen, helium, and methane. The methane in Neptune’s atmosphere gives the planet its blue color. Neptune has 14 moons, the largest of which is Triton, a moon that orbits the planet in the opposite direction of Neptune’s spin.",
    atmDef: "Neptune’s atmosphere is primarily made of hydrogen, helium, and methane. Methane is responsible for Neptune’s blue color, as it absorbs red light and reflects blue light. Neptune is also known for its intense winds and violent storms, including the Great Dark Spot, a large storm similar to Jupiter’s Great Red Spot.",
    orbDef: "Neptune takes 165 Earth years to orbit the Sun. A day on Neptune, which is the time it takes for the planet to complete one full rotation, is about 16 Earth hours long.",
    expDef: "NASA’s Voyager 2 spacecraft flew by Neptune in 1989, capturing the first close-up images of the planet and its largest moon, Triton. Voyager 2 also discovered several new moons and rings around Neptune during its flyby."
  },
  "h1050": {
    name: "Neptune",
    type: "Gas giant",
    size: "Radius = 24,622 km  Mass 1.02 × 10²⁶ kg",
    moons: "14 (Triton, Nereid, others)",
    orbPer: "1 day = 16 Earth hours",
    summary: "Neptune, the eighth planet from the Sun, is a gas giant with a striking blue color caused by methane in its atmosphere. It has 14 known moons, including Triton, which is unique because it orbits in the opposite direction to Neptune's rotation.",
    planetTexture: "neptuneTexture.webp",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Neptune is a gas giant, composed mostly of hydrogen, helium, and methane. Methane is what gives Neptune its blue color, as it absorbs red light and reflects blue light. The planet is known for its strong winds and large storms, and it has 14 moons, including Triton, which orbits in the opposite direction of Neptune’s rotation.",
    atmDef: "Neptune’s atmosphere consists mainly of hydrogen, helium, and methane. The methane in Neptune’s atmosphere absorbs red light and reflects blue, giving the planet its striking color. Neptune experiences extremely high wind speeds, the fastest in the solar system, and is home to large, dark storms that can last for years.",
    orbDef: "Neptune takes 165 Earth years to orbit the Sun, making it the slowest planet in our solar system. A day on Neptune is about 16 Earth hours long, which is much shorter than an Earth day.",
    expDef: "NASA’s Voyager 2 spacecraft flew past Neptune in 1989, sending back the first close-up images of the planet and its moons. Voyager 2 discovered several new moons and rings, and it revealed much about Neptune’s atmosphere and weather patterns."
  }
};


export const PlanetNeptune = () => {
  // console.log(MercuryLevels)

  return (
    <>
      {/* Pass planetData based on the selected reading level to PlanetDefault */}
      <PlanetDefault planetDatas={NeptuneLevels} />
    </>
  );
};
