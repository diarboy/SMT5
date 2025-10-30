"use client"

import { ScrollView, View, Text, Image, Pressable, useWindowDimensions } from "react-native"
import tw from "twrnc"
import { useTheme } from "@/context/theme-context"
import { Moon, Sun } from "lucide-react-native"
import { useRouter } from "expo-router"
import { projects } from "@/data/portfolio-data"
import { ChevronRight } from "lucide-react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function ProjectsScreen() {
  const { isDark, toggleTheme } = useTheme()
  const router = useRouter()
  const { width } = useWindowDimensions()

  const isDesktop = width >= 768
  const imageHeight = isDesktop ? 280 : 192

  const insets = useSafeAreaInsets()

  const bgColor = isDark ? "#0f0f0f" : "#ffffff"
  const textColor = isDark ? "#ffffff" : "#000000"
  const secondaryText = isDark ? "#9ca3af" : "#6b7280"
  const cardBg = isDark ? "#1a1a1a" : "#f9fafb"
  const borderColor = isDark ? "#333333" : "#e5e5e5"

  return (
    <ScrollView
    style={tw.style(
        "flex-1", 
        { 
          backgroundColor: bgColor,
          paddingTop: insets.top,
          paddingBottom: insets.bottom, 
        }
      )} 
      showsVerticalScrollIndicator={false}>
      
    <View style={tw`px-8 pt-4 pb-2 flex-row justify-end items-center`}>
      <Pressable onPress={toggleTheme} style={tw`p-2 rounded-full`} hitSlop={8}>
        {isDark ? (
          <Sun size={24} color="#CC7755" strokeWidth={2} />
        ) : (
          <Moon size={24} color="#fbbf24" strokeWidth={2} />
        )}
      </Pressable>
    </View>

      {/* Header */}
      <View style={tw`px-4 pt-6 pb-4 items-center`}>
        <Text style={tw.style("text-4xl font-bold", { color: textColor })}>Projects</Text>
        <Text style={tw.style("text-base mt-2 mb-4", { color: secondaryText })}>
          Explore my recent work and case studies
        </Text>
      </View>

      {/* Projects Grid */}
      <View
        style={tw.style("px-4 flex flex-wrap justify-between", {
          flexDirection: isDesktop ? "row" : "column",
        })}
      >
        {projects.map((project) => (
          <Pressable
            key={project.id}
            onPress={() => router.push(`/(tabs)/projects/${project.id}`)}
            style={tw.style("mb-4 rounded-lg overflow-hidden border", {
              backgroundColor: cardBg,
              borderColor: borderColor,
              width: isDesktop ? "48%" : "100%",
            })}
          >
            <Image
              source={typeof project.image === "string" ? { uri: project.image } : project.image}
              style={tw.style("w-full", { height: imageHeight, resizeMode: "cover" })}
            />

            <View style={tw`p-4`}>
              <View style={tw`flex-row justify-between items-start mb-2`}>
                <Text style={tw.style("text-xl font-bold flex-1", { color: textColor })}>
                  {project.title}
                </Text>
                <ChevronRight size={20} color="#3b82f6" strokeWidth={2} />
              </View>
              <Text style={tw.style("text-sm mb-4", { color: secondaryText })}>
                {project.shortDescription}
              </Text>
              <View style={tw`flex-row gap-2 flex-wrap`}>
                {project.tags.map((tag) => (
                  <View
                    key={tag}
                    style={tw.style("px-3 py-1 rounded-full", {
                      backgroundColor: isDark ? "#333333" : "#e5e7eb",
                    })}
                  >
                    <Text style={tw.style("text-xs font-medium", { color: secondaryText })}>
                      {tag}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}
