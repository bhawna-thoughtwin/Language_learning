// src/pages/Setting.tsx
import { Box, Title, Select, Stack, rem } from "@mantine/core";
import { useThemeStore } from "../store/useThemeStore";

const Setting = () => {
  const colorScheme = useThemeStore((s) => s.colorScheme);
  const setColorScheme = useThemeStore((s) => s.setColorScheme);

  return (
    <Box p="lg" mx="auto" style={{ maxWidth: 400 }}>
      <Title order={2} mb="md" style={{ fontSize: rem(28) }}>
        Preferences
      </Title>

      <Stack>
        <Select
          label="Theme Mode"
          placeholder="Select mode"
          size="md"
          data={[
            { value: "light", label: "Light Mode" },
            { value: "dark", label: "Dark Mode" },
          ]}
          value={colorScheme}
          onChange={(value) => {
            if (value === "light" || value === "dark") {
              setColorScheme(value);
            }
          }}
        />
      </Stack>
    </Box>
  );
};

export default Setting;
