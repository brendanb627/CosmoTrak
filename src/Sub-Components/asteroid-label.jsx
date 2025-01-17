import React from "react";
import { Html } from "@react-three/drei";
import { Box } from "@mui/material";


export const AsteroidLabel = ({ name }) => {
  return (
    <Html
      pointerEvents="none"
      center
      position={[100, 0, 0]}
      className="circle2-svg"
    >
      <div
        style={{
          textDecoration: "none", // Remove underline
          color: "inherit", // Inherit text color from parent
          cursor: "pointer", // Change cursor to pointer on hover
        }}
        className="circle2-svg"
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <svg width="20" height="20" className="circle">
            <circle className="circle2-svg" cx="10" cy="10" r="8" fill={"gray"} />
          </svg>
          <Box>
            <div
              style={{ color: "white", marginLeft: "-10px", width: "300px", marginTop: "75px", }}
              className=""
            >
              {name}
            </div>
          </Box>
        </div>
      </div>
    </Html>
  );
};


