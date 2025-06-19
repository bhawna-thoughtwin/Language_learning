import React, { useState, useEffect } from "react";
import {
  Box,
  NavLink,
  Stack,
  Image as MantineImage,
  Text,
  Menu,
  Flex,
} from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../assets/firebaseConfig";
import { signOut } from "firebase/auth";


import homeicon from "../assets/homeicon.svg";
import profileicon from "../assets/profileicon.svg";
import shop from "../assets/shop.svg";
import quests from "../assets/quests.svg";
import moreIcon from "../assets/more.svg";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const user = auth.currentUser;
  const location = useLocation();

  const links = [
    { label: "LEARN", image: homeicon, path: "/learn" },
    { label: "QUESTS", image: quests, path: "/quests" },
    { label: "SHOP", image: shop, path: "/shop" },
    { label: "PROFILE", image: profileicon, path: "/profile" },
  ];

  useEffect(() => {
    const current = links.find((link) => link.path === location.pathname);
    setActive(current ? current.label : "LEARN");
  }, [location.pathname]);

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

      <MantineImage
        src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg"
        alt="Duolingo Logo"
        style={{ width: "130px", marginBottom: 40, marginTop: 30 }}
      />


      <Stack spacing="md" style={{ width: "80%", gap: "20px" }}>
        {links.map((link) => (
          <NavLink
            key={link.label}
            label={
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: active === link.label ? "2px solid rgb(13, 134, 182)" : "none",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  gap: "12px",
                }}
              >
                {/* LEFT: Image */}
                <Box style={{ flexShrink: 0 }}>
                  <MantineImage
                    src={link.image}
                    width={28}
                    height={28}
                    fit="contain"
                  />
                </Box>

                {/* RIGHT: Text */}
                <Box style={{ flexGrow: 1 }}>
                  <Text size="md" color="#4B4B4B" fw={600} style={{ lineHeight: 1 }}>
                    {link.label}
                  </Text>
                </Box>
              </Box>
            }
            active={active === link.label}
            onClick={() => {
              setActive(link.label);
              navigate(link.path);
            }}
            styles={{
              root: {
                borderRadius: 10,
                margin: "0 12px",
                padding: 0, // all padding done inside label Box
              },
            }}
            variant={active === link.label ? "light" : "subtle"}
          />
        ))}



        <Menu shadow="md" width={200} position="right-start">
          <Menu.Target>
            <NavLink
              label={
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: active === "MORE" ? "2px solid rgb(13, 134, 182)" : "none",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    gap: "12px",
                  }}
                >
                  {/* LEFT: Image */}
                  <Box style={{ flexShrink: 0 }}>
                    <MantineImage
                      src={moreIcon}
                      width={28}
                      height={28}
                      fit="contain"
                    />
                  </Box>

                  {/* RIGHT: Text */}
                  <Box style={{ flexGrow: 1 }}>
                    <Text size="md" color="#4B4B4B" fw={600} style={{ lineHeight: 1 }}>
                      MORE
                    </Text>
                  </Box>
                </Box>
              }
              active={active === "MORE"}
              onClick={() => setActive("MORE")}
              styles={{
                root: {
                  borderRadius: 10,
                  margin: "0 12px",
                  padding: 0, // same as others: no padding on root, only on custom box
                },
              }}
              variant={active === "MORE" ? "light" : "subtle"}
            />
          </Menu.Target>

          <Menu.Dropdown>
            {user ? (
              <>
                <Menu.Item onClick={() => navigate("/create-profile")}>
                  Create Profile
                </Menu.Item>
                <Menu.Item onClick={() => navigate("/settings")}>
                  Settings
                </Menu.Item>
                <Menu.Item color="red" onClick={handleLogout}>
                  Logout
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item
                  onClick={() => navigate("/signup", { state: { from: location.pathname } })}
                >
                  Sign Up
                </Menu.Item>
                <Menu.Item onClick={() => navigate("/settings")}>
                  Settings
                </Menu.Item>
              </>
            )}
          </Menu.Dropdown>

        </Menu>

      </Stack>
    </Box>
  );
};

export default Sidebar;
