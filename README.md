# Duolingo-Style Language Learning App

Welcome to the **Duolingo-Style Language Learning App**! This project is a web-based language learning platform inspired by Duolingo, built using **React**, **Mantine UI**, **Firebase**, and **Zustand**. It provides an engaging and interactive way to learn languages with lessons, progress tracking, and animated UI elements.

---

## Features

### Multi-Language Support
- Learn multiple languages with structured lessons.
- Language selection page with flags and learner statistics.

###  Lesson Structure
- Section-based lessons organized into units.
- Lessons include multiple-choice questions, audio prompts, and typing exercises.

###  Progress Tracking
- Track completed lessons and units.
- Animated progress rings around interactive icons.

###  Interactive UI
- Animated birds, stars, and other elements for a fun learning experience.
- Sticky lesson info cards for easy navigation.

###  Authentication
- Firebase authentication for user login and signup.
- Google Sign-In support.

### Localization
- Multi-language support using `i18next` for translations.
- English and Hindi translations included.

###  State Management
- Zustand-powered global state for managing active units, lessons, and completed lessons.

---

##  Tech Stack

### Frontend
- **React**: Component-based UI development.
- **Mantine UI**: Modern and customizable UI components.
- **Framer Motion**: Smooth animations for interactive elements.

### Backend
- **Firebase Firestore**: Structured database for storing lessons, sections, and units.
- **Firebase Authentication**: Secure user authentication.

### State Management
- **Zustand**: Lightweight global state management.

---

##  Folder Structure

Workspace
Collecting workspace information

src/ │ ├── assets/ # Static images, gifs, and fonts ├── components/ # Reusable UI components (cards, animated icons, etc.) ├── context/ # Auth and Theme context providers ├── pages/ # Page-level components (ContentPage, LessonPage, SettingPage, etc.) ├── store/ # Zustand global state stores ├── hooks/ # Custom hooks (e.g., useCourseContent) ├── locales/ # Translation files (i18next for language support) ├── App.tsx # Main app routes ├── main.tsx # Entry point


---

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourrepo.git
   cd yourrepo
Install dependencies:
npm install
Set up Firebase:

Create a Firebase project.
Enable Firestore and Authentication.
Add your Firebase configuration to the .env file:
VITE_API_KEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_APPID=your_app_id