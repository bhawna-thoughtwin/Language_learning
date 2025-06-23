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
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useCourseContent } from "../hooks/useCourseContent";
import star from "../assets/star.svg";
import troffi from "../assets/troffi.svg";
import giftbox from "../assets/giftbox.svg";
import whitestar from "../assets/whitestar.svg";
import hellobird from "../assets/hellobird.webp";
import { useLanguageStore } from "../store/useLanguageStore";


const ContentPage = () => {
  const { sections, loading } = useCourseContent();

  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const setLesson = useLanguageStore((state) => state.setLesson);
 

  const handleStart = () => {
    setLesson("lesson-1"); 
    navigate('/lesson');
  };
 
  

  if (loading) {
    return (
      <Container size="md" style={{ textAlign: "center", marginTop: "100px" }}>
        <Loader size="lg" color="blue" />
      </Container>
    );
  }
  if (!sections) {
    return (
      <Container size="md" style={{ textAlign: "center", marginTop: "100px" }}>
        <Title>No section found</Title>
      </Container>
    );
  }

  const section = sections[0];

  return (
    <>
      <Container size="sm" py="xl">
        <Paper
          shadow="md"
          p="lg"
          radius="lg"
          style={{
            backgroundColor: "#e8f5e9",
          }}
        >

      
          <Group mb="md" style={{ cursor: "pointer" }} onClick={() => navigate("/sections")}>
            <ActionIcon
              variant="subtle"
              size="lg"
            >
              <IconArrowBack size={24} />
            </ActionIcon>
            <Title order={5} style={{ marginLeft: "4px", color: "#4caf50" }}>
              {section.type}
            </Title>
          </Group>

          {/* Section Name */}
          {/* <Title order={3} mb="md" style={{ color: "#4caf50" }}>
            {section.name}
          </Title> */}

          {/* Lessons */}
          {/* <Stack spacing="md">
            {section.units.flatMap((unit) =>
              unit.lessons.map((lesson) => (
                <Button
                  key={lesson.id}
                  variant="filled"
                  color="green"
                  radius="md"
                  size="md"
                  fullWidth
                  onClick={() => navigate(`/lesson/${lesson.id}`)}
                >
                  {lesson.name}
                </Button>
              ))
            )}
          </Stack> */}
        </Paper>
      </Container>
      <Container size="sm" py="xl">
        <Stack spacing="md" direction="row">
          {/* First image with background */}
          <Popover
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
          </Popover>

          {/* Second image */}
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
              src={star}
              alt="Image 2"
              style={{
                width: '50%',
                height: '50%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </Box>

          {/* Third image with bird */}
          <Box style={{ position: 'relative', marginLeft: '120px' }}>
            <Box
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
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
      </Container>
    </>
  );
};

export default ContentPage;
