import { PageLayout } from '../Components/sidebar'
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
  Button
} from "@mui/material";

export const PlanetList = () => {
  const [shift, setShift] = useState(0); // add a state to track the shift; // add a state to track animation
  const [shiftLeft, setShiftLeft] = useState(false); // add a state to track the shift; // add a state to track animation
const [shiftPos, setShiftPos] = useState(0.2)
const [shiftLeftPos, setShiftLeftPos] = useState(0.2)
  const handleShift = async () => {
    await setShiftPos(shiftPos + 20)
    setShift(-1);
  };
  const handleLeftShift = async () => {
    await setShiftPos(shiftPos - 20)
    setShiftLeft(true);
  };
const fixedVal = -20.45

  return (
    <>
      <PageLayout />
      <div className="canvasScreen">
        <Canvas id="canvas" width={800} height={600} domEvents={false}>
          <PlanetSphere
            planetTexture={'mercuryTexture.webp'}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            setShift={setShift}
            shift={shift}
            shiftPos={shiftPos}
            location={[0.2, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={'venusTexture.webp'}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            setShift={setShift}
            shift={shift}
            location={[1 * fixedVal, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={'earthbeefy.jpg'}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            setShift={setShift}
            shift={shift}
            location={[2 * fixedVal, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={'marsTexture.webp'}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            setShift={setShift}
            shift={shift}
            location={[3 * fixedVal, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={'jupiterTexture.webp'}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            setShift={setShift}
            shift={shift}
            location={[4 * fixedVal, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={'saturnTexture.webp'}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            setShift={setShift}
            shift={shift}
            location={[5 * fixedVal, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={'uranusTexture.webp'}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            setShift={setShift}
            shift={shift}
            location={[6 * fixedVal, -4.6, -1.4]} // update the location with the shift state
          />
          <PlanetSphere
            planetTexture={'neptuneTexture.webp'}
            radiant={true}
            radiantIntensity={0.001}
            ringTexture={null}
            hasRing={false}
            setShift={setShift}
            shift={shift}
            location={[7 * fixedVal, -4.6, -1.4]} // update the location with the shift state
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
      <Button onClick={handleShift}>Shift Right</Button>
    </>
  );
};

const PlanetSphere = ({ planetTexture, radiant, radiantIntensity, location, setShift, shift, shiftPos, shiftLeftPos, setShiftLeft, shiftLeft }) => {
  const { camera } = useThree();
  const texture = useTexture(planetTexture);
  const texture2 = useTexture('venusTexture.webp');
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.0005;
    if (shift === 1) {
        ref.current.position.x += 0.3
        if (ref.current.position.x >= shiftPos) {
            setShift(0);
            ref.current.position.x = shiftPos - 0.2
        }
    }
    if (shift === -1) {
        ref.current.position.x -= 0.3
        if (ref.current.position.x <= shiftLeftPos) {
            setShift(0);
            ref.current.position.x = shiftLeftPos + 0.2
        }
    }
  });

  const spotlight = useRef();
  useFrame(() => {
    spotlight.current.position.set(0,5, -5);
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
        <meshPhysicalMaterial
          attach="material"
          map={texture}
        />
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