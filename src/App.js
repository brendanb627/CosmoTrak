import React from 'react';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { Sun } from './Pages/sun';
import {Orrery} from './Pages/orrery';
import {Homepage} from './Pages/homepage';
import {Asteroids} from "./Pages/hazardous-asteroids"
import { PlanetMercury } from './Pages/planet-mercury';
import { PlanetVenus } from './Pages/planet-venus';
import { PlanetEarth } from './Pages/planet-earth';
import { PlanetMars } from './Pages/planet-mars';
import { PlanetJupiter } from './Pages/planet-jupiter';
import { PlanetSaturn } from './Pages/planet-saturn';
import { PlanetUranus } from './Pages/planet-uranus';
import { PlanetNeptune } from './Pages/planet-neptune';
import { PlanetList } from './Pages/planet-list';
import { AboutUs } from './Pages/about-us';
import { Support } from './Pages/support';
import { Trivia } from './Pages/trivia';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#999999' },
    background: {
      default: '#000000' // Set background color to black
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'linear-gradient(to bottom, #263138, #1f1f1f)'
        }
      }
    }
  },
  fontFace: {
    MyCustomFont: {
      fontFamily: 'fontUI',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: `
        local('fontUI'),
      `,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215'
    }
  },
  typography: {
    fontFamily: 'fontUI', // Replace with your desired font family
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/orrery" element={<Orrery />} />
            <Route path="/ast" element={<Asteroids />} />
            <Route path="/" element={<Homepage/>} />
            <Route path="/list" element={<PlanetList />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/sun" element={<Sun/>} />
            <Route path="/mercury" element={<PlanetMercury />}/>
            <Route path="/venus" element={<PlanetVenus />}/>
            <Route path="/earth" element={<PlanetEarth />}/>
            <Route path="/mars" element={<PlanetMars />}/>
            <Route path="/jupiter" element={<PlanetJupiter />}/>
            <Route path="/saturn" element={<PlanetSaturn />}/>
            <Route path="/uranus" element={<PlanetUranus />}/>
            <Route path="/neptune" element={<PlanetNeptune />}/>
            <Route path="/planet" element={<PlanetList />}/>
            {/* <Route path="/dwarf/pluto" element={<DwarfPluto />}/>
            <Route path="/dwarf/ceres" element={<DwarfCeres />}/>
            <Route path="/dwarf/eris" element={<DwarfEris />}/>
            <Route path="/dwarf/haumea" element={<DwarfHaumea />}/>
            <Route path="/dwarf/makemake" element={<DwarfMakeMake />}/> */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/support" element={<Support />} />

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
