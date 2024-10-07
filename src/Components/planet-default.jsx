import React, { useRef, useState, useEffect } from "react";
import { PageLayout } from "./sidebar";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import { Bloom } from "@react-three/postprocessing";
import { KernelSize, Resolution } from "postprocessing";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PlanetInfoLabels } from "../Sub-Components/planet-info-labels";
import AWS from "aws-sdk";


const translate = new AWS.Translate();

const PlanetSphere = ({ planetTexture, radiant, radiantIntensity }) => {
  const { camera } = useThree();
  const texture = useTexture(planetTexture);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.0005; // Slow rotation
  });

  const spotlight = useRef();
  useFrame(() => {
    spotlight.current.position.set(0, 4.6, -6);
    spotlight.current.target = ref.current;
  });

  return (
    <>
      <mesh ref={ref} position={[0, -4.6, -1.4]} rotation={[0, 0, 90]}>
        <sphereGeometry attach="geometry" args={[4, 100, 100]} uv={true} />
        <meshPhysicalMaterial
          attach="material"
          map={texture}
          emissive={new THREE.Color(radiant)}
          emissiveIntensity={radiantIntensity}
        />
        {useFrame(() => {
          camera.fov = 30;
          camera.position.y = -1;
          camera.updateProjectionMatrix();
        })}
      </mesh>
      <spotLight
        ref={spotlight}
        castShadow
        intensity={1100}
        distance={30}
        angle={0.8}
        penumbra={2}
        decay={3.3}
      />
    </>
  );
};

// Main PlanetDefault component
export const PlanetDefault = ({planetDatas}) => {
  const [language, setLanguage] = useState("en");
  const [readingLevel, setReadingLevel] = useState("h1050"); 
  console.log(planetDatas[readingLevel])// Default reading level
  const planetData = (planetDatas[readingLevel]); // Retrieve planet data based on reading level
  console.log("pd = ",planetData)

  const [translatedName, setTranslatedName] = useState(planetData.name);
  const [translatedType, setTranslatedType] = useState(planetData.type);
  const [translatedGeoDef, setTranslatedGeoDef] = useState(planetData.geoDef);
  const [translatedAtmDef, setTranslatedAtmDef] = useState(planetData.atmDef);
  const [translatedOrbDef, setTranslatedOrbDef] = useState(planetData.orbDef);
  const [translatedExpDef, setTranslatedExpDef] = useState(planetData.expDef);
  const [translatedSummary, setTranslatedSummary] = useState(planetData.summary);
  const [planetDetailsSize, setPlanetDetailsSize] = useState("Size");
  const [planetDetailsMoons, setPlanetDetailsMoons] = useState("Moons");
  const [planetDetailsOrbital, setPlanetDetailsOrbital] = useState("Orbital Period");
  const [translatedSize, setTranslatedSize] = useState(planetData.size);
  const [translatedMoons, setTranslatedMoons] = useState(planetData.moons);
  const [translatedOrbPer, setTranslatedOrbPer] = useState(planetData.orbPer);
  const [geoTitle, setGeoTitle] = useState("Geology and Composition");
  const [atmTitle, setAtmTitle] = useState("Atmosphere and Climate");
  const [orbTitle, setOrbTitle] = useState("Orbital Characteristics");
  const [expTitle, setExpTitle] = useState("Exploration and Research");
  const [planetDetailsTitle, setPlanetDetailsTitle] = useState("Planet Details");

  const translateText = async (text, targetLanguage) => {
    const params = {
      Text: text,
      SourceLanguageCode: "en",
      TargetLanguageCode: targetLanguage,
    };
    const translation = await translate.translateText(params).promise();
    return translation.TranslatedText;
  };

  useEffect(() => {
    const translateAll = async () => {
      if (language !== "en") {
        setTranslatedName(await translateText(planetData.name, language));
        setTranslatedType(await translateText(planetData.type, language));
        setTranslatedSummary(await translateText(planetData.summary, language));
        setPlanetDetailsSize(await translateText("Size", language));
        setPlanetDetailsMoons(await translateText("Moons", language));
        setPlanetDetailsOrbital(await translateText("Orbital Period", language));
        setTranslatedSize(await translateText(planetData.size, language));
        setTranslatedMoons(await translateText(planetData.moons, language));
        setTranslatedOrbPer(await translateText(planetData.orbPer, language));
        setTranslatedGeoDef(await translateText(planetData.geoDef, language));
        setTranslatedAtmDef(await translateText(planetData.atmDef, language));
        setTranslatedOrbDef(await translateText(planetData.orbDef, language));
        setTranslatedExpDef(await translateText(planetData.expDef, language));
        setGeoTitle(await translateText("Geology and Composition", language));
        setAtmTitle(await translateText("Atmosphere and Climate", language));
        setOrbTitle(await translateText("Orbital Characteristics", language));
        setExpTitle(await translateText("Exploration and Research", language));
        setPlanetDetailsTitle(await translateText("Planet Details", language));
        
      } else {
        // Reset to English if no translation is needed
        setTranslatedName(planetData.name);
        setTranslatedType(planetData.type);
        setTranslatedSummary(planetData.summary);
        setPlanetDetailsSize("Size")
        setPlanetDetailsMoons("Moons")
        setPlanetDetailsOrbital("Orbital Period")
        setTranslatedSize(planetData.size);
        setTranslatedMoons(planetData.moons);
        setTranslatedOrbPer(planetData.orbPer);
        setTranslatedGeoDef(planetData.geoDef);
        setTranslatedAtmDef(planetData.atmDef);
        setTranslatedOrbDef(planetData.orbDef);
        setTranslatedExpDef(planetData.expDef);
        setGeoTitle("Geology and Composition");
        setAtmTitle("Atmosphere and Climate");
        setOrbTitle("Orbital Characteristics");
        setExpTitle("Exploration and Research");
        setPlanetDetailsTitle("Planet Details");
        
      }
    
    }
    translateAll();
  }, [language, readingLevel, planetData]);

  return (
    <>
      <PageLayout />

      {/* Planet rendering */}
      <div className="canvasScreen">
        <Canvas id="canvas" width={800} height={600} domEvents={false}>
          <PlanetSphere
            planetTexture={planetData.planetTexture}
            radiant={planetData.radiant}
            radiantIntensity={planetData.radiantIntensity}
          />
          <EffectComposer>
            <Bloom
              intensity={20.0}
              kernelSize={KernelSize.LARGE}
              luminanceThreshold={0}
              luminanceSmoothing={0.025}
              luminanceInfluence={0.8}
              mipmapBlur={false}
              resolutionX={Resolution.AUTO_SIZE}
              resolutionY={Resolution.AUTO_SIZE}
            />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Planet information */}
      {/* <PlanetInfoLabels /> */}

      <div className="info-rect">
        <Box sx={{ height: "22vh" }} className="top-info">
          <div className="name-sect">{translatedName}</div>
          <Divider />
          <div className="type-sect">{translatedType}</div>
        </Box>

        {/* Planet Details */}
        <Accordion sx={{ fontSize: "2.8vh" }} className="accordion" variant="outlined">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {planetDetailsTitle}
          </AccordionSummary>
          <AccordionDetails>
          <div className="sum-sect">{translatedSummary}</div>
          <Divider />
          <div className="size-sect">{planetDetailsSize}: {translatedSize}</div>
          <div className="moons-sect">{planetDetailsMoons}: {translatedMoons}</div>
          <div className="days-sect">{planetDetailsOrbital}: {translatedOrbPer}</div>
          </AccordionDetails>
        </Accordion>

        {/* Geology and Composition */}
        <Accordion sx={{ fontSize: "2.8vh" }} className="accordion" variant="outlined">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {geoTitle}
          </AccordionSummary>
          <AccordionDetails>{translatedGeoDef}</AccordionDetails>
        </Accordion>

        {/* Atmosphere and Climate */}
        <Accordion sx={{ fontSize: "2.8vh" }} className="accordion" variant="outlined">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {atmTitle}
          </AccordionSummary>
          <AccordionDetails>{translatedAtmDef}</AccordionDetails>
        </Accordion>

        {/* Orbital Characteristics */}
        <Accordion sx={{ fontSize: "2.8vh" }} className="accordion" variant="outlined">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {orbTitle}
          </AccordionSummary>
          <AccordionDetails>{translatedOrbDef}</AccordionDetails>
        </Accordion>

        {/* Exploration and Research */}
        <Accordion sx={{ fontSize: "2.8vh" }} className="accordion" variant="outlined">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {expTitle}
          </AccordionSummary>
          <AccordionDetails>{translatedExpDef}</AccordionDetails>
        </Accordion>

        {/* Language Selector */}
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          sx={{ color: "#ffffff", backgroundColor: "#2c2c2c", marginTop: "10px" }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="fr">French</MenuItem>
          <MenuItem value="de">German</MenuItem>
          <MenuItem value="zh">Chinese</MenuItem>
          <MenuItem value="ja">Japanese</MenuItem>
          <MenuItem value="ko">Korean</MenuItem>
          <MenuItem value="ru">Russian</MenuItem>
        </Select>

        {/* Reading Level Selector */}
        <Select
          value={readingLevel}
          onChange={(e) => setReadingLevel(e.target.value)}
          sx={{ color: "#ffffff", backgroundColor: "#2c2c2c", marginTop: "10px" }}
        >
          <MenuItem value="h1050">Reading Level 1050</MenuItem>
          <MenuItem value="h1010">Reading Level 1010</MenuItem>
          <MenuItem value="h970">Reading Level 970</MenuItem>
          <MenuItem value="h925">Reading Level 925</MenuItem>
          <MenuItem value="h830">Reading Level 830</MenuItem>
          <MenuItem value="h740">Reading Level 740</MenuItem>
          <MenuItem value="h520">Reading Level 520</MenuItem>
          <MenuItem value="h420">Reading Level 420</MenuItem>
          <MenuItem value="h190">Reading Level 190</MenuItem>
          <MenuItem value="hBR">Reading Level BR</MenuItem>
          {/* Add more reading levels as needed */}
        </Select>
      </div>
    </>
  );
};
