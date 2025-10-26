"use client"

import { ScrollView, View, Text, Image, Pressable, useWindowDimensions, Linking } from "react-native"
import tw from "twrnc"
import { useTheme } from "@/context/theme-context"
import { useLocalSearchParams, useRouter } from "expo-router"
import { projects } from "@/data/portfolio-data"
import { ChevronLeft, ExternalLink } from "lucide-react-native"
import ProjectsPreview from "@/components/home/projects-preview"

export default function ProjectDetailScreen() {
  const { isDark } = useTheme()
  const router = useRouter()
  const { id } = useLocalSearchParams()

  const { width } = useWindowDimensions()
  const isDesktop = width >= 768

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>Project not found</Text>
      </View>
    )
  }

  const bgColor = isDark ? "#0f0f0f" : "#ffffff"
  const textColor = isDark ? "#ffffff" : "#000000"
  const secondaryText = isDark ? "#9ca3af" : "#6b7280"
  const cardBg = isDark ? "#1a1a1a" : "#f9fafb"

  return (
    <ScrollView style={tw.style("flex-1", { backgroundColor: bgColor })} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={tw`px-4 pt-4 pb-2 flex-row items-center`}>
        <Pressable onPress={() => router.back()} hitSlop={8}>
          <ChevronLeft size={24} color="#3b82f6" strokeWidth={2} />
        </Pressable>
        <Text style={tw.style("text-2xl font-semibold ml-4 flex-1", { color: textColor })}>Project Details</Text>
      </View>

      {/* Project Image */}
      <Image source={typeof project.image === "string" ? { uri: project.image } : project.image} style={tw`w-full h-64 mt-4`} />

      {/* Project Info */}
      <View style={tw`px-4 py-6 max-w-4xl mx-auto`}>
        <Text style={tw.style("text-3xl font-bold mb-2 text-center", { color: textColor })}>{project.title}</Text>
        <Text style={tw.style("text-base mb-6 leading-6 text-center", { color: secondaryText })}>{project.description}</Text>

        {/* Tags */}
        <View style={tw`flex-row gap-2 flex-wrap mb-6 mx-auto`}>
          {project.tags.map((tag) => (
            <View
              key={tag}
              style={tw.style("px-3 py-1 rounded-full", {
                backgroundColor: "#3b82f6",
              })}
            >
              <Text style={tw`text-white text-xs font-medium`}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Results Section */}
        <Text style={tw.style("text-4xl font-bold mb-8 text-center", { color: textColor })}>Results</Text>
        {project.results.map((result, index) => (
          <View key={index} style={tw`mb-8`}>
          <Image
            source={typeof result.image === "string" ? { uri: result.image } : result.image}
            style={tw.style("w-full rounded-lg mb-3", {
              height: isDesktop ? 480 : 256,
              resizeMode: "cover",
            })}
          />
            <Text style={tw.style("text-2xl font-bold mb-2 text-center", { color: textColor })}>{result.title}</Text>
            <Text style={tw.style("text-sm leading-5 text-center", { color: secondaryText })}>{result.description}</Text>
          </View>
        ))}

        {/* CTA Button */}
        {project.link && (
          <Pressable
            onPress={() => {
              if (project.link) {
                Linking.openURL(project.link)
              }
            }}
            style={tw.style("flex-row items-center justify-center py-3 px-4 rounded-full mt-6", {
              backgroundColor: "#3b82f6",
            })}
          >
            <Text style={tw`text-white font-semibold text-base`}>View Live Project</Text>
            <ExternalLink size={20} color="white" strokeWidth={2} style={tw`ml-2`} />
          </Pressable>
        )}
      </View>

      <View style={tw`mt-6`}>
        <ProjectsPreview
          isDark={isDark}
          projects={projects.filter(p => p.id !== id)}
          title="Other Projects"
        />
      </View>
    </ScrollView>
  )
}
