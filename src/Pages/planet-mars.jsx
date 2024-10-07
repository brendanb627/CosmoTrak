import React from "react";
import { PlanetDefault } from "../Components/planet-default";

const MarsLevels = {
  "hBR": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars is a rocky planet. It is known as the Red Planet.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars has red, rocky ground and two small moons.",
    atmDef: "Mars has a thin atmosphere made mostly of carbon dioxide.",
    orbDef: "Mars takes about 687 days to go around the Sun.",
    expDef: "NASA sent rovers like Curiosity and Perseverance to explore Mars."
  },
  "h190": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars is a small, rocky planet. It is often called the Red Planet because of its red color.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars has a rocky surface and is known for its red soil. It has two small moons called Phobos and Deimos.",
    atmDef: "Mars has a thin atmosphere made mostly of carbon dioxide. It has dust storms that can cover the entire planet.",
    orbDef: "Mars takes about 687 Earth days to orbit the Sun. A day on Mars is 24.6 Earth hours long, which is similar to a day on Earth.",
    expDef: "NASA has sent many rovers to Mars, like Curiosity and Perseverance, to learn more about the planet's surface and whether it once had water."
  },
  "h420": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars is a rocky planet known for its red color. It is smaller than Earth and has two moons.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars is called the Red Planet because of its iron-rich soil, which gives it a reddish color. The planet has two small moons, Phobos and Deimos, and a surface filled with canyons, volcanoes, and craters.",
    atmDef: "Mars has a very thin atmosphere made mostly of carbon dioxide. Because its atmosphere is so thin, Mars has extreme temperatures and large dust storms.",
    orbDef: "Mars takes about 687 Earth days to orbit the Sun. A day on Mars is almost the same length as a day on Earth, lasting 24.6 Earth hours.",
    expDef: "NASA has sent several missions to Mars, including the Curiosity and Perseverance rovers. These rovers are exploring the planet’s surface, searching for signs of past water and life."
  },
  "h520": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars, often called the Red Planet, is smaller than Earth. It has two small moons and a surface filled with volcanoes, valleys, and craters.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars is known for its red soil, which is caused by iron oxide (rust). The surface of Mars is covered with large volcanoes, deep valleys, and impact craters. The planet has two small moons called Phobos and Deimos.",
    atmDef: "Mars has a thin atmosphere made mostly of carbon dioxide. Its atmosphere is too thin to support life as we know it, and it experiences large dust storms that can cover the entire planet.",
    orbDef: "Mars takes about 687 Earth days to orbit the Sun. A day on Mars is 24.6 Earth hours long, which is similar to a day on Earth, but its year is almost twice as long as Earth’s.",
    expDef: "NASA's rovers like Curiosity and Perseverance are exploring Mars to study its surface and search for signs of ancient water and life. Other missions, like the InSight lander, are studying the planet’s geology."
  },
  "h740": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars is a small, rocky planet often called the Red Planet because of its reddish color. It has two small moons and a surface filled with volcanoes, craters, and valleys.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars has a red, rocky surface due to iron oxide (rust) in its soil. The planet has many large volcanoes, deep valleys, and impact craters. Mars is home to Olympus Mons, the tallest volcano in the solar system. It has two small moons: Phobos and Deimos.",
    atmDef: "Mars has a thin atmosphere made mostly of carbon dioxide, with small amounts of nitrogen and argon. The atmosphere is not thick enough to protect the planet from the Sun’s radiation, and Mars experiences frequent dust storms that can last for months.",
    orbDef: "Mars takes about 687 Earth days to orbit the Sun. A day on Mars is similar to an Earth day, lasting 24.6 hours, but a year on Mars is almost twice as long as a year on Earth.",
    expDef: "NASA’s Curiosity and Perseverance rovers are currently exploring Mars to search for evidence of ancient water and life. InSight is another mission that is studying Mars’ interior, and the planet is a key target for future human exploration."
  },
  "h830": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars, also known as the Red Planet, is smaller than Earth and is famous for its reddish appearance. It has two small moons, Phobos and Deimos, and a surface marked by giant volcanoes, valleys, and impact craters.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars is a terrestrial planet with a red, iron-rich surface. It has massive volcanoes, deep valleys, and craters from asteroid impacts. The largest volcano in the solar system, Olympus Mons, is found on Mars. The planet has two small moons, Phobos and Deimos.",
    atmDef: "Mars has a thin atmosphere, mostly made of carbon dioxide, with small amounts of nitrogen and argon. The thin atmosphere leads to extreme temperature variations and frequent dust storms that can last for months. The planet’s atmosphere is not thick enough to support liquid water.",
    orbDef: "Mars takes 687 Earth days to orbit the Sun. One day on Mars is very similar to an Earth day, lasting 24.6 Earth hours, but its year is nearly twice as long as Earth’s year.",
    expDef: "Mars is being studied by NASA’s Curiosity and Perseverance rovers, which are exploring the surface for signs of ancient life and water. The InSight mission is studying the planet’s interior, and future human missions to Mars are being planned."
  },
  "h925": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars is a terrestrial planet known for its reddish appearance, which is caused by iron oxide in its soil. It is smaller than Earth and has two small moons, Phobos and Deimos.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars is a rocky planet with a surface made up of iron oxide, giving it a reddish color. The planet has massive volcanoes, deep valleys, and craters from asteroid impacts. Mars is home to Olympus Mons, the tallest volcano in the solar system, and it has two small moons: Phobos and Deimos.",
    atmDef: "Mars has a thin atmosphere mostly made of carbon dioxide. The thin atmosphere means the planet experiences large temperature swings and frequent dust storms. The atmosphere is not dense enough to support liquid water, and surface temperatures can vary greatly.",
    orbDef: "Mars takes about 687 Earth days to complete one orbit around the Sun. A day on Mars is similar to an Earth day, lasting about 24.6 hours. However, Mars’ year is nearly twice as long as Earth’s.",
    expDef: "NASA’s Curiosity and Perseverance rovers are actively exploring Mars, searching for signs of ancient water and life. The InSight mission is studying Mars’ internal structure. Mars is a key target for future space exploration, including human missions."
  },
  "h970": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars, the fourth planet from the Sun, is known as the Red Planet due to its reddish appearance. It is smaller than Earth and has two small moons, Phobos and Deimos.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars has a rocky surface that is rich in iron oxide, giving the planet its characteristic red color. The planet’s surface features massive volcanoes, deep valleys, and impact craters. Olympus Mons, the largest volcano in the solar system, is located on Mars.",
    atmDef: "Mars has a thin atmosphere made primarily of carbon dioxide, with traces of nitrogen and argon. The thin atmosphere results in extreme temperatures and frequent dust storms. Mars experiences large temperature fluctuations between day and night.",
    orbDef: "Mars takes 687 Earth days to orbit the Sun. A day on Mars, or a sol, lasts about 24.6 hours, making it slightly longer than an Earth day. However, Mars' year is nearly twice as long as Earth's.",
    expDef: "NASA’s Curiosity and Perseverance rovers are currently exploring Mars’ surface, studying its geology and searching for signs of ancient life. The InSight mission is investigating the planet’s internal structure, and future missions are planned to bring samples back to Earth."
  },
  "h1010": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars is the fourth planet from the Sun and is often called the Red Planet because of its reddish color. It has two small moons and features giant volcanoes, deep valleys, and large impact craters.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars has a rocky surface covered in red soil that contains iron oxide (rust). The planet has many large volcanoes, deep valleys, and craters from impacts. Olympus Mons, the tallest volcano in the solar system, is located on Mars. The planet also has two small moons, Phobos and Deimos.",
    atmDef: "Mars’ atmosphere is thin and mostly made of carbon dioxide, with small amounts of nitrogen and argon. The thin atmosphere makes Mars cold and dry, and the planet experiences extreme temperatures and frequent dust storms.",
    orbDef: "Mars takes about 687 Earth days to orbit the Sun. A day on Mars is 24.6 hours long, which is only slightly longer than a day on Earth, but a year on Mars is nearly twice as long as a year on Earth.",
    expDef: "NASA’s Curiosity and Perseverance rovers are currently exploring Mars to study its surface and search for signs of ancient life. The InSight mission is studying Mars’ interior, and future missions are planned to return samples from Mars to Earth."
  },
  "h1050": {
    name: "Mars",
    type: "Terrestrial planet",
    size: "Radius = 3,390 km  Mass 6.39 × 10²³ kg",
    moons: "2 (Phobos, Deimos)",
    orbPer: "1 day = 24.6 Earth hours",
    summary: "Mars, the fourth planet from the Sun, is often referred to as the Red Planet due to its reddish appearance. It has two small moons, Phobos and Deimos, and its surface is marked by large volcanoes, deep valleys, and numerous impact craters.",
    planetTexture: "marsTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0xff4500",
    geoDef: "Mars, the Red Planet, is a terrestrial planet with a rocky surface rich in iron oxide, which gives it its red color. The planet is home to the largest volcano in the solar system, Olympus Mons, and has vast canyons, valleys, and impact craters across its surface. Mars has two small moons, Phobos and Deimos.",
    atmDef: "Mars has a thin atmosphere composed mainly of carbon dioxide, with traces of nitrogen and argon. The thin atmosphere means the planet is cold, and its surface experiences extreme temperature variations. Dust storms are common on Mars and can last for months, covering the entire planet in dust.",
    orbDef: "Mars takes 687 Earth days to complete one orbit around the Sun, and a day on Mars, called a sol, lasts about 24.6 Earth hours. While a day on Mars is only slightly longer than a day on Earth, a year on Mars is nearly twice as long as a year on Earth.",
    expDef: "NASA’s Curiosity and Perseverance rovers are currently exploring Mars’ surface, searching for signs of ancient life and studying the planet’s geology. The InSight mission is investigating the planet’s internal structure, and future missions are planned to bring samples back to Earth for further study."
  }
};

export const PlanetMars = () => {
  // console.log(MercuryLevels)

  return (
    <>
      {/* Pass planetData based on the selected reading level to PlanetDefault */}
      <PlanetDefault planetDatas={MarsLevels} />
    </>
  );
};