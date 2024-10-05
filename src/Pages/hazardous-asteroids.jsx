import React, { useEffect, useState, useContext, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import axios from "axios";
import { Typography } from "@mui/material";
import { Html, useGLTF } from "@react-three/drei"
import itokawaModel from "../Sub-Components/Itokawa_1_1.glb";

const AsteroidModel = ({ position, scale }) => {
  // Load the GLTF model
  const { scene } = useGLTF(itokawaModel);

  return (
    <primitive
      object={scene}
      position={position}
      scale={scale}
    />
  );
};
// Camera controller setup remains the same
const CameraController = ({ children }) => {
  const { camera, gl } = useThree();
  const [size, setSize] = useState(0.1);
  const controls = useRef();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 2;
    controls.maxDistance = 4000;
    camera.near = 0.1;
    camera.far = 10000;
    camera.updateProjectionMatrix();
    const handleCameraChange = () => {
      const distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
      setSize(0); // Update size based on camera distance
    };
    camera.addEventListener("change", handleCameraChange);
    return () => {
      camera.removeEventListener("change", handleCameraChange);
      controls.dispose();
    };
  }, [camera]);

  return <sizeContext.Provider value={size}>{children}</sizeContext.Provider>;
};

const sizeContext = React.createContext();

const AsteroidSystem = () => {
  const { camera, gl } = useThree();
  const scale = 2000000;
  const size = useContext(sizeContext);
  const [asteroidData, setAsteroidData] = useState([]);

  const fetchAsteroidData = async () => {
    try {
      const startDate = '2024-09-01'; // Set your start date
      const start = new Date(startDate);
      
      // Calculate end date by adding 7 days to start date
      const end = new Date(start);
      end.setDate(start.getDate() + 6); // Add 6 days to the start date (max 7-day range)
      
      const formattedEndDate = end.toISOString().split('T')[0]; // Format end date as YYYY-MM-DD
      
      const apiKey = "nVohxi2TGocD1nfEw7mOq561npMRvFSiX70Lqr0n"      ; // Replace with your actual API key
  
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${formattedEndDate}&api_key=${apiKey}`
      );

      //https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-09-01&end_date=2024-09-07&api_key=nVohxi2TGocD1nfEw7mOq561npMRvFSiX70Lqr0n
      
      console.log(startDate)
      console.log(formattedEndDate)
      const neos = response.data.near_earth_objects;
      const allAsteroids = [];
  
      // Loop over each date in the response and aggregate asteroid data
      Object.keys(neos).forEach((date) => {
        allAsteroids.push(...neos[date]);
      });
  
      setAsteroidData(allAsteroids);
    } catch (error) {
      console.error("Error fetching asteroid data:", error);
    }
  };
  

  useEffect(() => {
    fetchAsteroidData();
  }, []);

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="yellow" />
      </mesh>

      {asteroidData.map((asteroid, index) => (
        <AsteroidModel
        key={index}
        position={[
          parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers) / scale,
          parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_second) / scale,
          0,
        ]}
        scale={[0.01, 0.01, 0.01]} // Reduce the scale significantly
      />
      ))}
    </>
  );
};

export function Asteroids() {
  return (
    <>
      <Canvas color="black" width={800} height={600}>
        <CameraController>
          <ambientLight />
          <AsteroidSystem />
        </CameraController>
      </Canvas>
    </>
  );
}
