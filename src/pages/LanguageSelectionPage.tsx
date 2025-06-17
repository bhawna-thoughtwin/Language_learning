// LanguageSelection.tsx
import React from "react";
import { Container, Title, Grid, Card, Text, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface Language {
  name: string;
  learners: string;
  flag: string; 
  enabled: boolean;
}

const languages: Language[] = [
  { name: "English", learners: "50M learners", flag: "🇬🇧", enabled: true },
  { name: "Hindi", learners: "11.7M learners", flag: "🇮🇳", enabled: true },
  { name: "Spanish", learners: "48.8M learners", flag: "🇪🇸", enabled: false },
  { name: "French", learners: "27.2M learners", flag: "🇫🇷", enabled: false },
  { name: "Japanese", learners: "24.4M learners", flag: "🇯🇵", enabled: false },
  { name: "German", learners: "19M learners", flag: "🇩🇪", enabled: false },
  { name: "Korean", learners: "17.8M learners", flag: "🇰🇷", enabled: false },
  { name: "Italian", learners: "13.4M learners", flag: "🇮🇹", enabled: false },
  { name: "Chinese", learners: "11.8M learners", flag: "🇨🇳", enabled: false },
];

const LanguageSelection = () => {
    const navigate = useNavigate();
  const handleClick = (language: Language) => {
    if (language.enabled) {
     navigate(`/welcome/${language.name.toLowerCase()}`);
    }
  };

  return (
    <Container size="md" py="xl">
      <Title align="center" mb="xl">
        I want to learn...
      </Title>
      <Grid>
        {languages.map((lang) => (
          <Grid.Col span={4} key={lang.name}>
            <Card
              shadow="sm"
              padding="md"
              withBorder
              style={{
                cursor: lang.enabled ? "pointer" : "not-allowed",
                opacity: lang.enabled ? 1 : 0.4,
              }}
              onClick={() => handleClick(lang)}
            >
              <Text size="xl" align="center">{lang.flag}</Text>
              <Title order={4} align="center" mt="sm">
                {lang.name}
              </Title>
              <Text size="sm" align="center" color="dimmed">
                {lang.learners}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default LanguageSelection;
