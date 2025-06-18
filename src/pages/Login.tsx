// Sidebar.tsx

import React, { useState } from "react";
import {
  Box,
  NavLink,
  Stack,
  Image,
  Popover,
} from "@mantine/core";
import {
  IconHome,
  IconLanguage,
  IconShieldCheck,
  IconDiamond,
  IconShoppingCart,
  IconUser,
  IconDotsVertical,
  IconSettings,
  IconLogout,
  IconLogin,
  IconUserPlus,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../assets/firebaseConfig";

const Sidebar = () => {
  const [active, setActive] = useState("LEARN");
  const [moreOpened, setMoreOpened] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const links = [
    { label: "LEARN", icon: IconHome, path: "/learn" },
    { label: "LETTERS", icon: IconLanguage, path: "/letters" },
    { label: "LEADERBOARDS", icon: IconShieldCheck, path: "/leaderboards" },
    { label: "QUESTS", icon: IconDiamond, path: "/quests" },
    { label: "SHOP", icon: IconShoppingCart, path: "/shop" },
    { label: "PROFILE", icon: IconUser, path: "/profile" },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

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
        style={{ width: "130px", marginBottom: 40, marginTop: 30 }}
      />

      {/* Nav Links */}
      <Stack spacing="md" style={{ width: "80%" }}>
        {links.map((link) => (
          <NavLink
            key={link.label}
            label={link.label}
            icon={<link.icon size={20} />}
            active={active === link.label}
            onClick={() => {
              setActive(link.label);
              navigate(link.path);
            }}
            styles={{
              root: {
                borderRadius: 10,
                margin: "0 12px",
              },
              label: {
                color: "#4B4B4B",
                fontWeight: 650,
                fontSize: "16px",
              },
            }}
            variant={active === link.label ? "light" : "subtle"}
          />
        ))}

        {/* MORE with hover Popover */}
        <Popover
          opened={moreOpened}
          onClose={() => setMoreOpened(false)}
          width={180}
          position="right-start"
          withArrow
        >
          <Popover.Target>
            <NavLink
              label="MORE"
              icon={<IconDotsVertical size={20} />}
              active={active === "MORE"}
              onMouseEnter={() => {
                setActive("MORE");
                setMoreOpened(true);
              }}
              onMouseLeave={() => setMoreOpened(false)}
              styles={{
                root: {
                  borderRadius: 10,
                  margin: "0 12px",
                },
                label: {
                  color: "#4B4B4B",
                  fontWeight: 650,
                  fontSize: "16px",
                },
              }}
              variant={active === "MORE" ? "light" : "subtle"}
            />
          </Popover.Target>

          <Popover.Dropdown
            onMouseEnter={() => setMoreOpened(true)}
            onMouseLeave={() => setMoreOpened(false)}
          >
            <Box>
              <NavLink
                label="Create Profile"
                icon={<IconUserPlus size={18} />}
                onClick={() => navigate("/create-profile")}
              />
              <NavLink
                label="Settings"
                icon={<IconSettings size={18} />}
                onClick={() => navigate("/settings")}
              />
              {user ? (
                <NavLink
                  label="Logout"
                  icon={<IconLogout size={18} />}
                  onClick={handleLogout}
                />
              ) : (
                <NavLink
                  label="Sign Up"
                  icon={<IconLogin size={18} />}
                  onClick={() => navigate("/signup")}
                />
              )}
            </Box>
          </Popover.Dropdown>
        </Popover>
      </Stack>
    </Box>
  );
};

export default Sidebar;
