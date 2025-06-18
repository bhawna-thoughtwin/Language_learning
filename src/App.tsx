// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignupPage from './pages/Signup';
import LanguageSelection from './pages/LanguageSelectionPage';
import WelcomePage from './pages/WelcomePage';
import LanguageLevelPage from './pages/LanguageLevelPage';
import MainLayout from './MainLayout/MainLayout';
import Sidebar from './layouts/Sidebar';

import Letters from './pages/Letters';
import LeaderBoard from './pages/LeaderBoard';
import ContentPage from './pages/ContentPage';

const App = () => (
  <Router>
    <Routes>
      {/* No sidebar */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/language-selection" element={<LanguageSelection />} />
      <Route path="/welcome/:language" element={<WelcomePage />} />
      

      {/* Sidebar layout */}
      <Route element={<MainLayout />}>
      <Route path="/learn" element={<ContentPage />} /> 
      <Route path="/letters" element={<Letters/>}/>
      <Route path="/lederboards" element={<LeaderBoard/>} />

      </Route>
    </Routes>
  </Router>
);

export default App;
