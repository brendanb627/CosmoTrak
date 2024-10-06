import React from "react";
import { Link } from 'react-router-dom' // Add this import

export const PlanetName = ({ name, link }) => {
  console.log(name);
  return (
    <>
      <div className="planetnames" style={{ color: "rgb(80, 80, 80)" }}>
        {name}
      </div>
      <div className="planetPress" href="/earth">
        <Link to={link} className="planetPress"></Link>
      </div>
    </>
  );
};
