export const lightTheme = {
  bg: {
    primary: "#ffffff",
    secondary: "#f9fafb",
    tertiary: "#f3f4f6",
  },
  text: {
    primary: "#000000",
    secondary: "#6b7280",
    tertiary: "#9ca3af",
  },
  border: "#e5e5e5",
  accent: "#3b82f6",
  accentLight: "#dbeafe",
}

export const darkTheme = {
  bg: {
    primary: "#0f0f0f",
    secondary: "#1a1a1a",
    tertiary: "#2a2a2a",
  },
  text: {
    primary: "#ffffff",
    secondary: "#9ca3af",
    tertiary: "#6b7280",
  },
  border: "#333333",
  accent: "#3b82f6",
  accentLight: "#1e3a8a",
}

export function getTheme(isDark: boolean) {
  return isDark ? darkTheme : lightTheme
}
