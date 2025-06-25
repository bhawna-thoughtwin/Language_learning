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
  Container
} from "@mantine/core";
import { useLanguageStore } from "../store/useLanguageStore";
import { IconVolume2, IconX } from "@tabler/icons-react";
import heart from "../assets/heart.svg";
import bird6 from "../assets/bird6.svg";

/* Reusable MultipleChoice component */
const MultipleChoice = ({ content, onAnswer, selected, withLetter }) => {
  const speakLetter = (letter) => {
    const utterance = new SpeechSynthesisUtterance(letter);
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

/* TopBar with cross, progress, heart */
const TopBar = ({ progress, onExit }) => (
  <Box p="md" style={{ maxWidth: 600, margin: "20px auto" }}>
    <Flex align="center" gap="sm">
      <ActionIcon
        variant="subtle"
        color="dark"
        onClick={onExit}
        style={{ flex: "0 0 auto" }}
      >
        <IconX size={20} />
      </ActionIcon>

      <Box style={{ flex: "1 1 auto" }}>
        <Progress value={progress} />
      </Box>

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

/*  Main LessonPage */
const LessonPage = () => {
  const navigate = useNavigate();
  const lessonId = useLanguageStore((state) => state.lesson);

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); 

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

  const handleAnswer = (answer) => {
    if (!hasStarted) setHasStarted(true); 
    setSelected(answer);
  };

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

  const handleExit = () => {
    if (hasStarted) {
      setExitModalOpen(true);
    } else {
      navigate("/learn"); 
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
    <Container size="sm" p="md">
      <TopBar progress={progress} onExit={handleExit} />

      <MultipleChoice
        content={currentQuestion.content}
        onAnswer={handleAnswer}
        selected={selected}
        withLetter={currentQuestion.type === "multiple-choice-letter"}
      />

      <Button
        mt="xl"
        disabled={!selected}
        onClick={handleContinue}
        fullWidth
      >
        {currentIndex === questions.length - 1 ? "Finish" : "Continue"}
      </Button>

      <Modal
        opened={exitModalOpen}
        onClose={() => setExitModalOpen(false)}
        withCloseButton={false}
        centered
        radius="md"
        padding="xl"
        size="md"
        styles={{
          body: { textAlign: "center" },
        }}
      >

        <Image
          src={bird6}  
          alt="Sad bird"
          width={20}
          height={120} 
          fit="contain"
          style={{ margin: "0 auto" }}
          mb="md"
        />

        <Text color="black" mb="xl" style={{ fontSize: 25, fontWeight: 500 }}>
          Wait, don’t go! You’ll lose your progress if you quit now.
        </Text>

        <Stack align="center" spacing="md">
          <Button
            variant="filled"   
            color="blue"      
            radius="md"        
            px="lg"            
            py="sm"           
            onClick={() => setExitModalOpen(false)}
            fullWidth
          >
            KEEP LEARNING
          </Button>


          <Button
            variant="subtle"  
            color="red"
            onClick={() => navigate("/learn")}
            fullWidth
          >
            END LESSON
          </Button>

        </Stack>

      </Modal>


    </Container>
  );
};

export default LessonPage;
