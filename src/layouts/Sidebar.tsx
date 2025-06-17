// Sidebar.tsx
import React, { useState } from "react";
import { Box, NavLink, Stack, Image } from "@mantine/core";
import {
  IconHome,
  IconLanguage,
  IconShieldCheck,
  IconDiamond,
  IconShoppingCart,
  IconUser,
  IconDotsVertical,
} from "@tabler/icons-react";

const Sidebar = () => {
  const [active, setActive] = useState("Learn");

  const links = [
    { label: "LEARN", icon: IconHome },
    { label: "LETTERS", icon: IconLanguage },
    { label: "LEADERBOARDS", icon: IconShieldCheck },
    { label: "QUESTS", icon: IconDiamond },
    { label: "SHOP", icon: IconShoppingCart },
    { label: "PROFILE", icon: IconUser },
    { label: "MORE", icon: IconDotsVertical },
  ];

  return (
    <Box
      style={{
        width: 240,
        height: "100vh",
        backgroundColor: "#f9f9f9",
        borderRight: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      {/* Logo */}
      <Image
        src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg"
        alt="Duolingo Logo"
        style={{ width: "130px", marginBottom: 40,marginTop:30 }}
      />

      {/* Nav Links */}
      <Stack spacing="md" style={{ width: "80%" }}>
        {links.map((link) => (
          <NavLink
            key={link.label}
            label={link.label}
            icon={<IconHome size={20} />}
            active={active === link.label}
            onClick={() => setActive(link.label)}
            styles={{
              root: {
           
                borderRadius: 10,
                margin: "0 12px",
              },
              label: {
                color:"#4B4B4B",
                fontWeight: 650,
                fontSize: "16px",
              },
              icon: {
                color: active === link.label ? "#bbdefb" : "inherit",
                border: active === link.label ? "1px solid rgb(74, 148, 207)" : "none",
              },
            }}
            color="blue"
            variant={active === link.label ? "light" : "subtle"}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
