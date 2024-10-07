import React, { useState, useEffect } from "react";
import { PlanetDefault } from "../Components/planet-default";

// Example planet data for different reading levels
const MercuryLevels = {
    "hBR": {
      name: "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and is close to the sun. It is almost the size of Earth’s moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury has many craters on its surface.",
      "atmDef": "Mercury has a thin layer of gases.",
      "orbDef": "Mercury takes 88 days to go around the Sun.",
      "expDef": "NASA sent spacecraft to study Mercury."
    },
    "h190": {
      "name": "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury has lots of craters. It has a big core made of iron.",
      "atmDef": "Mercury’s atmosphere is very thin. It gets very hot and very cold.",
      "orbDef": "Mercury goes around the Sun in 88 days. It spins slowly, making its days long.",
      "expDef": "NASA sent spacecraft to study Mercury, like Mariner 10 and MESSENGER."
    },
    "h420": {
      "name": "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury is a small rocky planet with lots of craters. It has a big core made of iron.",
      "atmDef": "Mercury’s atmosphere is very thin. It gets very hot during the day and very cold at night.",
      "orbDef": "Mercury goes around the Sun in 88 days. Its days are very long because it spins slowly.",
      "expDef": "NASA sent spacecraft like Mariner 10 and MESSENGER to study Mercury."
    },
    "h520": {
      "name": "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury is a rocky planet with many craters. It has a large core made of iron. As it cooled, the surface shrank, forming cliffs.",
      "atmDef": "Mercury has a very thin layer of gases called an exosphere. It gets very hot in the daytime and very cold at night.",
      "orbDef": "Mercury takes 88 days to orbit the Sun, but its days are 176 Earth days long because of how slowly it spins.",
      "expDef": "NASA sent spacecraft like Mariner 10 and MESSENGER to study Mercury. Another spacecraft, BepiColombo, is on its way to the planet now."
    },
    "h740": {
      "name": "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury is a small, rocky planet with many craters. It has a large core made of iron, making it very dense and heavy. When it cooled, the surface shrank and formed cliffs.",
      "atmDef": "Mercury’s atmosphere is very thin and called an exosphere. It is made of gases like oxygen and sodium. Because it’s so thin, the planet gets very hot in the day and very cold at night.",
      "orbDef": "Mercury takes 88 days to go around the Sun, but its days are long—176 Earth days—because it spins slowly. Its orbit is oval-shaped, which makes the Sun appear to move in strange ways.",
      "expDef": "NASA has sent spacecraft to study Mercury, including Mariner 10 and MESSENGER. A new mission, BepiColombo, is heading to the planet and will arrive soon."
    },
    "h830": {
      "name": "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury is a rocky planet that has many craters from impacts. Its core is made mostly of iron, making it very heavy for its size. As Mercury cooled, its surface shrank and formed big cliffs.",
      "atmDef": "Mercury’s atmosphere is called an exosphere. It is made of gases like oxygen and sodium, but it is very thin. Because of this, the planet gets very hot in the day and very cold at night.",
      "orbDef": "Mercury takes 88 Earth days to go around the Sun, but its days are long—176 Earth days—because it spins slowly. Its orbit is not a perfect circle, and the way the Sun looks in the sky is affected by this oval-shaped orbit.",
      "expDef": "NASA has studied Mercury with two missions: Mariner 10 and MESSENGER. A new mission, called BepiColombo, is heading to Mercury now and will provide more information about the planet."
    },
    "h925": {
      "name": "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury is covered in craters, which shows it has been hit by many space objects. It has a large core mostly made of iron, which makes Mercury very dense. As the planet cooled, its surface shrank, and big cliffs formed.",
      "atmDef": "Mercury has a very thin atmosphere, called an exosphere, made of gases like oxygen and sodium. The atmosphere isn’t strong enough to hold in heat, so the planet becomes extremely hot during the day and very cold at night.",
      "orbDef": "Mercury goes around the Sun in 88 Earth days, making it the fastest planet in the solar system. Its days are long, though, as one full rotation takes 176 Earth days. The planet’s orbit is tilted and oval-shaped, which makes the Sun behave in unusual ways in Mercury’s sky.",
      "expDef": "NASA has sent two important missions to study Mercury: Mariner 10 and MESSENGER. The upcoming BepiColombo mission is on its way to gather more data about Mercury's surface, atmosphere, and other characteristics when it arrives."
    },
    h970: {
      "name": "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury is a rocky planet with many craters. Its surface shows a long history of impacts from asteroids and comets. The planet's core is mostly iron, which makes it very dense and heavy. When Mercury cooled down, its surface shrank, and large cliffs formed as a result of this contraction.",
      "atmDef": "Mercury’s atmosphere is extremely thin and mostly made of oxygen and sodium. It’s so thin that it can’t trap heat, causing Mercury to have the biggest temperature changes in the solar system. During the day, it gets extremely hot, and at night, it becomes extremely cold.",
      "orbDef": "Mercury travels around the Sun in an oval-shaped path. It completes one orbit in just 88 Earth days, but because it spins slowly, one full day on Mercury lasts 176 Earth days. Its orbit is tilted, making the Sun move in strange ways across its sky, like showing two sunrises in one day at certain times of the year.",
      "expDef": "Even though Mercury is hard to study because it's close to the Sun, NASA's Mariner 10 and MESSENGER missions provided us with lots of information about the planet. BepiColombo, a European-Japanese mission, is on its way to Mercury now and will continue exploring the planet when it arrives in 2025."
    },
    h1010: {
      name: "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury is a small planet with a rocky surface full of craters. These craters are from asteroids and comets hitting it over billions of years. Mercury’s core is made mostly of iron, making it one of the densest planets in the solar system. As it cooled over time, the planet’s surface shrank and created huge cliffs called scarps.",
      "atmDef": "Mercury’s atmosphere, known as an exosphere, is incredibly thin. It is made up of oxygen, hydrogen, and other gases that come from the solar wind and impacts from space rocks. The planet has huge temperature swings, reaching up to 800°F during the day and dropping to -290°F at night. This extreme heat and cold are due to its thin atmosphere, which can't trap heat.",
      "orbDef": "Mercury orbits the Sun in an oval shape, and it’s the fastest planet in the solar system, completing an orbit in 88 days. However, a full rotation on its axis takes 59 Earth days, making a day on Mercury (from sunrise to sunrise) last 176 Earth days. Mercury’s tilted orbit causes some unusual sunrises and sunsets, like the 'double sunrise' that happens at certain times of the year.",
      "expDef": "Mercury has been studied by a few space missions despite its closeness to the Sun. NASA's Mariner 10 was the first to visit Mercury, sending back images of its cratered surface in the 1970s. Later, the MESSENGER mission orbited Mercury from 2004 to 2015, collecting valuable data about the planet. A new mission, BepiColombo, is on its way and will arrive in 2025 to continue the study of Mercury's surface and atmosphere."
    },
    h1050: {
      name: "Mercury",
      "type": "Terrestrial planet",
      "size": "Radius = 2,440  Mass 3.30 × 10²³ kg",
      "moons": "None",
      "orbPer": "1 day = 59 Earth Days",
      "summary": "Mercury is the smallest planet in our solar system and the closest to the sun. It is only slightly larger than the earth's moon.",
      "planetTexture": "mercuryTexture.webp",
      "radiantIntensity": "0.001",
      "radiant": "0x0000ff",
      "geoDef": "Mercury, the smallest planet in our solar system, has a rocky composition similar to Earth's moon. Its surface is heavily cratered, evidence of a long history of impacts. Beneath its thin crust lies a large, iron-rich core that accounts for about 85% of the planet's radius. This makes Mercury incredibly dense, with only Earth's density surpassing it. The planet's thin mantle and crust show little tectonic activity, and features such as cliffs, or 'scarps,' suggest that Mercury's core has cooled and contracted over time, causing the surface to wrinkle.",
      "atmDef": "Mercury has an extremely thin atmosphere, known as an exosphere, which is primarily composed of oxygen, sodium, hydrogen, helium, and potassium. This exosphere is not stable and is constantly replenished by solar wind and micrometeoroid impacts. Due to the lack of a substantial atmosphere to trap heat, Mercury experiences extreme temperature variations. During the day, surface temperatures can soar to 800°F (430°C), while at night, they can plummet to as low as -290°F (-180°C). These drastic changes make Mercury one of the most inhospitable planets in the solar system.",
      "orbDef": "Mercury has an elliptical orbit, making it the closest planet to the Sun. It takes 88 Earth days to complete one orbit, but its day is surprisingly long. A single rotation on its axis takes about 59 Earth days, and because of this slow spin, a day on Mercury (from sunrise to sunrise) lasts roughly 176 Earth days. Mercury’s orbit is also tilted, contributing to a phenomenon known as a 'double sunrise' at certain points in its year. Its proximity to the Sun and orbital eccentricity create unique patterns in the way the Sun appears to move across its sky.",
      "expDef": "Mercury's proximity to the Sun makes it a challenging target for spacecraft, but there have been several successful missions. NASA's Mariner 10 was the first mission to fly by Mercury in the 1970s, capturing the first close-up images of its surface. More recently, the MESSENGER mission (2004-2015) orbited Mercury, providing detailed data on its composition, geology, and magnetic field. Currently, the European-Japanese mission BepiColombo is on its way to study Mercury further, with a scheduled arrival in 2025. These missions have expanded our understanding of Mercury’s extreme environment, revealing the complexities of a planet so close to the Sun."
    }
  }
  

// Parent component to manage reading levels
export const PlanetMercury = () => {
  // console.log(MercuryLevels)

  return (
    <>
      {/* Pass planetData based on the selected reading level to PlanetDefault */}
      <PlanetDefault planetDatas={MercuryLevels} />
    </>
  );
};
