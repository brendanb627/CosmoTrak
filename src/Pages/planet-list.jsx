import { PageLayout } from "../Components/sidebar";
import React, { useRef, useState, useEffect } from "react";
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
  Divider,
  Button,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { PlanetName } from "../Sub-Components/planet-name";

export const PlanetList = () => {
  const [shiftPos, setShiftPos] = useState(0.2);
  const [move, setMove] = useState(0);

  const handleShiftLeft = async () => {
    if (shiftPos > -120) {
      setShiftPos(shiftPos - 20);
      console.log(move);
      setMove(move + 1);
    }
  };
  const handleShiftRight = async () => {
    if (shiftPos < 0) {
      setShiftPos(shiftPos + 20);
      console.log(move);
      setMove(move - 1);
    }
  };

  return (
    <>
      <PageLayout />
      <div className="canvasScreen">
        <Canvas id="canvas" width={800} height={600} domEvents={false}>
          <PlanetSphere
            planetTexture={"mercuryTexture.webp"}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            location={[shiftPos, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={"venusTexture.webp"}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            location={[shiftPos + 20, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={"earthTexture.jpg"}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            location={[shiftPos + 40, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={"marsTexture.webp"}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            location={[shiftPos + 60, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={"jupiterTexture.webp"}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            location={[shiftPos + 80, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={"saturnTexture.webp"}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            location={[shiftPos + 100, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={"uranusTexture.webp"}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            location={[shiftPos + 120, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={"neptuneTexture.webp"}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            location={[shiftPos + 140, -4.6, -1.4]} // update the location with the shift state
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
      <div className="planet-buttons">
        {move < 7 && (
          <Button
            variant="contained"
            onClick={handleShiftLeft}
            sx={{
              marginLeft: "10px",
              color: "white",
              backgroundColor: "rgb(60, 60, 60)",
            }}
          >
            <KeyboardArrowLeftIcon />
          </Button>
        )}
        {move > 0 && (
          <Button
            variant="contained"
            onClick={handleShiftRight}
            sx={{
              marginLeft: "10px",
              color: "white",
              backgroundColor: "rgb(60, 60, 60)",
            }}
          >
            <KeyboardArrowRightIcon color="white" />
          </Button>
        )}
        
      </div>
      {move == 0 && <PlanetName name={'mercury'} link={'/mercury'}/>}
      {move == 1 && <PlanetName name={'venus'} link={'/venus'}/>}
      {move == 2 && <PlanetName name={'earth'} link={'/earth'}/>}
      {move == 3 && <PlanetName name={'mars'} link={'/mars'}/>}
      {move == 4 && <PlanetName name={'jupiter'} link={'/jupiter'}/>}
      {move == 5 && <PlanetName name={'saturn'} link={'/saturn'}/>}
      {move == 6 && <PlanetName name={'uranus'} link={'/uranus'}/>}
      {move == 7 && <PlanetName name={'neptune'} link={'/neptune'}/>}
    </>
  );
};

const PlanetSphere = ({
  planetTexture,
  radiant,
  radiantIntensity,
  location,
}) => {
  const { camera } = useThree();
  const texture = useTexture(planetTexture);
  const texture2 = useTexture("venusTexture.webp");
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.0005;
  });

  const spotlight = useRef();
  useFrame(() => {
    spotlight.current.position.set(0, 5, -5);
    spotlight.current.target = ref.current;
  });

  return (
    <>
      <mesh ref={ref} position={location} rotation={[0, 0, 90]}>
        <sphereGeometry attach="geometry" args={[4, 100, 100]} uv={true} />
        <meshPhysicalMaterial
          attach="material"
          map={texture2}
          emissive={new THREE.Color(radiant)} // format: 0x000000
          emissiveIntensity={radiantIntensity}
        />
        <sphereGeometry attach="geometry" args={[4, 80, 80]} uv={true} />
        <meshPhysicalMaterial attach="material" map={texture} />
        {useFrame(() => {
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
