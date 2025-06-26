// MainLayout.tsx
import React from "react";
import Sidebar from "../components/Sidebar";
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
    {/*Fixed sidebar */}
    <Box
      style={{
        width: 251,
        height: "100vh",
        position: "fixed",  
        left: 0,
        top: 0,
        bottom: 0,
        overflowY: "auto",
        borderRight: "1px solid #ddd", 
        backgroundColor: "#fff",       
        zIndex: 1000,                  
      }}
    >
      <Sidebar />
    </Box>

    {/*Content area with left margin = sidebar width */}
    <Box
      style={{
        marginLeft: 251,                
        flex: 1,
        minWidth: 0,
        height: "100vh",
        overflowY: "auto",
        padding: "0px 24px 24px 24px",   
      }}
    >
      <Outlet />
    </Box>
  </Box>

  );
};

export default MainLayout;
