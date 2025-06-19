// MainLayout.tsx
import React from "react";
import Sidebar from "../layouts/Sidebar";// adjust the path
import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";

const MainLayout = () => {
  return (
    <Box style={{ display: "flex" }}>
      <Sidebar />
      <Box style={{ flex: 1, padding: 20 }}>
        <Outlet /> {/* This renders child routes */}
      </Box>
    </Box>
  );
};

export default MainLayout;
