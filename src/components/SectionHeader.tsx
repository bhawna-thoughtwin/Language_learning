import React from "react";
import { Box, Group, Text, Title, ActionIcon } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useLanguageStore } from "../store/useLanguageStore";

const SectionHeader = () => {
  const navigate = useNavigate();
  const section = useLanguageStore(s => s.section);
  const units = useLanguageStore(s => s.units);
  const index = useLanguageStore(s => s.activeUnitIndex);
  const activeUnit = units?.[index];

  if (!section || !activeUnit) return null;
  console.log("Active unit:", activeUnit);
  console.log("Theme color:", activeUnit?.themeColor);
  
  return (
    <Box
      p="sm"
      style={{
        background: activeUnit.themeColor || "#58cc02",
        position: "sticky",
        top: 0,
        zIndex: 10,
        borderRadius: 8
      }}
    >
      <Group>
        <ActionIcon variant="light" onClick={() => navigate("/sections")}>
          <IconArrowLeft color="white" />
        </ActionIcon>
        <Text color="white" size="lg">
  {section.id},
</Text>
<Text color="white" size="lg">
  {activeUnit.id}
</Text>

      </Group>
      <Title order={4} style={{ color: "white" }}>
  {activeUnit.name}
</Title>

    </Box>
  );
};

export default SectionHeader;
