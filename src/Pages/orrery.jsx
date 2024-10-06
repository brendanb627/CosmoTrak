// orrery


// orrery


import React, { useEffect, useState, useContext, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PlanetLabel } from "../Sub-Components/planet-label";
import Box from "@mui/material/Box";
import {
  MercuryOrbit,
  VenusOrbit,
  EarthOrbit,
  MarsOrbit,
  SaturnOrbit,
  UranusOrbit,
  JupiterOrbit,
  NeptuneOrbit,
} from "../Sub-Components/planet-orbits";
import { PageLayout } from "../Components/sidebar";
import Slider from "@mui/material/Slider";
import { randFloat } from "three/src/math/MathUtils.js";
import { mercuryVelocity } from "../Components/move-planets";
import { LoadingPage } from "../Components/loading-page";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Checkboxes = ({ setShowPlanets, showPlanets, setShowOrbits, showOrbits }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked checked={showPlanets} onChange={(e) => setShowPlanets(e.target.checked)} />} label="Planets"/>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Dwarfs" />
      <FormControlLabel control={<Checkbox defaultChecked checked={showOrbits} onChange={(e) => setShowOrbits(e.target.checked)} />} label="Orbits"/>
    </FormGroup>
  );

}

const CameraController = ({ children }) => {
  const { camera, gl, scene } = useThree();
  const [size, setSize] = useState(0);
  const controls = useRef();
  console.log(mercuryVelocity[0][0]);


  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 10;
    controls.enableZoom = false;
    controls.maxDistance = 4500;
    controls.enablePan = false;
    camera.near = 1;
    camera.far = 10000000;
    camera.zoom = 1;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 900;
    camera.updateProjectionMatrix();
  }, [camera]);


  return <sizeContext.Provider value={size}>{children}</sizeContext.Provider>;
};


const sizeContext = React.createContext();


const SolarSytem = ({
  zoom,
  zoomChange,
  zoomUpdate,
  setIsLoading,
  isLoading,
  language,
  showPlanets,
  showOrbits,
}) => {
  
  const { camera } = useThree();
  const scale = 2000000; // solar system scale
  const size = useContext(sizeContext);


  useEffect(() => {
    camera.position.x = camera.position.x * zoomChange;
    camera.position.y = camera.position.y * zoomChange;
    camera.position.z = camera.position.z * zoomChange;
  }, [zoom, zoomChange, zoomUpdate]);


  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [formattedMonth, setFormattedMonth] = useState("");
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


  useEffect(() => {
    if (currentMonth === 0) {
      setFormattedMonth("Jan");
    } else if (currentMonth === 1) {
      setFormattedMonth("Feb");
    } else if (currentMonth === 2) {
      setFormattedMonth("Mar");
    } else if (currentMonth === 3) {
      setFormattedMonth("Apr");
    } else if (currentMonth === 4) {
      setFormattedMonth("May");
    } else if (currentMonth === 5) {
      setFormattedMonth("Jun");
    } else if (currentMonth === 6) {
      setFormattedMonth("Jul");
    } else if (currentMonth === 7) {
      setFormattedMonth("Aug");
    } else if (currentMonth === 8) {
      setFormattedMonth("Sep");
    } else if (currentMonth === 9) {
      setFormattedMonth("Oct");
    } else if (currentMonth === 10) {
      setFormattedMonth("Nov");
    } else if (currentMonth === 11) {
      setFormattedMonth("Dec");
    }
  }, [currentMonth]);


  const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(
    2,
    "0"
  )}-${String(currentDay + 1).padStart(2, "0")}`;
  const currentDate = `${currentYear}-${formattedMonth}-${String(
    new Date().getDate()
  ).padStart(2, "0")}`;


  const [MercuryCoordinates, setMercuryCoordinates] = useState([]);
  const [VenusCoordinates, setVenusCoordinates] = useState([]);
  const [EarthCoordinates, setEarthCoordinates] = useState([]);
  const [MarsCoordinates, setMarsCoordinates] = useState([]);
  const [JupiterCoordinates, setJupiterCoordinates] = useState([]);
  const [SaturnCoordinates, setSaturnCoordinates] = useState([]);
  const [UranusCoordinates, setUranusCoordinates] = useState([]);
  const [NeptuneCoordinates, setNeptuneCoordinates] = useState([]);


  const fetchPlanetsCoordinates = async (command, setCoordinates) => {
    try {
      const response = await fetch(
        `https://kekrvok46l.execute-api.us-east-1.amazonaws.com/test/user?date=${currentDate}&id=${command}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "none",
          },
          mode: "cors",
        }
      );


      const data = await response.json();
      console.log(data);
      setCoordinates({
        x: parseInt(data.user.x.N),
        y: parseInt(data.user.y.N),
        z: parseInt(data.user.z.N),
      });
    } catch (error) {
      console.error(error);
    }
  };
  //fetch data for each planet in solar system
  const fetchMercuryCoordinates = async () =>
    await fetchPlanetsCoordinates(199, setMercuryCoordinates);


  const fetchVenusCoordinates = () =>
    fetchPlanetsCoordinates(299, setVenusCoordinates);


  const fetchEarthCoordinates = () =>
    fetchPlanetsCoordinates(399, setEarthCoordinates);


  const fetchMarsCoordinates = () =>
    fetchPlanetsCoordinates(499, setMarsCoordinates);


  const fetchJupiterCoordinates = () =>
    fetchPlanetsCoordinates(599, setJupiterCoordinates);


  const fetchSaturnCoordinates = () =>
    fetchPlanetsCoordinates(699, setSaturnCoordinates);


  const fetchUranusCoordinates = async () =>
    await fetchPlanetsCoordinates(799, setUranusCoordinates);


  const fetchNeptuneCoordinates = async () =>
    await fetchPlanetsCoordinates(899, setNeptuneCoordinates);


  useEffect(() => {
    const fetchPlanetData = async () => {
      await fetchMercuryCoordinates();
      await fetchVenusCoordinates();
      await fetchEarthCoordinates();
      await fetchMarsCoordinates();
      await fetchJupiterCoordinates();
      await fetchSaturnCoordinates();
      await fetchUranusCoordinates();
      await fetchNeptuneCoordinates();
    };


    fetchPlanetData();
  }, [currentDate]);


  if (
    MercuryCoordinates.x &&
    VenusCoordinates.x &&
    EarthCoordinates.x &&
    MarsCoordinates.x &&
    JupiterCoordinates.x &&
    SaturnCoordinates.x &&
    UranusCoordinates.x &&
    NeptuneCoordinates.x
  ) {
    setIsLoading(false);
  }


  // useFrame(() => {
  //   const now = Date.now();
  //   if (now - lastUpdate > 1000) {
  //     setLastUpdate(now);
  //     if (currentDay < 88) {
  //       setCurrentDay(currentDay + 1);
  //       MercuryCoordinates.x = mercuryPosition[currentDay][0];
  //       MercuryCoordinates.y = mercuryPosition[currentDay][1];
  //       MercuryCoordinates.z = mercuryPosition[currentDay][2];
  //     } else {
  //       setCurrentDay(0);
  //       MercuryCoordinates.x = mercuryPosition[currentDay][0];
  //       MercuryCoordinates.y = mercuryPosition[currentDay][1];
  //       MercuryCoordinates.z = mercuryPosition[currentDay][2];
  //     }
  //   }


  //   MercuryCoordinates.x += mercuryVelocity[currentDay][0] * 1000;
  //   MercuryCoordinates.y += mercuryVelocity[currentDay][1] * 1000;
  //   MercuryCoordinates.z += mercuryVelocity[currentDay][2] * 1000;


  // });

  
  return (
    <>
      {showOrbits &&
      <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="yellow" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        {MercuryCoordinates?.x && <MercuryOrbit color="purple" />}
      </mesh>
      <mesh position={[0, 0, 0]}>
        {VenusCoordinates?.x && <VenusOrbit color="lightBlue" />}
      </mesh>
      <mesh position={[0, 0, 0]}>
        {EarthCoordinates?.x && <EarthOrbit color="lightGreen" />}
      </mesh>
      <mesh position={[0, 0, 0]}>
        {MarsCoordinates?.x && <MarsOrbit color="orange" />}
      </mesh>
      <mesh position={[0, 0, 0]}>
        {JupiterCoordinates?.x && <JupiterOrbit color="cyan" />}
      </mesh>
      <mesh position={[0, 0, 0]}>
        {UranusCoordinates?.x && <UranusOrbit color="blue" />}
      </mesh>
      <mesh position={[0, 0, 0]}>
        {SaturnCoordinates?.x && <SaturnOrbit color="yellow" />}
      </mesh>
      <mesh position={[0, 0, 0]}>
        <NeptuneOrbit color="pink" />
      </mesh>
</>
}
      <mesh
        position={[
          MercuryCoordinates.x / scale,
          MercuryCoordinates.y / scale,
          MercuryCoordinates.z / scale,
        ]}
        scale={[size, size, size]}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="skyblue" />
      </mesh>
      {isLoading === false &&
        Math.abs(camera.position.x) < 540 &&
        Math.abs(camera.position.y) < 540 &&
        Math.abs(camera.position.z) < 540 &&
        showPlanets && (
          <PlanetLabel
            position={MercuryCoordinates}
            scale={scale}
            language={language}
            color={"purple"}
            name={"Mercury"}
            link={"/mercury"}
            textMargin={"150px"}
          />
        )}


      <mesh
        position={[
          VenusCoordinates.x / scale,
          VenusCoordinates.y / scale,
          VenusCoordinates.z / scale,
        ]}
        scale={[size, size, size]}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="skyblue" />
      </mesh>
      {isLoading === false &&
        Math.abs(camera.position.x) < 600 &&
        Math.abs(camera.position.y) < 600 &&
        Math.abs(camera.position.z) < 600 &&
        showPlanets &&  (
          <PlanetLabel
            position={VenusCoordinates}
            scale={scale}
            language={language}
            color={"lightBlue"}
            name={"Venus"}
            link={"/venus"}
            textMargin={"130px"}
          />
        
        )}


      <mesh
        position={[
          EarthCoordinates.x / scale,
          EarthCoordinates.y / scale,
          EarthCoordinates.z / scale,
        ]}
        scale={[size, size, size]}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="skyblue" />
      </mesh>
      {isLoading === false &&
        Math.abs(camera.position.x) < 570 &&
        Math.abs(camera.position.y) < 570 &&
        Math.abs(camera.position.z) < 570 && 
        showPlanets &&  (
          <PlanetLabel
            position={EarthCoordinates}
            scale={scale}
            language={language}
            color={"lightGreen"}
            name={"Earth"}
            link={"/earth"}
            textMargin={"140px"}
          />
        )}
      <mesh
        position={[
          MarsCoordinates.x / scale,
          MarsCoordinates.y / scale,
          MarsCoordinates.z / scale,
        ]}
        scale={[size, size, size]}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="skyblue" />
      </mesh>
      {isLoading === false &&
        Math.abs(camera.position.x) < 600 &&
        Math.abs(camera.position.y) < 600 &&
        Math.abs(camera.position.z) < 600 &&
        showPlanets && (  
          <PlanetLabel
            position={MarsCoordinates}
            scale={scale}
            language={language}
            color={"orange"}
            name={"Mars"}
            link={"/mars"}
            textMargin={"120px"}
          />
        )}
      <mesh
        position={[
          SaturnCoordinates.x / scale,
          SaturnCoordinates.y / scale,
          SaturnCoordinates.z / scale,
        ]}
        scale={[size, size, size]}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="skyblue" />
      </mesh>
      {isLoading === false &&
        Math.abs(camera.position.x) < 4500 &&
        Math.abs(camera.position.y) < 4500 &&
        Math.abs(camera.position.z) < 4500 &&
        showPlanets && (
          <PlanetLabel
            position={SaturnCoordinates}
            scale={scale}
            language={language}
            color={"yellow"}
            name={"Saturn"}
            link={"/saturn"}
            textMargin={"145px"}
          />
        )}
      <mesh
        position={[
          JupiterCoordinates.x / scale,
          JupiterCoordinates.y / scale,
          JupiterCoordinates.z / scale,
        ]}
        scale={[size, size, size]}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="skyblue" />
      </mesh>
      {isLoading === false && 
      showPlanets &&  (
        <PlanetLabel
          position={JupiterCoordinates}
          scale={scale}
          language={language}
          color={"cyan"}
          name={"Jupiter"}
          link={"/jupiter"}
          textMargin={"150px"}
        />
      )}


      <mesh
        position={[
          UranusCoordinates.x / scale,
          UranusCoordinates.y / scale,
          UranusCoordinates.z / scale,
        ]}
        scale={[size, size, size]}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="skyblue" />
      </mesh>
      {isLoading === false &&
        showPlanets && (
        <PlanetLabel
          position={UranusCoordinates}
          scale={scale}
          language={language}
          color={"blue"}
          name={"Uranus"}
          link={"/uranus"}
          textMargin={"145px"}
        />
      )}
      <mesh
        position={[
          NeptuneCoordinates.x / scale,
          NeptuneCoordinates.y / scale,
          NeptuneCoordinates.z / scale,
        ]}
        scale={[size, size, size]}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="skyblue" />
      </mesh>
      {NeptuneCoordinates.x &&
        showPlanets &&  (
        <PlanetLabel
          position={NeptuneCoordinates}
          scale={scale}
          language={language}
          color={"gray"}
          name={"Neptune"}
          link={"/neptune"}
          textMargin={"150px"}
        />
      )}
    </>
  );
};


export function Orrery() {
  const [showPlanets, setShowPlanets] = useState(true)
  const [showOrbits, setShowOrbits] = useState(true)

  const [zoom, setZoom] = useState(1);
  const [value, setValue] = useState(400);
  const [sliderDirection, setSliderDirection] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("en")



  useEffect(() => {
    const canvas = document.getElementById("root");
    canvas.addEventListener("wheel", (event) => {
      event.preventDefault();
      const zoomChange = event.deltaY > 0 ? 1.1 : 0.9;
      setZoom(event.deltaY * randFloat(0.01, 0.1));


      setSliderDirection(zoomChange);
      setValue(value * zoomChange);
    });
  }, [zoom]);


  const handleSliderChange = (_, value) => {
    const zoomChange = value > zoom ? value / zoom : value / zoom;
    setSliderDirection(zoomChange);
    setZoom(value);
    setValue(value);
  };


  return (
    <>
      <PageLayout />
      <div className="canvasScreen">
        <Canvas id="canvas" width={800} height={600} domEvents={false}>
          <CameraController zoom={zoom} zoomChange={zoom}>
            <ambientLight />
            <SolarSytem
              zoom={zoom}
              zoomChange={sliderDirection}
              zoomUpdate={value}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              language={language}
              showPlanets={showPlanets}
              showOrbits={showOrbits}
            />
          </CameraController>
        </Canvas>
        <div className="slider">
          <Slider
            className="slider"
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: "slider-vertical",
              },
            }}
            onChange={handleSliderChange}
            step={0.01}
            min={1}
            max={800}
            orientation="vertical"
            defaultValue={0}
            value={value}
            aria-label="Temperature"
          />
        </div>
        {isLoading && <LoadingPage />}
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Aligns the language box to the right
          marginBottom: "16px",
          
        }}
      >
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          sx={{
            color: "#ffffff",
            right: "20px",
            top: "10px",
            backgroundColor: "#2c2c2c",
          }}
        >
          <MenuItem value="ar">Arabic</MenuItem>
          <MenuItem value="bn">Bengali</MenuItem>
          <MenuItem value="bg">Bulgarian</MenuItem>
          <MenuItem value="zh">Chinese</MenuItem>
          <MenuItem value="hr">Croatian</MenuItem>
          <MenuItem value="cs">Czech</MenuItem>
          <MenuItem value="da">Danish</MenuItem>
          <MenuItem value="nl">Dutch</MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fi">Finnish</MenuItem>
          <MenuItem value="fr">French</MenuItem>
          <MenuItem value="de">German</MenuItem>
          <MenuItem value="el">Greek</MenuItem>
          <MenuItem value="he">Hebrew</MenuItem>
          <MenuItem value="hi">Hindi</MenuItem>
          <MenuItem value="hu">Hungarian</MenuItem>
          <MenuItem value="id">Indonesian</MenuItem>
          <MenuItem value="it">Italian</MenuItem>
          <MenuItem value="ja">Japanese</MenuItem>
          <MenuItem value="ko">Korean</MenuItem>
          <MenuItem value="ms">Malay</MenuItem>
          <MenuItem value="no">Norwegian</MenuItem>
          <MenuItem value="pa">Punjabi</MenuItem>
          <MenuItem value="fa">Persian</MenuItem>
          <MenuItem value="pl">Polish</MenuItem>
          <MenuItem value="pt">Portuguese</MenuItem>
          <MenuItem value="ro">Romanian</MenuItem>
          <MenuItem value="ru">Russian</MenuItem>
          <MenuItem value="sr">Serbian</MenuItem>
          <MenuItem value="sk">Slovak</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="sv">Swedish</MenuItem>
          <MenuItem value="ta">Tamil</MenuItem>
          <MenuItem value="te">Telugu</MenuItem>
          <MenuItem value="th">Thai</MenuItem>
          <MenuItem value="tr">Turkish</MenuItem>
          <MenuItem value="uk">Ukrainian</MenuItem>
          <MenuItem value="ur">Urdu</MenuItem>
          <MenuItem value="vi">Vietnamese</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginBottom: '16px',
          marginRight: '16px',
        }}
      >
<Checkboxes showPlanets={showPlanets} setShowPlanets={setShowPlanets} setShowOrbits={setShowOrbits} showOrbits={showOrbits}></Checkboxes>      
</Box>
    </>
  );
}



