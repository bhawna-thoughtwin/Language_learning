// src/components/Header.tsx
import  * as React from 'react';
import {useState} from "react";
import { Box, Group, Image, Select } from '@mantine/core';
import logoDuolingo from "../assets/logoDuolingo.svg";

const Header = () => {
  const [language, setLanguage] = useState('English');

  return (
    <Box
      component="header"
      px="md"
      py="sm"
      style={{
        position: 'fixed',    
        top: 0,              
        left: 0,
        right: 0,             
        zIndex: 1000,     
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e9ecef',
        backgroundColor: 'white', 
      }}
    >
      {/* Logo */}
      <Box ml="240">
  <Image
    src={logoDuolingo}
    alt="Duolingo Clone"
    height={40}
    fit="contain"
  />
</Box>


      {/* Language dropdown */}
      <Select
        value={language}
        onChange={(value) => setLanguage(value!)}
        data={['English', 'Spanish', 'French', 'German']}
        placeholder="Select language"
        size="sm"
        withinPortal
      />
    </Box>
  );
};

export default Header;
