//ASteroid info box

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// Import the AWS SDK and configure it
import AWS from "aws-sdk";


const accessKeyId2 = process.env.REACT_APP_AWS_ACCESS_KEY
const secretAccessKey2 = process.env.REACT_APP_AWS_SECRET_KEY
// Configure AWS with your credentials
AWS.config.update({
  accessKeyId: accessKeyId2, // Replace with your AWS Access Key
  secretAccessKey: secretAccessKey2, // Replace with your AWS Secret Key
  region: "us-east-1", // Replace with the region your service is in
});

// Create an instance of the Amazon Translate service
const translate = new AWS.Translate();

const translateText = async (text, targetLanguage) => {
  const params = {
    Text: text,
    SourceLanguageCode: "en", // Source language (English in this case)
    TargetLanguageCode: targetLanguage, // Target language (e.g., 'es' for Spanish)
  };

  const translation = await translate.translateText(params).promise();
  return translation.TranslatedText;
};

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
  const [language, setLanguage] = useState("en"); // Default language is English
  const [translatedName, setTranslatedName] = useState("");
  const [translatedDiameter, setTranslatedDiameter] = useState("");
  const [translatedApproachDate, setTranslatedApproachDate] = useState("");
  const [translatedMissDistance, setTranslatedMissDistance] = useState("");
  const [translatedSpeed, setTranslatedSpeed] = useState("");
  const [translatedNext, setTranslatedNext] = useState("");
  const [translatedPrev, setTranslatedPrev] = useState("");
  const [translatedHazard, setTranslatedHazard] = useState("");
  const [translatedIfHazard, setTranslatedIfHazard] = useState("");


  // Translate text whenever the language or any asteroid info changes
  useEffect(() => {
    const translateAll = async () => {
      setTranslatedName(await translateText(`ASTEROID NAME`, language));

      setTranslatedDiameter(
        await translateText(
          `Diameter: ${diameterMin} - ${diameterMax} km`,
          language
        )
      );
      setTranslatedApproachDate(
        await translateText(
          `Closest Approach: ${closestApproachDate}`,
          language
        )
      );
      setTranslatedMissDistance(
        await translateText(`Miss Distance: ${missDistance} km`, language)
      );
      setTranslatedSpeed(await translateText(`Speed: ${speed} km/h`, language));
      setTranslatedHazard(await translateText(`Potential Hazard`, language));
      setTranslatedIfHazard(await translateText(`${hazard ? "Yes" : "No"}`, language));
      setTranslatedNext(await translateText(`Next`, language));
      setTranslatedPrev(await translateText(`Previous`, language));
    };

    if (language !== "en") {
      translateAll();
    } else {
      // Reset to original text if English is selected
      setTranslatedName(`ASTEROID NAME`);
      setTranslatedDiameter(`Diameter: ${diameterMin} - ${diameterMax} km`);
      setTranslatedApproachDate(`Closest Approach: ${closestApproachDate}`);
      setTranslatedMissDistance(`Miss Distance: ${missDistance} km`);
      setTranslatedSpeed(`Speed: ${speed} km/h`);
      setTranslatedHazard(`Potential Hazard`)
      setTranslatedIfHazard(`${hazard ? "Yes" : "No"}`)
      setTranslatedNext(`Next`);
      setTranslatedPrev(`Previous`);
      ;
    }
  }, [
    name,
    diameterMin,
    diameterMax,
    closestApproachDate,
    missDistance,
    speed,
    language,
  ]);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
          width: "750px", // Wider card to avoid title wrapping
          
        }}
      >
        <Card
          sx={{
            display: "flex",
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
                {/* Title - Font stays the same */}
                <Typography
                  sx={{
                    color: "#a0a0a0",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {translatedName}
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

                {/* Remaining content with updated readable font */}
                <Typography
                  sx={{
                    marginTop: "8px",
                    color: "#d0d0d0",
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "'Arial', sans-serif", // Change to a more readable font
                  }}
                >
                  {translatedDiameter}
                </Typography>
                <Typography
                  sx={{
                    marginTop: "4px",
                    color: "#d0d0d0",
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "'Arial', sans-serif", // Change to a more readable font
                  }}
                >
                  {translatedApproachDate}
                </Typography>
                <Typography
                  sx={{
                    marginTop: "4px",
                    color: "#d0d0d0",
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "'Arial', sans-serif", // Change to a more readable font
                  }}
                >
                  {translatedMissDistance}
                </Typography>
                <Typography
                  sx={{
                    marginTop: "4px",
                    color: "#d0d0d0",
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "'Arial', sans-serif", // Change to a more readable font
                  }}
                >
                  {translatedSpeed}
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
                {/* Potential Hazard - Font stays the same */}
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    whiteSpace: "nowrap", // Prevent the text from wrapping
                    overflow: "hidden", // Hide any overflow
                    textOverflow: "ellipsis", // Add ellipsis if the text overflows
                  }}
                >
                  <span style={{ color: "#ffffff" }}>{translatedHazard}: </span>
                  <span style={{ color: hazard ? "#ff4d4d" : "#66ff66" }}>
                    {translatedIfHazard}
                  </span>
                </Typography>
              </CardContent>
              <CardActions sx={{ padding: "0" }}>
                <Button
                  variant="outlined"
                  onClick={onPrevious}
                  sx={{
                    color: "#66b2ff",
                    textTransform: "none",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginRight: "8px",
                    fontSize: "20px",
                  }}
                >
                  {translatedPrev}
                </Button>
                <Button
                  variant="outlined"
                  onClick={onNext}
                  sx={{
                    color: "#66b2ff",
                    textTransform: "none",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  {translatedNext}
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Box>

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
          sx={{ color: "#ffffff", right: "20px", top: "10px", backgroundColor: "#2c2c2c" }}
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
    </>
  );
};
