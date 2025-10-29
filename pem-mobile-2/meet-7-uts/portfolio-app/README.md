# Portfolio App - Expo React Native

## UTS Project - Semester 5

Name: **Ardiyansyah**
NPM: 623C0009
Lecture: **Mohammad Firdaus, M.Kom.**

I'm passionate about creating beautiful, functional digital products that solve real-world problems.
This portfolio app showcases my work as a full-stack developer and UI/UX designer. A modern, responsive portfolio application built with Expo, React Native, and TypeScript. Features a beautiful dark/light theme, floating tab navigation, and comprehensive project showcase.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Dark/Light Theme**: Full theme support with persistent storage
- **Responsive Layout**: Optimized for mobile and tablet devices
- **Three Main Screens**:
  - **Home**: Hero section with profile, skills, experience, projects preview, and analytics
  - **Projects**: Detailed project listing with individual project detail pages
  - **Contact**: Contact information and message form

## Tech Stack

- **Framework**: Expo with React Native
- **Language**: TypeScript
- **Styling**: Tailwind CSS (twrnc)
- **Navigation**: Expo Router
- **State Management**: Zustand (for theme)
- **Icons**: Lucide React Native

## Getting Started

cd pem-mobile-2/meet-7-uts/portfolio-app

### Prerequisites

- Node.js 16+
- Expo CLI: `npm install -g expo-cli`

### Installation

1. Clone the repository

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

4. Open in Expo Go app or press:
   - `i` for iOS simulator
   - `a` for Android emulator
   - `w` for web

## Features Breakdown

### Home Screen
- Profile hero section with avatar, name, title, and location
- About me section
- Experience timeline
- Skills with progress bars
- Featured projects carousel
- Analytics dashboard

### Projects Screen
- Grid/list view of all projects
- Project cards with tags
- Navigation to detailed project pages

### Project Detail
- Full project description
- Technology stack
- Results section with multiple images
- Call-to-action button

### Contact Screen
- Contact information display
- Social media links
- Contact form with validation
- Theme-aware styling

## Theme System

The app includes a comprehensive theme system:
- Automatic detection of system theme preference
- Manual theme toggle
- Persistent theme preference using AsyncStorage
- Consistent color palette across all screens

## Responsive Design

The app is fully responsive with:
- Mobile-first approach
- Tablet optimization
- Adaptive layouts based on screen size
- Flexible spacing and typography

## Performance Optimizations

- Lazy loading of project images
- Efficient re-renders with proper memoization
- Optimized ScrollView performance
- Minimal bundle size with tree-shaking

## Browser Support

Works on:
- iOS 13+
- Android 5+
- Web (via Expo Web)

## Support

For issues or questions, please open an issue in the repository.
