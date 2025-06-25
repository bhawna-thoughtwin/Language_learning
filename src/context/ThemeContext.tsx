// src/context/ThemeContext.tsx
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { useThemeStore } from '../store/useThemeStore';
import { useEffect } from "react";


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useThemeStore((s) => s.colorScheme);
  return (
    <>
      <ColorSchemeScript defaultColorScheme={colorScheme} />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          fontFamily: 'sans-serif',
          /** Add this manually: */
          globalStyles: (theme) => ({
            body: {
              backgroundColor: theme.colorScheme === 'dark' ? 'black' : '#FFFFFF',
              color: theme.colorScheme === 'dark' ? '#FFFFFF' : '#000000',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            },
          }),
        }}
      >
        {children}
      </MantineProvider>
    </>
  );
};


// ThemeContext.tsx
// import { MantineProvider, ColorSchemeScript } from '@mantine/core';
// import { useThemeStore } from '../store/useThemeStore';

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const colorScheme = useThemeStore((s) => s.colorScheme);

//   return (
//     <>
//       <ColorSchemeScript defaultColorScheme={colorScheme} />
//       <MantineProvider
//         withGlobalStyles
//         withNormalizeCSS
//         theme={{
//           colorScheme,
//           fontFamily: 'sans-serif',

//           /** 🎨 Customize default background and text */
//           colors: {
//             dark: ['#d5d7e0', '#acaebf', '#8c8fa3', '#666980', '#4d4f66', '#34354a', '#2b2c3d', '#1d1e30', '#0c0d21', '#01010a'],
//           },

//           components: {
//             /** Box, Text, Button, etc. */
//             Box: {
//               styles: (theme) => ({
//                 root: {
//                   backgroundColor: theme.colorScheme === 'dark' ? '#1A1B1E' : '#fff',
//                   color: theme.colorScheme === 'dark' ? '#fff' : '#000',
//                 },
//               }),
//             },
//             Text: {
//               styles: (theme) => ({
//                 root: {
//                   color: theme.colorScheme === 'dark' ? '#fff' : '#000',
//                 },
//               }),
//             },
//             Paper: {
//               styles: (theme) => ({
//                 root: {
//                   backgroundColor: theme.colorScheme === 'dark' ? '#2b2c3d' : '#f8f9fa',
//                 },
//               }),
//             },
//             Card: {
//               styles: (theme) => ({
//                 root: {
//                   backgroundColor: theme.colorScheme === 'dark' ? '#25262b' : '#ffffff',
//                   color: theme.colorScheme === 'dark' ? '#fff' : '#000',
//                 },
//               }),
//             },
//             Button: {
//               styles: (theme) => ({
//                 root: {
//                   color: theme.colorScheme === 'dark' ? '#fff' : '#000',
//                 },
//               }),
//             },
//           },
//         }}
//       >
//         {children}
//       </MantineProvider>
//     </>
//   );
// };
