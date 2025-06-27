import React, { useState } from "react";
import {
    Box,
    Button,
    Title,
    Paper,
    Divider,
    Container,
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
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            {/* 🔹 Top: Owl + Title */}
            <Box
                style={{
                    padding: "20px 16px 0",
                    textAlign: "center",
                }}
            >
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 16,
                    }}
                >
                    <img src={bird} alt="Owl" width={60} />
                    <Title
                        order={4}
                        style={{
                            border: "1px solid rgb(192, 189, 187)",
                            borderRadius: "8px",
                            padding: "12px 16px 12px 40px",
                            position: "relative",
                            fontSize: "1rem",
                            lineHeight: 1.4,
                            maxWidth: "100%",
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
            </Box>

            {/* 🔹 Middle: Scrollable Level Cards */}
            <Box
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "20px 16px",
                }}
            >
                {levels.map((level, index) => (
                    <React.Fragment key={index}>
                        <Paper
                            withBorder
                            style={{
                                width: "100%",
                                maxWidth: 448,
                                height: 56,
                                margin: "8px auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                backgroundColor: selected === index ? "#e6f7ff" : "#fff",
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

            {/* 🔹 Bottom: Continue Button */}
            <Box
                style={{
                    padding: "16px",
                  
                    marginBottom: "180px",
                    display: "flex",              // ⬅️ Add this
                    justifyContent: "flex-end",   // ⬅️ Aligns button to right
                }}
            >
                <Button

                    radius="md"
                    size="md"
                    onClick={handleContinue}
                    variant="gradient"
                    gradient={{ from: "green", to: "lime", deg: 90 }}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    );
};

export default LanguageLevelPage;
