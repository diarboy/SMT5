// components/home/analytics-section.tsx
"use client"
import { View, Text, useWindowDimensions } from "react-native"
import tw from "twrnc"

interface AnalyticsSectionProps {
  isDark: boolean
}

export default function AnalyticsSection({ isDark }: AnalyticsSectionProps) {
  const { width } = useWindowDimensions()
  const textColor = isDark ? "#ffffff" : "#000000"
  const secondaryText = isDark ? "#9ca3af" : "#6b7280"
  const bgColor = isDark ? "#1a1a1a" : "#f9fafb"

  const isLarge = width > 768
  const numColumns = isLarge ? 4 : 2

  const stats = [
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Years Experience", value: "8+" },
    { label: "Code Commits", value: "10k+" },
  ]

  return (
    <View style={tw`px-4 py-8`}>
      <Text style={tw.style("text-4xl font-bold mb-12 text-center", { color: textColor })}>Highlights</Text>
      <View style={tw`flex-row flex-wrap justify-between gap-4`}>
        {stats.map((stat) => (
          <View
            key={stat.label}
            style={tw.style("p-6 rounded-2xl items-center flex-1 min-w-[45%]", {
              backgroundColor: bgColor,
              shadowColor: "#3b82f6",
              shadowOpacity: 0.15,
              elevation: 4,
            })}
          >
            <Text style={tw.style("text-3xl font-bold mb-2", { color: "#3b82f6" })}>{stat.value}</Text>
            <Text style={tw.style("text-sm text-center", { color: secondaryText })}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}