import React, { useRef } from "react";
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
  Grid,
  Paper,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PlanetInfoLabels } from "../Sub-Components/planet-info-labels";

export const PlanetDefault = ({ planet }) => {
  return (
    <>
      <PageLayout />
      <div className="canvasScreen">
        <Canvas id="canvas" width={800} height={600} domEvents={false}>
          <PlanetSphere
            planetTexture={planet.planetTexture}
            radiant={planet.radiant}
            radiantIntensity={planet.radiantIntensity}
            ringTexture={planet.ringTexture}
            hasRing={planet.hasRing}
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
      <PlanetInfoLabels/>
      <div className="info-rect">
        <Box sx={{ height: "51vh" }} className="top-info">
          <Grid container spacing={2} sx={{top: '5%'}}>
            <Grid size={4}>
              {planet.name}
            </Grid>
            <Grid size={4}>
              {planet.size}
            </Grid>
            <Grid size={4}>
              {planet.moons}
            </Grid>
            <Grid size={4}>
              {planet.daysInYear}
            </Grid>
          </Grid>
        </Box>
        <Accordion
          sx={{ fontSize: "3vh" }}
          className="accordion"
          variant="outlined"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{}}
          >
            Geology and Composition
          </AccordionSummary>
          <AccordionDetails>{planet.geoDef}</AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ fontSize: "3vh" }}
          className="accordion"
          variant="outlined"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{}}
          >
            Atmosphere and Climate
          </AccordionSummary>
          <AccordionDetails>{planet.atmDef}</AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ fontSize: "3vh" }}
          className="accordion"
          variant="outlined"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{}}
          >
            Orbital Characteristics
          </AccordionSummary>
          <AccordionDetails>{planet.orbDef}</AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ fontSize: "3vh" }}
          className="accordion"
          variant="outlined"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{}}
          >
            Exploration and Research
          </AccordionSummary>
          <AccordionDetails>{planet.expDef}</AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

const PlanetSphere = ({ planetTexture, radiant, radiantIntensity }) => {
  const { camera } = useThree();
  const texture = useTexture(planetTexture);
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.0005;
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
          emissive={new THREE.Color(radiant)} // format: 0x000000
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
