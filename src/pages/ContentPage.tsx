// ContentPage.tsx
import React, { useState } from "react";
import { Box, Button, Modal, Title } from "@mantine/core";
import LanguageLevelPage from "./LanguageLevelPage";

const ContentPage = () => {
  const [opened, setOpened] = useState(false);

  const handleStart = () => {
    setOpened(true);
  };

  const handleModalClose = () => {
    setOpened(false);
  };

  return (
    <Box
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
        width: "600px",
        marginLeft: "150px",
        marginRight: "auto",
      }}
    >
      {/* Section Header */}
      <Title
        order={3}
        mb="xl"
        style={{
          padding: 16,
          color: "#58cc02",
          backgroundColor: "#e6f4ea", 
          borderRadius: 8,           
          fontWeight: 700,
        }}
      >
        SECTION 1, UNIT 1
      </Title>


      {/* Start Button */}
      <Button
        size="lg"
        radius="xl"
        color="green"
        onClick={handleStart}
        style={{ fontSize: "20px", padding: "20px 40px" }}
      >
        START
      </Button>

      {/* Fullscreen Modal */}
      <Modal opened={opened} onClose={handleModalClose} fullScreen>
        <LanguageLevelPage />
      </Modal>
    </Box>
  );
};

export default ContentPage;
