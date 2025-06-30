## Getting Started

1. Clone the repo:
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo

2. npm install


3. rm -rf node_modules
4. npm install





## Duolingo-Style Language Learning App

A Duolingo-inspired web app built using **React**, **Mantine UI**, **Firebase**, and **Zustand**. It supports multi-language courses, lessons, animated UI, and progress tracking.

---

## Features

- Language and section-based lesson structure
-  Multi-step lessons (e.g. multiple-choice, audio, type)
-  Zustand-powered global state (active unit, selected lesson, completed lessons)
-  Firebase Firestore structured backend (`language/section/units` & `lessons`)
-  Progress bar around animated star icons
-  Sticky lesson info card on the right
-  

---
## folder struture
src/
│
├── assets/ # Static images, gifs
├── components/ # Reusable UI components (cards, animated icons, etc.)
├── context/ # Auth and Theme context providers
├── pages/ # Page-level components (ContentPage, LessonPage, SettingPage, etc.)
├── store/ # Zustand global state stores
├── hooks/ # Custom hooks (e.g. useCourseContent)
├── i18n/ # Translation files (i18next for language support)
├── App.tsx # Main app routes
├── main.tsx # Entry point



