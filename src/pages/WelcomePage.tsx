import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ActionIcon, Box, Button, Container, Modal, Title, Stack, rem } from "@mantine/core";
import { motion } from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";
import LanguageLevelPage from "./LanguageLevelPage";
import hellobird from "../assets/hellobird.webp";
import { useLanguageStore } from "../store/useLanguageStore";
import { t } from "i18next";

const WelcomePage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const handleContinue = () => {
    setOpened(true);
  };

  const handleModalClose = () => {
    setOpened(false);
    navigate("/learn");
  };
  useEffect(() => {
    if (language) {
      setLanguage(language);
    }
  }, [language, setLanguage]);

  return (
    <Container
      size="md"
      px="md"
      style={{ textAlign: "center", position: "relative", minHeight: "100vh" }}
    >
      {/* Back Button */}
      <ActionIcon
        variant="subtle"
        color="gray"
        size="lg"
        onClick={() => navigate("/language-selection")}
        style={{ position: "absolute", top: rem(20), left: rem(20) }}
      >
        <IconArrowLeft size={30} />
      </ActionIcon>

      {/* Main content */}
      <Stack align="center" justify="center" spacing="xl" style={{ minHeight: "80vh" }}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Title order={2}>  {t('welcome.title')}</Title>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Title order={4}>{t('welcome.title2')}{language?.toUpperCase()}</Title>
        </motion.div>

        <Box>
          <img
            src={hellobird}
            alt="Hello Bird"
            style={{
              width: "80%",
              maxWidth: "300px",
              height: "auto",
            }}
          />
        </Box>

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
      </Stack>

      <Modal opened={opened} onClose={handleModalClose} fullScreen>
        <LanguageLevelPage />
      </Modal>
    </Container>
  );
};

export default WelcomePage;
