import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../services/firebaseConfig";
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
import { Divider } from "@mantine/core";
import giphy from "../assets/giphy.gif";

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
            <Title order={1} style={{ fontSize: 120 ,fontWeight:300}}>
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


const TopBar = ({ progress, onExit, hearts }) => (
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

      <Flex align="center" gap={4} style={{ flex: "0 0 auto" }}>
        <Image
          src={heart}
          alt="heart"
          width={20}
          height={20}
          style={{ objectFit: "contain", display: "block" }}
        />
        <span style={{ fontSize: 18, fontWeight: 600, color: "red" }}>{hearts}</span>
      </Flex>
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
  const [mistakeModalOpen, setMistakeModalOpen] = useState(false);
  const [hearts, setHearts] = useState(5);
  const [lessonCompleteModalOpen, setLessonCompleteModalOpen] = useState(false);
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
        setLessonCompleteModalOpen(true);
      }
    }else {
      setHearts((prev) => Math.max(prev - 1, 0));
      setMistakeModalOpen(true); 
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
  <TopBar progress={progress} onExit={handleExit}  hearts={hearts}  />

  <MultipleChoice
    content={currentQuestion.content}
    onAnswer={handleAnswer}
    selected={selected}
    withLetter={currentQuestion.type === "multiple-choice-letter"}
  />

  {/* Horizontal line */}
  <Divider my="lg" />
   <Button
    mt="xl"
    disabled={!selected}
    color="green"
    onClick={handleContinue}
    fullWidth
    borderRadius="md"
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
    size="sm"
    styles={{
      body: { textAlign: "center" },
    }}
  >
    <Image
      src={bird6}
      alt="Sad bird"
      fit="contain"
      style={{
        width: "120px",
        height: "170px",
        margin: "0 auto",
        marginBottom: "16px",
      }}
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
  <Modal
  opened={mistakeModalOpen}
  onClose={() => setMistakeModalOpen(false)}
  withCloseButton={false}
  centered
  radius="md"
  padding="xl"
  size="sm"
  styles={{
    body: { textAlign: "center" },
  }}
>
  <Image
    src={heart}
    alt="heart"
    fit="contain"
    style={{
      width: "60px",
      height: "60px",
      margin: "0 auto",
      marginBottom: "16px",
    }}
  />

  <Text color="red" mb="md" style={{ fontSize: 20, fontWeight: 600 }}>
    Oops! Each mistake costs 1 heart.
  </Text>

  <Button
    variant="filled"
    color="blue"
    radius="md"
    fullWidth
    onClick={() => setMistakeModalOpen(false)}
  >
    KEEP GOING
  </Button>
</Modal>
<Modal
  opened={lessonCompleteModalOpen}
  onClose={() => setLessonCompleteModalOpen(false)}
  withCloseButton={false}
  centered
  radius="md"
  padding="xl"
  size="sm"
  styles={{
    body: { textAlign: "center" },
  }}
>
  <Image
    src={giphy}
    alt="Bird"
    fit="contain"
    style={{
      width: "170px",
      height: "190px",
      margin: "0 auto",
      marginBottom: "16px",
    }}
  />

  <Text color="green" mb="md" style={{ fontSize: 24, fontWeight: 600 }}>
    Lesson Completed!
  </Text>

  <Text color="black" mb="xl" style={{ fontSize: 16 }}>
    Great job finishing the lesson. Keep practicing to improve your skills.
  </Text>

  <Button
    variant="filled"
    color="green"
    fullWidth
    onClick={() => navigate("/learn")}
  >
    CONTINUE
  </Button>
</Modal>


</Container>

  );
};

export default LessonPage;
