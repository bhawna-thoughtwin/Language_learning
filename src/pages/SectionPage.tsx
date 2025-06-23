import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../assets/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import {
    Box,
    Paper,
    Text,
    Title,
    Loader,
    Stack,
    Button,
    Group,
    Image,
    Flex,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import arrowimage from "../assets/arrowimage.svg";
const images = import.meta.glob("../assets/*.{png,svg,jpg}", {
    eager: true,
    as: "url",
});

interface Section {
    id: string;
    text: string;
    image: string;
}

const SectionsPage = () => {
    const [sections, setSections] = useState<Section[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchSections = async () => {
            try {
                const snapshot = await getDocs(
                    collection(db, "languages/hindi/sections")
                );
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    text: doc.get("text"),
                    image: doc.get("image"),
                }));
                setSections(data);
            } catch (error) {
                console.error("Error fetching sections:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSections();
    }, []);

    if (loading) return <Loader />;

    return (
        <Box p="lg">
            <Button
                variant="default"
                onClick={() => navigate("/learn")}
            >
                <img
                    src={arrowimage}
                    alt="Back"
                    style={{ width: 18, height: 18, marginRight: 8 }}
                />
                Back
            </Button>




            <Stack spacing="lg">
                {sections.map(section => (
                    <Paper
                        key={section.id}
                        shadow="md"
                        radius="md"
                        withBorder
                        p="lg"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderRadius: "12px",
                            overflow: "hidden",
                            width: 550,
                            maxWidth: "100%",
                        }}
                    >
                        <Flex
                            style={{ width: "100%" }}
                            justify="space-between"
                            align="center"
                        >
                            {/* LEFT SIDE */}
                            <Box style={{ width: 592 }}>
                                <Title order={4} mb="xs">
                                    {section.id}
                                </Title>

                                <Group mb="md">
                                    <Button
                                        variant="gradient"
                                        gradient={{ from: 'green', to: 'lime', deg: 90 }}
                                        onClick={() =>
                                            setExpandedId(
                                                expandedId === section.id ? null : section.id
                                            )
                                        }
                                    >
                                        {expandedId === section.id ? "Hide Details" : "See Details"}
                                    </Button>

                                </Group>

                                {expandedId === section.id && (
                                    <Text size="sm" color="dimmed">
                                        {section.text}
                                    </Text>
                                )}
                            </Box>

                            {/* RIGHT SIDE IMAGE */}
                            <Box style={{ width: 295 }}>
                                <Image
                                    src={images[`../assets/${section.image}`]}
                                    alt="Section"
                                    width="100%"
                                    radius="md"
                                    fit="cover"
                                />
                            </Box>
                        </Flex>
                    </Paper>
                ))}
            </Stack>
        </Box>
    );
};

export default SectionsPage;
