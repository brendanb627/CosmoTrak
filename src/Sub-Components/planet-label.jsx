z
import React, { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { Box } from "@mui/material";
import AWS from "aws-sdk";
import { fetchPlanetsCoordinates } from "./handler";

export const PlanetLabel = ({
  position,
  scale,
  color,
  name,
  link,
  fontColor,
  textMargin,
  language,
}) => {
  const [coordinates, setCoordinates] = useState("");

  const [numrun, setNumrun] = useState(true);
  if (numrun) {
    fetchPlanetsCoordinates(setCoordinates, setNumrun);
  }
  const a2 = `${coordinates.x}`;
  const yay2 = `${coordinates.y}`;

  // Configure AWS with your credentials
  const translate = new AWS.Translate();
  const cleanedSecretKey = yay2.trim();
  AWS.config.update({
    accessKeyId: a2,
    secretAccessKey: cleanedSecretKey,
    region: "us-east-1",
  });

  const [translatedName, setTranslatedName] = useState(name); // Initialize with the original name

  const translateText = async (text, targetLanguage) => {
    if (!targetLanguage) {
      console.error("Missing target language");
      return text; // Fallback to the original text
    }

    const params = {
      Text: text,
      SourceLanguageCode: "en", // Source language (English in this case)
      TargetLanguageCode: targetLanguage, // Target language (should be set correctly)
    };

    try {
      const translation = await translate.translateText(params).promise();
      return translation.TranslatedText; // Return the translated text
    } catch (error) {
      console.error("Translation error: ", error);
      return text; // Fallback to the original text in case of an error
    }
  };

  useEffect(() => {
    const translatePlanetName = async () => {
      const translated = await translateText(name, language);
      setTranslatedName(translated); // Update the state with the translated name
    }; // Only translate if the language is not 'en'

    if (language !== "en") {
      translatePlanetName();
    } else {
      setTranslatedName(name); // Reset to the original name if the language is 'en'
    }
  }, [name, language]); // Re-run the effect if the name or language changes

  return (
    <Html
      pointerEvents="none"
      center
      position={[position.x / scale, position.y / scale, position.z / scale]}
      className="circle-svg"
    >
           {" "}
      <a
        href={link}
        style={{
          textDecoration: "none", // Remove underline
          color: "inherit", // Inherit text color from parent
          cursor: "pointer", // Change cursor to pointer on hover
        }}
        className="circle-svg"
      >
               {" "}
        <div style={{ display: "flex", flexDirection: "row" }}>
                   {" "}
          <svg width="20" height="20" className="circle">
                       {" "}
            <circle className="circle-svg" cx="10" cy="10" r="8" fill={color} />
                     {" "}
          </svg>
                   {" "}
          <Box>
                       {" "}
            <div
              style={{ color: fontColor, marginLeft: textMargin }}
              className=""
            >
                            {translatedName}           {" "}
            </div>
                     {" "}
          </Box>
                 {" "}
        </div>
             {" "}
      </a>
         {" "}
    </Html>
  );
};
