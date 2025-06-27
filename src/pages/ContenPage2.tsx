import React from "react";
import {
  Box,
  Container,
  Flex,
  Loader,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useCourseContent } from "../hooks/useCourseContent";
import { useLanguageStore } from "../store/useLanguageStore";
import SectionHeader from "../components/SectionHeader";
import UnitBlock from "../components/UnitBloxk";
import CardGroup from "../components/CardGroup";

const ContentPage2 = () => {
  const { sections, loading } = useCourseContent();
  const navigate = useNavigate();
  const { units } = useLanguageStore();

  if (loading) {
    return (
      <Container size="md" style={{ textAlign: "center", marginTop: "100px" }}>
        <Loader size="lg" color="blue" />
      </Container>
    );
  }

  if (!sections || sections.length === 0) {
    return (
      <Container size="md" style={{ textAlign: "center", marginTop: "100px" }}>
        <Title>No section found</Title>
      </Container>
    );
  }

  return (
    // <Container size="sm" mx={80} py="xl" style={{ width: 592 }}>

    //   <SectionHeader />
    //   {units.map((unit, index) => (
    //     <UnitBlock key={unit.id} unit={unit} index={index} />

    //   ))}

    // </Container>
    <Container size="lg" py="xl">
      <Flex align="flex-start" gap="xl">
        {/* Left: Units Section (scrolls normally) */}
        <Box style={{ flex: 2 }}>
          <SectionHeader />
          {units.map((unit, index) => (
            <UnitBlock key={unit.id} unit={unit} index={index} />
          ))}
        </Box>

        {/* Right: Sticky CardGroup */}
        <Box
          style={{
            flex: 1,
            position: "sticky",
            top: 80, // adjust based on your navbar/header height
            paddingRight: 24,
            alignSelf: "flex-start", // prevents stretching
          }}
        >
          <CardGroup />
        </Box>
      </Flex>
    </Container>

  );
};

export default ContentPage2;
