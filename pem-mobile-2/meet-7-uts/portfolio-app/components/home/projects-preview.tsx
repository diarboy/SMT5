"use client"

import { View, Text, Image, Pressable, ScrollView, useWindowDimensions } from "react-native"
import tw from "twrnc"
import { useRouter } from "expo-router"
import type { Project } from "@/types"

interface ProjectsPreviewProps {
  isDark: boolean
  projects: Project[]
  title?: string
}

export default function ProjectsPreview({ isDark, projects, title = "Featured Projects" }: ProjectsPreviewProps) {
  const router = useRouter()
  const { width } = useWindowDimensions()
  const textColor = isDark ? "#ffffff" : "#000000"
  const secondaryText = isDark ? "#9ca3af" : "#6b7280"
  const bgColor = isDark ? "#1a1a1a" : "#f9fafb"

  const cardWidth = width > 768 ? width * 0.4 : width * 0.85
  const isDesktop = width >= 768
  const imageHeight = isDesktop ? 280 : 192

  return (
    <View style={tw`px-4 py-8`}>
      <View style={tw`items-center mb-12`}>
        <Text style={tw.style("text-4xl font-bold text-center", { color: textColor })}>{title}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
        <View style={tw`flex-row gap-4`}>
          {projects.slice(0, 4).map((project) => (
            <Pressable
              key={project.id}
              onPress={() => router.push(`/(tabs)/projects/${project.id}`)}
              style={tw.style("rounded-lg overflow-hidden", {
                backgroundColor: bgColor,
                width: cardWidth,
              })}
            >
              <Image
                source={typeof project.image === "string" ? { uri: project.image } : project.image}
                style={tw.style("w-full", { height: imageHeight, resizeMode: "cover" })} />
              <View style={tw`p-4`}>
                <Text style={tw.style("text-lg font-bold mb-2", { color: textColor })}>{project.title}</Text>
                <Text style={tw.style("text-sm mb-4", { color: secondaryText })}>{project.shortDescription}</Text>
                <View style={tw`flex-row gap-2 flex-wrap`}>
                  {project.tags.slice(0, 2).map((tag) => (
                    <View
                      key={tag}
                      style={tw.style("px-2 py-1 rounded", {
                        backgroundColor: isDark ? "#333333" : "#e5e7eb",
                      })}
                    >
                      <Text style={tw.style("text-xs", { color: secondaryText })}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
