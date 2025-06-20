import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    Title,
    Paper,
    Divider,
} from "@mantine/core";
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
        <Container size="sm" style={{ textAlign: "center", marginTop: 10 }}>
            {/* Title & Owl */}
            <Box
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                    flexWrap: "wrap",
                }}
            >
                <img src={bird} alt="Owl" width={80} />
                <Title
                    order={4}
                    mt="md"
                    style={{
                        border: "1px solid rgb(192, 189, 187)",
                        position: "relative",
                        display: "inline-block",
                        borderRadius: "8px",
                        padding: "12px 16px 12px 40px",
                    }}
                >
                    <img
                        src={arrow}
                        alt="Arrow"
                        style={{
                            position: "absolute",
                            left: "-20px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "30px",
                            height: "30px",
                        }}
                    />
                    How much {language} do you know?
                </Title>
            </Box>

            {/* Level options */}
            <Box mt="xl" mb="xl">
                {levels.map((level, index) => (
                    <React.Fragment key={index}>
                        <Paper
                            withBorder
                            p="md"
                            my="sm"
                            style={{
                                cursor: "pointer",
                                backgroundColor: selected === index ? "#e6f7ff" : "white",
                                borderColor: selected === index ? "#1c7ed6" : "#ddd",
                                borderRadius: "10px",
                                transition: "all 0.2s",
                            }}
                            onClick={() => setSelected(index)}
                        >
                            {level}
                        </Paper>
                        {index === levels.length - 1 && <Divider my="md" />}
                    </React.Fragment>
                ))}
            </Box>

            {/* Continue button */}
            <Box
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    maxWidth: "400px",
                    margin: "0 auto",
                    zIndex: 1000,
                }}
            >
                <Button
                    size="md"
                    radius="md"
                    variant="gradient"
                    gradient={{ from: "green", to: "lime", deg: 90 }}
                    onClick={handleContinue}
                    fullWidth
                >
                    Continue
                </Button>
            </Box>

        </Container>
    );
};

export default LanguageLevelPage;
