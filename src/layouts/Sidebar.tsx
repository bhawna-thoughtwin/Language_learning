// Sidebar.tsx
import React, { useState } from "react";
import {
  Box,
  NavLink,
  Stack,
  Image,
  Menu,
  Button,
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
import {auth} from "../assets/firebaseConfig"; 
import { signOut } from "firebase/auth";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Learn");
  const navigate = useNavigate();
  const user = auth.currentUser; 
  const location = useLocation();

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
              icon: {
                color: active === link.label ? "#bbdefb" : "inherit",
                border: active === link.label ? "1px solid rgb(74, 148, 207)" : "none",
              },
            }}
            color="blue"
            variant={active === link.label ? "light" : "subtle"}
          />
        ))}

        {/* MORE with Menu */}
        <Menu shadow="md" width={200} position="right-start">
          <Menu.Target>
            <NavLink
              label="MORE"
              icon={<IconDotsVertical size={20} />}
              active={active === "MORE"}
              onClick={() => setActive("MORE")}
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
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              icon={<IconUserPlus size={18} />}
              onClick={() => navigate("/create-profile")}
            >
              Create Profile
            </Menu.Item>

            <Menu.Item
              icon={<IconSettings size={18} />}
              onClick={() => navigate("/settings")}
            >
              Settings
            </Menu.Item>

            {user ? (
              <Menu.Item
                icon={<IconLogout size={18} />}
                onClick={handleLogout}
                color="red"
              >
                Logout
              </Menu.Item>
            ) : (
              <Menu.Item
                icon={<IconLogin size={18} />}
                onClick={() => navigate("/signup", { state: { from: location.pathname } })}

                color="green"
              >
                Sign Up
              </Menu.Item>
            )}
          </Menu.Dropdown>
        </Menu>
      </Stack>
    </Box>
  );
};

export default Sidebar;
