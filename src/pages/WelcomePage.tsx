import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ActionIcon, Box, Button, Container, Modal, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";
import LanguageLevelPage from "./LanguageLevelPage";
import hellobird from "../assets/hellobird.webp"; 
const WelcomePage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const handleContinue = () => {
    setOpened(true);
  };

  const handleModalClose = () => {
    setOpened(false);
    navigate("/learn"); 
  };

  return (
    <Container size="xl" style={{ textAlign: "center", marginTop: "100px", position: "relative" }}>
      <ActionIcon
        variant="subtle"
        color="gray"
        size="lg"
        onClick={() => navigate("/")}
        style={{ position: "absolute", top: 20, left: 20 }}
      >
        <IconArrowLeft size={30} />
      </ActionIcon>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Title order={2} mb="md">🎉 Welcome to Duolingo! 🎉</Title>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Title order={4}>You selected: {language?.toUpperCase()}</Title>
      </motion.div>

      <Box mt="lg" style={{ display: "flex", justifyContent: "center" }}>
  <img 
    src={hellobird} // 
    alt="Your description"
    style={{ width: "200px", height: "auto" }}
  />
</Box>


      <Button
        color="green"
        style={{ position: "fixed", bottom: 240, right: 260 }}
        onClick={handleContinue}
      >
        Continue
      </Button>

      <Modal opened={opened} onClose={handleModalClose} fullScreen>
        <LanguageLevelPage />
      </Modal>
    </Container>
  );
};

export default WelcomePage;
