import React, { useState } from "react";
import { Box, Button, Container, Title, Paper } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import bird from "../assets/bird.svg";
import arrow from "../assets/arrow.svg";
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
        <Container size="sm" style={{ textAlign: "center", marginTop: 20 }}>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap:20,
                }}
            >
                <img
                    src={bird}
                    alt="Owl"
                    width={80}
                />
                <Title
                    order={4}
                    mt="md"
                    style={{
                        border: '1px solid rgb(192, 189, 187)',  
                        position: 'relative',
                        display: 'inline-block',
                        borderRadius:"8px",
                        padding: '12px 16px 12px 40px',
                    }}
                >
                    <img
                        src={arrow}
                        alt="Arrow"
                        style={{
                            position: 'absolute',
                            left: '-20px',   
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '30px',
                            height: '30px',
                        }}
                    />
                    How much {language} do you know?
                </Title>



            </Box>


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
                size="md"
                radius="md"
                variant="gradient"
                gradient={{ from: 'green', to: 'lime', deg: 90 }}
                onClick={handleContinue}
                fullWidth
                maw={300}
            >
                Continue
            </Button>
        </Container>
    );
};

export default LanguageLevelPage;
