import React, { useState } from "react";
import { Box, Button, Container, Title, Paper } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

const LanguageLevelPage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  const levels = [
    `I’m new to ${language}`,
    "I know some common words",
    "I can have basic conversations",
    "I can talk about various topics",
    "I can discuss most topics in detail",
  ];

  const handleContinue = () => {
    navigate("/learn");
  };

    return (
        <Container size="sm" style={{ textAlign: "center", marginTop: 80 }}>
            {/* Duolingo owl image & speech bubble */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Duolingo_logo.svg/2560px-Duolingo_logo.svg.png"
                alt="Owl"
                width={80}
            />
            <Title order={4} mt="md">
                How much {language} do you know?
            </Title>

            {/* Level options */}
            <Box mt="xl">
                {levels.map((level, index) => (
                    <Paper
                        key={index}
                        withBorder
                        p="md"
                        my="sm"
                        style={{
                            cursor: "pointer",
                            backgroundColor: selected === index ? "#e6f7ff" : "white",
                            borderColor: selected === index ? "#1c7ed6" : "#ddd",
                        }}
                        onClick={() => setSelected(index)}
                    >
                        {level}
                    </Paper>
                ))}
            </Box>

            {/* Continue button */}
            <Button
                color="green"
                fullWidth
                mt="xl"
                onClick={handleContinue}
                disabled={selected === null}
            >
                Continue
            </Button>
        </Container>
    );
};

export default LanguageLevelPage;
