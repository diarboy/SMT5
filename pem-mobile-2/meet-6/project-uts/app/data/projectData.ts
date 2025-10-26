export interface projectsType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  year: string;
}

export const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    description: "A full-featured e-commerce mobile application built with React Native. Implemented secure payment integration, real-time inventory management, and user authentication.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    year: "2023"
  },
  {
    id: 2,
    title: "Weather Forecast App",
    description: "Real-time weather application with location tracking and 7-day forecast. Features include weather alerts, interactive maps, and offline capability.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800",
    technologies: ["React Native", "Weather API", "TypeScript", "Redux"],
    year: "2023"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative task management platform with real-time updates, team chat, and project analytics dashboard.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800",
    technologies: ["React", "Firebase", "Material UI", "Chart.js"],
    year: "2022"
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts, nutrition, and personal fitness goals. Includes social features and AI-powered workout recommendations.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800",
    technologies: ["React Native", "TensorFlow.js", "Firebase", "GraphQL"],
    year: "2023"
  },
  {
    id: 5,
    title: "Recipe Sharing Platform",
    description: "Social platform for food enthusiasts to share and discover recipes. Features include ingredient scanning and meal planning.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    year: "2022"
  },
  {
    id: 6,
    title: "Smart Home Control App",
    description: "IoT mobile application for controlling smart home devices. Includes voice commands and automated scheduling.",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800",
    technologies: ["React Native", "MQTT", "Node.js", "MongoDB"],
    year: "2023"
  }
];