"use client"
import { View, Text } from "react-native"
import tw from "twrnc"
import Ionicons from "@expo/vector-icons/Ionicons"
import Animated, { FadeInUp } from "react-native-reanimated"
import type { Experience } from "@/types"

interface ExperienceSectionProps {
  isDark: boolean
  experience: Experience[]
}

export default function ExperienceSection({ isDark, experience }: ExperienceSectionProps) {
  const textColor = isDark ? "#fff" : "#111"
  const secondaryText = isDark ? "#9ca3af" : "#6b7280"
  const bgCard = isDark ? "#1a1a1a" : "#ffffff"
  const borderLeft = isDark ? "#3b82f6" : "#2563eb"

  const iconMap = [
    "school-outline",
    "briefcase-outline",
    "color-palette-outline",
    "globe-outline",
    "ribbon-outline",  
  ]

  return (
    <View style={tw`px-4 py-8`}>
      <Text
        style={tw.style("text-4xl font-bold mb-12 text-center", { color: textColor })}
      >
        Experience
      </Text>

      <View style={tw`flex flex-col gap-6`}>
        {experience.map((exp, index) => (
          <Animated.View
            key={index}
            entering={FadeInUp.delay(index * 100).springify()}
            style={tw.style(
              "rounded-2xl p-4 shadow-md flex-row border-l-4",
              { backgroundColor: bgCard, borderLeftColor: borderLeft }
            )}
          >
            <View style={tw`items-center mr-3`}>
              <Ionicons
                name={iconMap[index % iconMap.length] as any}
                size={28}
                color="#3b82f6"
              />
            </View>

            <View style={tw`flex-1`}>
              <Text style={tw.style("text-lg font-semibold", { color: textColor })}>
                {exp.title}
              </Text>
              <Text style={tw.style("text-sm", { color: "#3b82f6" })}>
                {exp.company}
              </Text>
              <Text style={tw.style("text-xs mb-2", { color: secondaryText })}>
                {exp.period}
              </Text>
              <Text style={tw.style("text-sm leading-5", { color: secondaryText })}>
                {exp.description}
              </Text>
            </View>
          </Animated.View>
        ))}
      </View>
    </View>
  )
}
