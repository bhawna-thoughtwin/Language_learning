import React from 'react';
import { Box, Group, Image } from '@mantine/core';
import logoDuolingo from "../assets/logoDuolingo.svg";
import LanguageSwitcher from '../components/LanguageSwitcher';

const Header = () => {
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
      <Box ml="240">
        <Image src={logoDuolingo} alt="Duolingo Clone" height={40} fit="contain" />
      </Box>

      <LanguageSwitcher /> 
    </Box>
  );
};

export default Header;
