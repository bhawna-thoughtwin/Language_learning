import * as  React from 'react';
import * as  ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './i18n';
import { AuthProvider } from './context/userAuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <AuthProvider>
   <MantineProvider defaultColorScheme="light"  theme={{
        fontFamily: 'DIN Round, sans-serif',
      }}>
      <App />
    </MantineProvider>
   </AuthProvider>
  </React.StrictMode>
);
