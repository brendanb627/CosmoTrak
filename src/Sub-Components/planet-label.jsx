import React from "react";
import { Html } from "@react-three/drei";
import { Box } from "@mui/material";

export const PlanetLabel = ({ position, scale, color, name, link, fontColor, textMargin }) => {
  return (
    <Html
      pointerEvents="none"
      center
      position={[position.x / scale, position.y / scale, position.z / scale]}
      className='circle-svg'
    >
      <a
        href={link}
        style={{
          textDecoration: "none", // Remove underline
          color: "inherit", // Inherit text color from parent
          cursor: "pointer", // Change cursor to pointer on hover
        }}
        className='circle-svg'
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <svg width="20" height="20" className="circle">
            <circle className='circle-svg' cx="10" cy="10" r="8" fill={color} />
          </svg>
          <Box>
          <div style={{color: fontColor, marginLeft: textMargin}} className="">{name}</div>
          </Box>
        </div>
      </a>
    </Html>
  );
};
