import * as  React from 'react';
import * as  ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light"  theme={{
        fontFamily: 'DIN Round, sans-serif',
      }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
