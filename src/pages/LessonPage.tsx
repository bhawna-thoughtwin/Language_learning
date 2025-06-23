import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../assets/firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import {
  Box,
  Title,
  Button,
  Progress,
  Stack,
  Loader,
  Center,
  Group,
  Text,
  Modal,
  ActionIcon,
  Flex,
  Image,
} from "@mantine/core";
import { useLanguageStore } from "../store/useLanguageStore";
import { IconVolume2, IconX } from "@tabler/icons-react";
import heart from "../assets/heart.svg";


/*Reusable MultipleChoice component */
const MultipleChoice = ({ content, onAnswer, selected, withLetter }) => {
    const speakLetter = (letter) => {
      const utterance = new SpeechSynthesisUtterance(letter);
      // Optional: set voice/lang here if needed:
      // utterance.lang = "hi-IN";
      speechSynthesis.speak(utterance);
    };
  
    const letter = content.letter;
  
    return (
      <Box>
        <Title order={3} style={{ fontSize: 40, marginBottom: 20 }}>
          {content.prompt}
        </Title>
  
        <Flex gap="xl" align="flex-start">
          {withLetter && (
            <Flex direction="column" align="center">
              <Title order={1} style={{ fontSize: 120 }}>
                {letter}
              </Title>
  
              <ActionIcon
                variant="filled"
                color="blue"
                size="lg"
                onClick={() => speakLetter(letter)}
                mt="md"
              >
                <IconVolume2 size={24} />
              </ActionIcon>
            </Flex>
          )}
  
          <Stack>
            {content.options.map((opt) => (
              <Button
                key={opt}
                onClick={() => onAnswer(opt)}
                variant={selected === opt ? "filled" : "light"}
                fullWidth
              >
                {opt}
              </Button>
            ))}
          </Stack>
        </Flex>
      </Box>
    );
  };
  

const TopBar = ({ progress, onExit }) => (
    <Box p="md" style={{ maxWidth: 600, margin: "20px auto" }}>
  <Flex align="center" gap="sm">
    {/* Left: Cross icon */}
    <ActionIcon variant="subtle" color="dark" onClick={onExit} style={{ flex: "0 0 auto" }}>
      <IconX size={20} />
    </ActionIcon>

    {/* Center: Progress bar in a wrapper that grows */}
    <Box style={{ flex: "1 1 auto" }}>
      <Progress value={progress} />
    </Box>

    {/* Right: Heart icon, same size as cross */}
    <Box style={{ flex: "0 0 auto" }}>
      <Image
        src={heart}
        alt="heart"
        width={20}
        height={20}
        style={{ objectFit: "contain", display: "block" }}
      />
    </Box>
  </Flex>
</Box>

  
);

/* ✅ 3️⃣ Main LessonPage */
const LessonPage = () => {
  const navigate = useNavigate();
  const lessonId = useLanguageStore((state) => state.lesson);

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [exitModalOpen, setExitModalOpen] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, `languages/hindi/lessons/${lessonId}/questions`),
          orderBy("order")
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    if (lessonId) fetchQuestions();
  }, [lessonId]);

  const currentQuestion = questions[currentIndex];
  const progress = (currentIndex / questions.length) * 100;

  const handleAnswer = (answer) => setSelected(answer);

  const handleContinue = () => {
    const correct = currentQuestion.content.answer;
    if (selected === correct) {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((i) => i + 1);
        setSelected(null);
      } else {
        navigate("/learn");
      }
    } else {
      alert("Incorrect! Try again.");
    }
  };

  if (loading) {
    return (
      <Center mt="xl">
        <Loader size="xl" />
      </Center>
    );
  }

  if (!currentQuestion) return <Center>No questions found!</Center>;

  return (
    <Box p="xl" style={{ maxWidth: 600, margin: "0 auto" }}>
    
      <TopBar progress={progress} onExit={() => setExitModalOpen(true)} />

      {/*Question */}
      <MultipleChoice
        content={currentQuestion.content}
        onAnswer={handleAnswer}
        selected={selected}
        withLetter={currentQuestion.type === "multiple-choice-letter"}
      />

      {/*Continue */}
      <Button
        mt="xl"
        disabled={!selected}
        onClick={handleContinue}
        fullWidth
      >
        {currentIndex === questions.length - 1 ? "Finish" : "Continue"}
      </Button>

      {/*Exit modal */}
      <Modal
        opened={exitModalOpen}
        onClose={() => setExitModalOpen(false)}
        title="Exit Lesson?"
        centered
      >
        <Text>Are you sure you want to exit? Progress won't be saved.</Text>
        <Group position="apart" mt="md">
          <Button variant="default" onClick={() => setExitModalOpen(false)}>
            Cancel
          </Button>
          <Button color="red" onClick={() => navigate("/sections")}>
            Exit
          </Button>
        </Group>
      </Modal>
    </Box>
  );
};

export default LessonPage;
