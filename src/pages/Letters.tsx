import React, { useEffect, useState } from "react";
import { db } from "../assets/firebaseConfig";
import { Box, Title, Grid, Button, Loader, Center } from "@mantine/core";
import { doc, getDoc } from "firebase/firestore";

type LettersData = {
  vowels: string[];
  consonants: string[];
  borrowed: string[];
};

const Letters = () => {
  const [letters, setLetters] = useState<LettersData>({
    vowels: [],
    consonants: [],
    borrowed: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLetters = async () => {
      try {
        const docRef = doc(db, "letters", "hindi");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setLetters({
            vowels: Array.isArray(data.vowels)
              ? data.vowels.map(v => v.replace(/["']/g, "").trim())
              : [],
            consonants: Array.isArray(data.consonants)
              ? data.consonants.map(v => v.replace(/["']/g, "").trim())
              : [],
            borrowed: Array.isArray(data.borrowed)
              ? data.borrowed.map(v => v.replace(/["']/g, "").trim())
              : [],
          });
        }
      } catch (error) {
        console.error("Firestore fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLetters();
  }, []);

  const playSound = (letter: string) => {
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.lang = "hi-IN";
    speechSynthesis.speak(utterance);
  };

  const renderSection = (title: string, letters: string[]) => (
    <Box mb="xl">
      <Title order={3} mb="md" style={{ color: "#424242" }}>
        {title}
      </Title>

      <Grid gutter="sm">
        {letters.map((letter, index) => (
          <Grid.Col
            key={index}
            span={2} // 2 columns wide on base size
            xs={1}   // 1 column on small screens
            sm={1}   // 1 column on medium screens
            md={1}   // 1 column on large screens
            lg={1}   // adjust if needed
          >
            <Button
              onClick={() => playSound(letter)}
              size="xl"
              variant="outline"
              radius="lg"
              style={{
                width: "80%",
                height: 50,
                fontSize: 28,
                fontWeight: 500,
                color: "#757575",
          

                borderColor: "#e0e0e0",
              }}
            >
              {letter}
            </Button>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );

  if (loading) {
    return (
      <Center mt="xl">
        <Loader size="xl" />
      </Center>
    );
  }

  return (
    <Box p="xl" style={{ maxWidth: 800, margin: "0 auto" }}>
      <Title order={2} mb="lg" style={{ textAlign: "center", color: "#424242" }}>
        Lets 
        Learn Hindi
      </Title>

      {renderSection("स्वर (Vowels)", letters.vowels)}
      {renderSection("व्यंजन (Consonants)", letters.consonants)}
      {renderSection("उधार लिए गए अक्षर (Borrowed Characters)", letters.borrowed)}
    </Box>
  );
};

export default Letters;
