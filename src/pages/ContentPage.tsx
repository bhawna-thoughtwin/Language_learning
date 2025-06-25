import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Loader,
  Title,
  ActionIcon,
  Stack,
  Paper,
  Popover,
  Group,
  Card,
  Text, 
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useCourseContent } from "../hooks/useCourseContent";
import star from "../assets/star.svg";
import troffi from "../assets/unitsimages/troffi.svg";
import giftbox from "../assets/unitsimages/giftbox.svg";
import whitestar from "../assets/unitsimages/whitestar.svg";
import hellobird from "../assets/unitsimages/hellobird.webp";
import { useLanguageStore } from "../store/useLanguageStore";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import AnimatedImage from "../animatedlogo/ AnimatedImage";
import GreenAnimationStar from "../animatedlogo/GreenAnimatioStar";

const ContentPage = () => {
  const { sections, loading } = useCourseContent();

  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const setLesson = useLanguageStore((state) => state.setLesson);
 

  // const handleStart = () => {
  //   setLesson("lesson-1"); 
  //   navigate('/lesson');
  // };
 
  

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
  

  const section = sections[0];

  return (
    <>
    <Container size="sm"   mx={80} py="xl"  style={{
    width: 592,
    height: 533,
  }}>
    <SectionHeader/>
        <Stack spacing="md" mt={20} direction="row">
          {/* First image with background */}
          {/* <Popover
            opened={opened}
            onChange={setOpened}
            position="bottom"
            withArrow
            shadow="md"
          >
            <Popover.Target>
              <Box
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: '#58cc02',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '170px',
                  cursor: 'pointer',
                }}
                onClick={() => setOpened((o) => !o)}
              >
                <img
                  src={whitestar}
                  alt="star"
                  style={{
                    width: '50%',
                    height: '50%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              </Box>
            </Popover.Target>

            <Popover.Dropdown>
              <Button
                color="#52c002"
                fullWidth
                onClick={handleStart}
              >
                Start
              </Button>
            </Popover.Dropdown>
          </Popover> */}
          <GreenAnimationStar/>

          {/* Second image */}
          {/* <Box
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: "140px"
            }}
          >
            <img
              src={star}
              alt="Image 2"
              style={{
                width: '50%',
                height: '50%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </Box> */}
          <Box>
            <AnimatedImage/>
          </Box>

          {/* Third image with bird */}
          <Box style={{ position: 'relative', marginLeft: '120px' }}>
      
            <Box
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* <AnimatedImage/> */}
              <img
                src={star}
                alt="Star"
                style={{
                  width: '50%',
                  height: '50%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
              <img
                src={hellobird}
                alt="Bird"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 'calc(100% + 180px)',
                  transform: 'translateY(-50%)',
                  width: 210,
                  height: 170,
                }}
              />
            </Box>
          </Box>

          {/* Fourth image */}
          <Box
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: "140px"
            }}
          >
            <img
              src={giftbox}
              alt="Image 3"
              style={{
                width: '50%',
                height: '50%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </Box>

          {/* Fifth image */}
          <Box
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: "170px"
            }}
          >
            <img
              src={troffi}
              alt="Image 4"
              style={{
                width: '50%',
                height: '50%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </Box>
        </Stack>
        <Box
  style={{
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: 368,   // ✅ fixed width
    height: 717,  // ✅ fixed height
  }}
>
  <Card shadow="md" padding="md" radius="md" withBorder style={{ width: "100%" }}>
    <Text>Card 1</Text>
    <Button size="xs" mt="xs">Action</Button>
  </Card>

  <Card shadow="md" padding="md" radius="md" withBorder style={{ width: "100%" }}>
    <Text>Card 2</Text>
    <Button size="xs" mt="xs">Action</Button>
  </Card>

  <Card shadow="md" padding="md" radius="md" withBorder style={{ width: "100%" }}>
    <Text>Card 3</Text>
    <Button size="xs" mt="xs">Action</Button>
  </Card>
</Box>

      
      </Container>
    </>
  );
};

export default ContentPage;
