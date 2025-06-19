import React, { useState } from "react";
import { Box, Title, Select, Stack, rem } from "@mantine/core";

const Setting = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

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
          value={mode}
          onChange={(value) => setMode(value as "light" | "dark")}
          styles={{
            label: {
              fontSize: rem(18),
              fontWeight: 600,
              marginBottom: rem(6),
            },
            input: {
              fontSize: rem(16),
              borderColor: "rgb(13, 134, 182)",
            },
          }}
     
          withinPortal
          itemComponent={({ data, ...others }) => (
            <div
              {...others}
              style={{
                padding: "8px 12px",
                backgroundColor:
                  data.value === mode ? "rgb(13, 134, 182)" : "transparent",
                color: data.value === mode ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {data.label}
            </div>
          )}
        />
      </Stack>
    </Box>
  );
};

export default Setting;
