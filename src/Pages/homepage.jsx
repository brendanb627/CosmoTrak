import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const DirectToOrrery = () => {
    navigate("/orrery")
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(true);
      console.log(true)
    }, 1000); // delay the animation trigger by 100ms

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`home ${animate ? "animate" : ""}`}
    >
      <div className="toplogo">
        <img src={"CosmoTrak-IconLogo.png"} height="45vh" />
      </div>
      <div className="tophome">
        <div>WELCOME TO</div>
      </div>
      <img src={"CosmoTrak-Logo-New.png"} className="textlogo" />
      <div className="launchbutton">
        <Button
          fullWidth
          variant="outlined"
          sx={{
            fontFamily: 'system-ui',
            borderRadius: 3,
            background: "#006BC2",
            color: "#ffffff",
            fontWeight: 400,
            fontSize: 20, //change hover color
            textTransform: "none",
            "&:hover": {
              // add this to change the hover color
              backgroundColor: "#12424f", // change this to your desired hover color
            },
          }}
          onClick={DirectToOrrery}
        >
          Launch Web App
        </Button>
      </div>
    </div>
  );
};
