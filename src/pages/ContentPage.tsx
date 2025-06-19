import React from "react";
import { Box, Button, Container, Loader, Title, Stack, Paper, Group } from "@mantine/core";
import { useCourseContent } from "../hooks/useCourseContent";
import { IconBook, IconNotebook, IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ContentPage = () => {
  const { sections, loading } = useCourseContent();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Container size="md" style={{ textAlign: "center", marginTop: "100px" }}>
        <Loader size="lg" color="green" />
      </Container>
    );
  }

  return (
    <Container size="md" py="xl">
      <Title order={2} mb="lg" style={{ color: "#58cc02", textAlign: "center" }}>
        📚 Your Hindi Course
      </Title>

      <Stack>
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Paper shadow="md" p="md" mb="lg" radius="lg" withBorder>
              <Title order={3} style={{ color: "#388e3c" }} mb="sm">
                <IconBook style={{ marginRight: 8 }} /> {section.name}
              </Title>

              {section.units.map((unit, uidx) => (
                <Box key={unit.id} ml="md" mb="md">
                  <Title order={4} style={{ color: "#4caf50" }} mb="xs">
                    <IconNotebook style={{ marginRight: 8 }} /> {unit.name}
                  </Title>

                  <Group spacing="sm">
                    {unit.lessons.map((lesson) => (
                      <Button
                        key={lesson.id}
                        variant="light"
                        color="green"
                        radius="md"
                        size="md"
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        leftIcon={<IconCheck />}
                        onClick={() => navigate(`/lesson/${lesson.id}`)}
                      >
                        {lesson.name}
                      </Button>
                    ))}
                  </Group>
                </Box>
              ))}
            </Paper>
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
};

export default ContentPage;
