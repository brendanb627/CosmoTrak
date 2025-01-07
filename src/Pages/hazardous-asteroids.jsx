// hazardous asteroids

import React, { useEffect, useState } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import axios from "axios";
import { AsteroidCard } from "../Sub-Components/asteroid-info-box";
import { AsteroidLabel } from "../Sub-Components/asteroid-label";
import { PageLayout } from "../Components/sidebar";
import { PlanetLabel } from "../Sub-Components/planet-label";

// Helper function to calculate distance traveled based on velocity and time difference
const calculateDistanceTraveled = (velocityKms, timeDiffSeconds) => {
  return velocityKms * timeDiffSeconds; // Distance in kilometers
};

// Earth Component
const Earth = ({ scale }) => {
  const texture = useLoader(THREE.TextureLoader, "earthTexture.jpg"); // Log the current scale for debugging

  console.log("Earth scale:", scale);

  return (
    <>
      <mesh position={[-90, 0, 0]} scale={[scale, scale, scale]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

// Asteroid Component
const Asteroid = ({ position, scale, name }) => {
  return <AsteroidLabel position={position} scale={scale} name={name} />;
};

// CameraController to handle zooming
const CameraController = ({ distance }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (distance) {
      // Zoom based on the distance between the Earth and the asteroid
      const cameraDistance = Math.max(100, distance * 1.5); // Ensure a minimum distance for the camera
      console.log("camerafov = ", camera.fov);
      camera.fov = 60; // Keep the camera at a fixed Z position but adjust the zoom
      camera.position.set(0, 0, 150); // Fixed camera Z position
      camera.zoom = Math.max(1, Math.min(5, 500 / distance)); // Adjust zoom based on the distance
      camera.updateProjectionMatrix();
    }
  }, [distance, camera]);

  return null;
};

// Asteroid System to render the Earth and the asteroid
const AsteroidSystem = ({ currentAsteroid, distance }) => {
  const asteroidPosition = [100, 0, 0]; // Fixed position for the asteroid on the right // Debug: Log distance and current Earth scale

  console.log("Current distance:", distance);
  const [earthCoords, setEarthCoords] = useState({
    x: -45,
    y: 0,
    z: 0,
  });

  const earthScale = (12742 / distance) * 1250; // Responsive scale
  const minScale = 1.75;

  if (earthScale < minScale) {
    return (
      <>
        <PlanetLabel
          position={earthCoords}
          scale={0.5}
          color={"green"}
          name={"Earth"}
          link={"/earth"}
          textMargin={"145px"}
        />
        {/* Adjust the scale dynamically */}
        {currentAsteroid && (
          <Asteroid
            position={asteroidPosition}
            scale={[0.06, 0.06, 0.06]}
            name={currentAsteroid.name}
          />
        )}
        <CameraController distance={distance} />
      </>
    );
  } else {
    return (
      <>
        <Earth scale={earthScale} />
        {/* Adjust the scale dynamically */}
        {currentAsteroid && (
          <Asteroid
            position={asteroidPosition}
            scale={[0.06, 0.06, 0.06]}
            name={currentAsteroid.name}
          />
        )}
        <CameraController distance={distance} />
      </>
    );
  }
};

// Main Asteroids Component
export const Asteroids = () => {
  const [asteroidData, setAsteroidData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchAsteroidData = async () => {
    const currentApiDate = new Date();
    const year = currentApiDate.getFullYear();
    const month = currentApiDate.getMonth() + 1; // months are 0-based
    const day = currentApiDate.getDate();
    const startDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
    const futureDate = new Date(
      currentApiDate.getTime() + 6 * 24 * 60 * 60 * 1000
    );
    const formattedDate = futureDate.toISOString().split("T")[0];
    try {
      console.log("currentdate ", startDate);
      console.log("futuredate ", formattedDate);
      const apiKey = "nVohxi2TGocD1nfEw7mOq561npMRvFSiX70Lqr0n";

      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${formattedDate}&api_key=${apiKey}`
      );

      const neos = response.data.near_earth_objects;
      const allAsteroids = [];

      Object.keys(neos).forEach((date) => {
        allAsteroids.push(...neos[date]);
      }); // Sort asteroids by their miss distance (closest to farthest)

      const sortedAsteroids = allAsteroids.sort((a, b) => {
        const distA = parseFloat(
          a.close_approach_data[0].miss_distance.kilometers
        );
        const distB = parseFloat(
          b.close_approach_data[0].miss_distance.kilometers
        );
        return distA - distB;
      });

      setAsteroidData(sortedAsteroids);
    } catch (error) {
      console.error("Error fetching asteroid data:", error);
    }
  };

  useEffect(() => {
    fetchAsteroidData();
  }, []);

  const handleNextAsteroid = () => {
    setCurrentIndex((currentIndex + 1) % asteroidData.length);
  };

  const handlePreviousAsteroid = () => {
    setCurrentIndex(
      (currentIndex - 1 + asteroidData.length) % asteroidData.length
    );
  };

  const currentAsteroid =
    asteroidData.length > 0 ? asteroidData[currentIndex] : null;

  if (!currentAsteroid) {
    return <div>Loading...</div>; // Return a loading state until data is available
  } // Calculate time difference from now to close_approach_date_full

  const currentDate = new Date();
  const closeApproachDate = new Date(
    currentAsteroid.close_approach_data[0].close_approach_date_full
  );
  const timeDiffSeconds = (closeApproachDate - currentDate) / 1000; // Convert milliseconds to seconds // Calculate distance traveled using relative_velocity (in km/s) and the time difference

  const velocityKms = parseFloat(
    currentAsteroid.close_approach_data[0].relative_velocity
      .kilometers_per_second
  );
  const distanceTraveled = calculateDistanceTraveled(
    velocityKms,
    timeDiffSeconds
  ); // Use the miss_distance.kilometers if we're past the approach date

  const distance =
    timeDiffSeconds > 0
      ? distanceTraveled
      : parseFloat(
          currentAsteroid.close_approach_data[0].miss_distance.kilometers
        );

  return (
    <>
      <PageLayout />
      <div className="canvasScreen">
        <Canvas color="black" width={800} height={600}>
          <ambientLight />
          {/* Pass the current asteroid and calculated distance to the 3D scene */}

          <AsteroidSystem
            currentAsteroid={currentAsteroid}
            distance={distance}
          />
        </Canvas>
      </div>
      {/* Render the fixed AsteroidCard with info */}
      {currentAsteroid && (
        <AsteroidCard
          name={currentAsteroid.name}
          diameterMin={
            currentAsteroid.estimated_diameter.kilometers.estimated_diameter_min
          }
          diameterMax={
            currentAsteroid.estimated_diameter.kilometers.estimated_diameter_max
          }
          closestApproachDate={
            currentAsteroid.close_approach_data[0]?.close_approach_date
          }
          missDistance={
            currentAsteroid.close_approach_data[0]?.miss_distance.kilometers
          }
          speed={
            currentAsteroid.close_approach_data[0]?.relative_velocity
              .kilometers_per_hour
          }
          hazard={currentAsteroid.is_potentially_hazardous_asteroid}
          onPrevious={handlePreviousAsteroid}
          onNext={handleNextAsteroid}
        />
      )}
    </>
  );
};
