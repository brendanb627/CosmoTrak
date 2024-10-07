import React from "react";
import { PlanetDefault } from "../Components/planet-default";

const EarthLevels = {
  "hBR": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth is the third planet from the Sun and the only known place with life.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth has land and water. It has mountains and oceans.",
    atmDef: "Earth's atmosphere has oxygen and keeps us safe.",
    orbDef: "Earth takes 365 days to go around the Sun.",
    expDef: "People have been studying Earth for a long time."
  },
  "h190": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth is the third planet from the Sun and the only planet known to support life.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth has many landforms like mountains and oceans.",
    atmDef: "Earth’s atmosphere has oxygen and protects life by blocking harmful sunlight.",
    orbDef: "Earth takes 365 days to orbit the Sun and spins every 24 hours.",
    expDef: "Humans have been studying Earth and its environment for thousands of years."
  },
  "h420": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth is the third planet from the Sun and the only planet that can support life.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth has many types of land and water, including mountains, valleys, oceans, and rivers.",
    atmDef: "Earth’s atmosphere contains oxygen and helps protect life by blocking harmful radiation from the Sun.",
    orbDef: "Earth orbits the Sun in 365 days, and its day lasts 24 hours.",
    expDef: "Earth is continuously studied by scientists and satellites to learn more about its climate and changes."
  },
  "h520": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth is the third planet from the Sun and the only one known to support life.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth has mountains, valleys, and bodies of water like oceans and rivers. Its surface is constantly changing due to natural forces.",
    atmDef: "Earth’s atmosphere is made up of several layers and contains gases like oxygen, which are essential for life. It also protects us from harmful solar radiation.",
    orbDef: "Earth takes 365.25 days to complete one orbit around the Sun, which is why we have leap years. It spins on its axis once every 24 hours, giving us day and night.",
    expDef: "Earth has been explored extensively, with satellites and scientists studying its surface, atmosphere, and environmental changes."
  },
  "h740": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth is the third planet from the Sun and the only known planet that supports life.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth has a variety of landforms including mountains, valleys, oceans, rivers, and deserts. The planet's surface is shaped by plate tectonics and erosion.",
    atmDef: "Earth’s atmosphere is a mix of nitrogen, oxygen, and other gases. It acts as a shield against harmful ultraviolet radiation and helps regulate the planet's climate.",
    orbDef: "Earth takes 365.25 days to complete its orbit around the Sun, and its day lasts 24 hours. The tilt of Earth’s axis causes the seasons.",
    expDef: "Earth has been studied for centuries by scientists and astronauts. Modern technology like satellites and space probes provide us with detailed information about the planet."
  },
  "h830": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth is the third planet from the Sun and the only planet known to support life. It has a diverse environment with land, oceans, and a protective atmosphere.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth’s surface is divided into continents and oceans, with a variety of ecosystems including forests, deserts, and mountains. The surface is constantly shaped by tectonic movements, volcanic activity, and erosion.",
    atmDef: "The Earth’s atmosphere is composed of nitrogen (78%), oxygen (21%), and other gases. It provides protection from solar radiation and helps maintain a stable climate by trapping heat from the Sun.",
    orbDef: "Earth orbits the Sun every 365.25 days, creating the seasons as its axis is tilted. The planet spins on its axis every 24 hours, giving us day and night.",
    expDef: "Earth has been explored both from its surface and from space. Satellites continuously observe the planet, and scientific research provides insight into climate changes and natural processes."
  },
  "h925": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth, the third planet from the Sun, is unique in its ability to support life. Its atmosphere, oceans, and landmasses create a diverse environment for plants, animals, and humans.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth has a solid, rocky surface with diverse landforms such as mountains, valleys, and plains. Its structure is constantly reshaped by tectonic activity and erosion caused by wind and water.",
    atmDef: "Earth’s atmosphere is composed mainly of nitrogen and oxygen, providing the essential gases for life. It also plays a crucial role in climate regulation by trapping heat and protecting life from harmful ultraviolet rays.",
    orbDef: "Earth completes one orbit around the Sun in 365.25 days, causing the seasons due to the planet’s axial tilt. It rotates once every 24 hours, giving us the cycle of day and night.",
    expDef: "Earth has been studied by countless scientists, with satellites providing continuous observation. The study of Earth's climate, geology, and atmosphere helps us understand its past and predict future changes."
  },
  "h970": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth is the third planet from the Sun and the only one in the solar system known to support life. It has a diverse climate and rich ecosystems that range from the polar ice caps to the tropical rainforests.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth’s surface is divided into large plates that shift over time due to tectonic forces. These movements cause earthquakes, volcanoes, and the formation of mountains. Its landmasses are surrounded by vast oceans, which regulate temperature and provide habitat for marine life.",
    atmDef: "Earth’s atmosphere is primarily composed of nitrogen and oxygen, with smaller amounts of argon, carbon dioxide, and other gases. This mixture allows life to thrive while also protecting the planet from harmful solar radiation.",
    orbDef: "Earth’s orbit around the Sun takes 365.25 days. Due to its tilted axis, this orbit causes the changing seasons. Earth also rotates once every 24 hours, giving us a consistent pattern of day and night.",
    expDef: "Earth has been extensively studied through satellite technology, climate research, and geological exploration. Its unique ability to support life has made it the focus of scientific study for centuries."
  },
  "h1010": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth is the third planet from the Sun and the only one in the solar system that supports life. It has a variety of ecosystems and climates that allow for a wide range of species.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth’s surface consists of a mix of land and water, with 71% of the planet covered by oceans. Its structure includes a solid inner core, a liquid outer core, a mantle, and a crust. Plate tectonics play a major role in shaping Earth’s surface.",
    atmDef: "Earth’s atmosphere is a protective layer composed primarily of nitrogen and oxygen, with trace amounts of carbon dioxide and other gases. It not only supports life by providing breathable air but also shields the planet from harmful solar radiation and helps regulate the climate.",
    orbDef: "Earth takes 365.25 days to orbit the Sun, and due to its axial tilt, this orbit results in the changing seasons. The planet rotates on its axis every 24 hours, creating day and night.",
    expDef: "Earth has been the subject of study for millennia, with modern technology providing unprecedented insights into its climate, geology, and ecosystems. Satellites continuously monitor Earth, helping scientists track environmental changes and predict future trends."
  },
  "h1050": {
    name: "Earth",
    type: "Terrestrial planet",
    size: "Radius = 6,371 km  Mass 5.97 × 10²⁴ kg",
    moons: "1 (The Moon)",
    orbPer: "1 day = 24 hours",
    summary: "Earth, the third planet from the Sun, is a unique planet due to its ability to support life. It has a variety of ecosystems and a dynamic climate, with diverse landscapes ranging from deserts to forests to polar ice caps.",
    planetTexture: "earthTexture.jpg",
    radiantIntensity: "0.001",
    radiant: "0x0000ff",
    geoDef: "Earth has a solid crust that is constantly being reshaped by plate tectonics, volcanic activity, and erosion. It has a variety of landforms, including mountains, valleys, and plains, and is home to a wide range of ecosystems. The planet’s oceans cover about 71% of its surface and play a crucial role in regulating temperature and supporting marine life.",
    atmDef: "Earth’s atmosphere consists of nitrogen (78%), oxygen (21%), and traces of other gases. This mixture not only allows life to thrive but also protects the planet from harmful solar radiation and helps maintain a stable climate by trapping heat.",
    orbDef: "Earth completes one orbit around the Sun in 365.25 days, creating the cycle of seasons due to the planet’s axial tilt. The Earth rotates on its axis every 24 hours, resulting in the day-night cycle.",
    expDef: "Earth is the most studied planet in the solar system, with satellites and space probes constantly monitoring its surface, atmosphere, and climate. Scientific research on Earth has greatly advanced our understanding of weather patterns, geological activity, and the environmental impact of human activity."
  }
};

export const PlanetEarth = () => {
  // console.log(MercuryLevels)

  return (
    <>
      {/* Pass planetData based on the selected reading level to PlanetDefault */}
      <PlanetDefault planetDatas={EarthLevels} />
    </>
  );
};

