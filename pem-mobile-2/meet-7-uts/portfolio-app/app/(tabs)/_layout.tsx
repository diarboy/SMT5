"use client"

import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { useTheme } from "@/context/theme-context"
import { Home, Briefcase, Mail } from "lucide-react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function TabsLayout() {
  const { isDark } = useTheme()
  const colorScheme = useColorScheme()

  const insets = useSafeAreaInsets()

  const tabBarBg = isDark ? "#1a1a1a" : "#ffffff"
  const tabBarBorder = isDark ? "#333333" : "#e5e5e5"
  const activeColor = "#CC7755"
  const inactiveColor = isDark ? "#9ca3af" : "#6b7280"

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tabBarBg,
          borderTopColor: tabBarBorder,
          borderTopWidth: 1,
          height: 70 + insets.bottom,
          paddingBottom: 10 + insets.bottom,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color, size }) => <Briefcase size={size} color={color} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => <Mail size={size} color={color} strokeWidth={2} />,
        }}
      />
    </Tabs>
  )
}
