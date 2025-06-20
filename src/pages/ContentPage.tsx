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
  Popover
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useCourseContent } from "../hooks/useCourseContent";
import star from "../assets/star.svg";
import troffi from "../assets/troffi.svg";
import giftbox from "../assets/giftbox.svg";
import whitestar from "../assets/whitestar.svg";
import hellobird from "../assets/hellobird.webp";

const ContentPage = () => {
  const { sections, loading } = useCourseContent();
 
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/lesson/1'); 
  };

  if (loading) {
    return (
      <Container size="md" style={{ textAlign: "center", marginTop: "100px" }}>
        <Loader size="lg" color="blue" />
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

          <ActionIcon
            variant="subtle"
            size="lg"
            onClick={() => navigate(-1)}
            mb="md"
          >
            <IconArrowBack size={24} />
          </ActionIcon>

          {/* Section Name */}
          <Title order={3} mb="md" style={{ color: "#4caf50" }}>
            {section.name}
          </Title>

          {/* Lessons */}
          <Stack spacing="md">
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
          </Stack>
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
                  cursor: 'pointer', // 👈 makes it clear it's clickable
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

          {/* Second image with same background */}
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

          {/* Third image with same background */}
          <Box style={{ position: 'relative', marginLeft: '120px' }}>
            {/* Main circle with star */}
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
                  left: 'calc(100% + 180px)', // <-- add gap here
                  transform: 'translateY(-50%)',
                  width: 210,
                  height: 170,
                }}
              />
            </Box>



          </Box>
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

          {/* Fourth image with same background */}
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
