import * as React from "react";
import { Html } from "@react-three/drei";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const AsteroidCard = ({ name, dia, onPrevious, onNext }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0px 4px 1px rgba(0,0,0,0.1)",
      }}
    >
      <Card sx={{ width: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Asteroid Name: {name}
          </Typography>
          <Typography variant="h5" component="div">
            Diameter: {dia} km
          </Typography>
          <Button onClick={onPrevious} style={{ cursor: "pointer" }}>
            Previous
          </Button>
          <Button onClick={onNext} style={{ cursor: "pointer" }}>
            Next
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
