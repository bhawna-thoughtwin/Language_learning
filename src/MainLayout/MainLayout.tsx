// MainLayout.tsx
import React from "react";
import Sidebar from "../layouts/Sidebar";// adjust the path
import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";

const MainLayout = () => {
  return (
 
    <Box style={{ display: "flex",height: "100vh" }}>
      <Sidebar />
      <Box style={{
      flex: 1,
      height: "100%",          
      overflowY: "auto",      
      padding: 20,
    }}>
        <Outlet /> {/* This renders child routes */}
      </Box>
    </Box>
  );
};

export default MainLayout;
