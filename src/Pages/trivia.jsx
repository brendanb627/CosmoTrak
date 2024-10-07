import React, { useState } from "react";
import { Button, Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import PlanetBackground from "./../Sub-Components/earthtexture.webp"; // Replace with your actual image path
import { PageLayout } from "../Components/sidebar";

// Sample data for planets
const planetData = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Which planet is the largest in the Solar System?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury",
  },
  {
    question: "Which planet is known for its rings?",
    options: ["Earth", "Saturn", "Mars", "Neptune"],
    answer: "Saturn",
  },
  {
    question: "Which planet is farthest from the Sun?",
    options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
    answer: "Neptune",
  },
];

// Custom styling for the theme
const StyledCard = styled(Card)({
  backgroundColor: "#1e1e1e",
  color: "#fff",
  maxWidth: 600,
  margin: "0 auto",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
});

const StyledButton = styled(Button)({
  backgroundColor: "#333",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#555",
  },
});

const Sidebar = styled(Box)({
  width: "60px",
  height: "100vh",
  backgroundColor: "#2a2a2a",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  left: 0,
  top: 0,
});

const IconButton = styled(Button)({
  margin: "10px 0",
  backgroundColor: "#2e2e2e",
  color: "#fff",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
});

export const Trivia = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const currentQuestion = planetData[currentQuestionIndex];

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    if (currentQuestionIndex < planetData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowFinalScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowFinalScore(false);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundImage: `url(${PlanetBackground})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Sidebar */}
      <PageLayout/>

      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <StyledCard>
          <CardContent>
            {!showFinalScore ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Planet Trivia Game
                </Typography>
                <Typography variant="h6">
                  {currentQuestion.question}
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                  {currentQuestion.options.map((option) => (
                    <Grid item xs={6} key={option}>
                      <StyledButton
                        variant="contained"
                        onClick={() => handleAnswerSelection(option)}
                        fullWidth
                        disabled={showResult}
                        style={{
                          backgroundColor:
                            showResult && option === currentQuestion.answer
                              ? "green"
                              : showResult && option === selectedAnswer
                              ? "red"
                              : undefined,
                        }}
                      >
                        {option}
                      </StyledButton>
                    </Grid>
                  ))}
                </Grid>
                {showResult && (
                  <Button
                    variant="contained"
                    sx={{ marginTop: "20px" }}
                    onClick={handleNextQuestion}
                  >
                    {currentQuestionIndex < planetData.length - 1
                      ? "Next Question"
                      : "Finish Quiz"}
                  </Button>
                )}
              </>
            ) : (
              <>
                <Typography variant="h4" gutterBottom>
                  Quiz Complete!
                </Typography>
                <Typography variant="h6">
                  Your Score: {score}/{planetData.length}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ marginTop: "20px" }}
                  onClick={handleRestartQuiz}
                >
                  Restart Quiz
                </Button>
              </>
            )}
          </CardContent>
        </StyledCard>
      </Box>
    </Box>
  );
};



