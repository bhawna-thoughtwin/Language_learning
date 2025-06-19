// LessonPage.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../assets/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Container, Button, Loader, Title, Stack, Paper } from "@mantine/core";
import { useLanguageStore } from "../store/useLanguageStore";

interface Question {
  id: string;
  text: string;
  options: string[];
  answer: string;
}

const LessonPage = () => {
  const { lessonId } = useParams();
  const { language } = useLanguageStore();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      // 🗂️ Assume you have: questions inside the lesson
      const questionsRef = collection(db, `languages/${language}/sections/basics-1/units/unit-1/lessons/${lessonId}/questions`);
      const snapshot = await getDocs(questionsRef);
      const q = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Question[];
      setQuestions(q);
      setLoading(false);
    };

    fetchQuestions();
  }, [language, lessonId]);

  if (loading) return <Loader />;

  return (
    <Container size="sm" py="xl">
      <Title order={2} mb="md">
        Lesson: {lessonId}
      </Title>

      {!started ? (
        <Button color="green" size="lg" radius="md" onClick={() => setStarted(true)}>
          Start Lesson
        </Button>
      ) : (
        <Stack spacing="md">
          {questions.map((q, idx) => (
            <Paper key={q.id} shadow="xs" p="md" withBorder>
              <Title order={4}>
                Q{idx + 1}: {q.text}
              </Title>
              <ul>
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
            </Paper>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default LessonPage;
