import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Use Grid for flexible layout

export const AsteroidCard = ({
  name,
  diameterMin,
  diameterMax,
  closestApproachDate,
  missDistance,
  speed,
  hazard,
  onPrevious,
  onNext,
}) => {
  if (diameterMin == 0.000913177){
    onNext()
  }
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "rgba(34, 34, 34, 0.9)",
        padding: "24px",
        borderRadius: "20px",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        width: "750px", // Wider card to avoid title wrapping
      }}
    >
      <Card
        sx={{
          display: "flex", // Make content side by side
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "15px",
          overflow: "hidden",
          backgroundColor: "#2c2c2c",
          padding: "16px", // Adjust padding for larger content
        }}
      >
        <Grid container spacing={2}>
          {/* Left Section - Asteroid Information */}
          <Grid item xs={8}>
            <CardContent>
              {/* Title - Wider card to prevent two-line wrap */}
              <Typography
                sx={{
                  color: "#a0a0a0",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                ASTEROID NAME
              </Typography>
              <Typography
                sx={{
                  fontSize: 26,
                  fontWeight: "bold",
                  color: "#e0e0e0",
                  whiteSpace: "nowrap", // Ensure title stays on one line
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {name}
              </Typography>

              {/* Remaining content with custom font */}
              <Typography
                sx={{
                  marginTop: "8px",
                  color: "#d0d0d0",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
                }}
              >
                Diameter: {diameterMin} - {diameterMax} km
              </Typography>
              <Typography
                sx={{
                  marginTop: "4px",
                  color: "#d0d0d0",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
                }}
              >
                Closest Approach: {closestApproachDate}
              </Typography>
              <Typography
                sx={{
                  marginTop: "4px",
                  color: "#d0d0d0",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
                }}
              >
                Miss Distance: {missDistance} km
              </Typography>
              <Typography
                sx={{
                  marginTop: "4px",
                  color: "#d0d0d0",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
                }}
              >
                Speed: {speed} km/h
              </Typography>
            </CardContent>
          </Grid>

          {/* Right Section - Potential Hazard & Buttons */}
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Push the buttons to the bottom
              alignItems: "flex-end",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: hazard ? "#ff4d4d" : "#66ff66", // Red for hazard, green for safe
                  fontSize: "20px",
                  fontWeight: 400,
                  fontFamily: `fontFamily: 'system-ui`
                }}
              >
                Potential Hazard: {hazard ? "Yes" : "No"}
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: "0" }}>
              <Button
                variant="text"
                onClick={onPrevious}
                sx={{
                  color: "#66b2ff",
                  textTransform: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginRight: "8px",
                  fontSize: "20px"
                }}
              >
                Previous
              </Button>
              <Button
                variant="text"
                onClick={onNext}
                sx={{
                  color: "#66b2ff",
                  textTransform: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "20px"
                }}
              >
                Next
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
