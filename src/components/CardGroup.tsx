import { Card, Text, Title, Stack, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function CardGroup() {
    const navigate = useNavigate();
    return (
        <Stack spacing="md">
            <Card
                shadow="sm"
                padding={18}
                radius="md"
                withBorder
                style={{ width: 368, height: 150 }}
            >
                <Title order={4} mb="xs">
                    Unlock Leaderboards!
                </Title>
                <Text size="sm" color="dimmed">
                    Complete 10 more lessons to start competing
                </Text>
            </Card>

            <Card
                shadow="sm"
                padding={18}
                radius="md"
                withBorder
                style={{ width: 368, height: 150 }}
            >
                <Title order={4} mb="xs">
                    Unlock Leaderboards!
                </Title>
                <Text size="sm" color="dimmed">
                    Complete 10 more lessons to start competing
                </Text>
            </Card>

            <Card
                shadow="sm"
                padding={18}
                radius="md"
                withBorder
                style={{ width: 368, height: 150 }}
            >
                <Title order={5} mb="xs">
                    Create a profile to save your progress!
                </Title>



                <Stack spacing={8}>
                    <Button
                        size="xs"
                        color="#58CC02"
                        fullWidth
                        onClick={() => navigate("/profile")}
                        style={{
                            padding: "6px 12px",
                            borderRadius: 8,
                        }}
                    >
                        Create Profile
                    </Button>
                    <Button
                        size="xs"
                        fullWidth
                        style={{
                            padding: "6px 12px",
                            borderRadius: 8,
                            backgroundColor: "#228be6", // Mantine's default blue
                            color: "#ffffff",           // White text
                        }}
                        onClick={() => navigate("/signup", { state: { from: location.pathname } })}
                    >
                        Sign Up
                    </Button>

                </Stack>
            </Card>

        </Stack>
    );
}
