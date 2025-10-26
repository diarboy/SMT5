"use client"
import { View, Text, Animated } from "react-native"
import { useEffect, useRef } from "react"
import tw from "twrnc"
import type { Skill } from "@/types"
import { Ionicons } from "@expo/vector-icons"

interface SkillsSectionProps {
  isDark: boolean
  skills: Skill[]
}

export default function SkillsSection({ isDark, skills }: SkillsSectionProps) {
  const textColor = isDark ? "#ffffff" : "#111827"
  const secondaryText = isDark ? "#9ca3af" : "#6b7280"
  const cardColor = isDark ? "#1e1e1e" : "#f9fafb"

  const colors = [
    "#3b82f6", // blue
    "#10b981", // green
    "#f59e0b", // amber
    "#ef4444", // red
    "#8b5cf6", // violet
    "#ec4899", // pink
    "#06b6d4", // cyan
  ]

  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <Animated.View style={[tw`px-5 py-8`, { opacity: fadeAnim }]}>
      <Text style={tw.style("text-4xl font-bold text-center mb-12", { color: textColor })}>
        Skills & Expertise
      </Text>

      <View style={tw`gap-4`}>
        {skills.map((skill, index) => {
          const barColor = colors[index % colors.length]
          return (
            <View
              key={index}
              style={tw.style(
                "rounded-2xl p-4 border",
                { backgroundColor: cardColor, borderColor: isDark ? "#2e2e2e" : "#e5e7eb" }
              )}
            >
              {/* Header Skill */}
              <View style={tw`flex-row justify-between items-center mb-3`}>
                <View style={tw`flex-row items-center`}>
                  <Ionicons
                    name={skill.icon as any}
                    size={20}
                    color={barColor}
                    style={tw`mr-2`}
                  />
                  <Text style={tw.style("font-semibold text-base", { color: textColor })}>
                    {skill.name}
                  </Text>
                </View>
                <Text style={tw.style("text-sm font-medium", { color: secondaryText })}>
                  {skill.level}%
                </Text>
              </View>

              {/* Progress Bar */}
              <View
                style={tw.style("w-full h-2 rounded-full overflow-hidden", {
                  backgroundColor: isDark ? "#2f2f2f" : "#e5e7eb",
                })}
              >
                <Animated.View
                  style={{
                    height: "100%",
                    borderRadius: 10,
                    backgroundColor: barColor,
                    width: `${skill.level}%`,
                  }}
                />
              </View>

              {/* Category Label */}
              {skill.category && (
                <Text
                  style={tw.style("text-xs mt-2 font-medium uppercase tracking-wide", {
                    color: secondaryText,
                  })}
                >
                  {skill.category}
                </Text>
              )}
            </View>
          )
        })}
      </View>
    </Animated.View>
  )
}
