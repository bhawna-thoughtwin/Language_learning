// MainLayout.tsx
import React from "react";
import Sidebar from "../layouts/Sidebar";// adjust the path
import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";

const MainLayout = () => {
  return (

    <Box
    style={{
      display: "flex",
      height: "100vh",
      overflow: "hidden",
    }}
  >
    {/* ✅ Fixed sidebar */}
    <Box
      style={{
        width: 251,
        height: "100vh",
        position: "fixed",  // ✅ this makes it fixed!
        left: 0,
        top: 0,
        bottom: 0,
        overflowY: "auto",
        borderRight: "1px solid #ddd", // optional: subtle divider
        backgroundColor: "#fff",       // optional: background
        zIndex: 1000,                   // stay above content
      }}
    >
      <Sidebar />
    </Box>

    {/* ✅ Content area with left margin = sidebar width */}
    <Box
      style={{
        marginLeft: 251,                  // ✅ push content beside sidebar
        flex: 1,
        minWidth: 0,
        height: "100vh",
        overflowY: "auto",
        padding: "0px 24px 24px 24px",    // ✅ Duolingo-style padding
      }}
    >
      <Outlet />
    </Box>
  </Box>

  );
};

export default MainLayout;
