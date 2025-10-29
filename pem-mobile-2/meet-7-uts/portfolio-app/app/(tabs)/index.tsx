"use client"

import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
  Linking
} from "react-native"
import tw from "twrnc"
import { useTheme } from "@/context/theme-context"
import { Moon, Sun } from "lucide-react-native"
import { useRouter } from "expo-router"
import { profileData, skills, projects, experience } from "@/data/portfolio-data"
import SkillsSection from "@/components/home/skills-section"
import ProjectsPreview from "@/components/home/projects-preview"
import AnalyticsSection from "@/components/home/analytics-section"
import ExperienceSection from "@/components/home/experience-section"
import { Ionicons } from "@expo/vector-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const DESKTOP_BREAKPOINT = 768

export default function HomeScreen() {
  const { isDark, toggleTheme } = useTheme()
  const router = useRouter()
  const { width } = useWindowDimensions()
  const isDesktop = width >= DESKTOP_BREAKPOINT 

  const insets = useSafeAreaInsets()

  const bgColor = isDark ? "#0f0f0f" : "#ffffff"
  const textColor = isDark ? "#ffffff" : "#000000"
  const secondaryText = isDark ? "#9ca3af" : "#6b7280"
  const borderColor = isDark ? "#333333" : "#e5e5e5"
  const iconColor = isDark ? "#f3f4f6" : "#1f2937"
  const accentColor = isDark ? "#CC7755" : "#fbbf24"

  const openLink = async (url: string) => {
    if (url) await Linking.openURL(url)
  }

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
      {/* Header (Full-width) */}
      <View style={tw`px-8 pt-4 pb-2 flex-row justify-between items-center`}>
        <Text style={tw.style("text-2xl font-bold", { color: textColor })}>623C0009</Text>
        <Pressable onPress={toggleTheme} style={tw`p-2 rounded-full`} hitSlop={8}>
          {isDark ? (
            <Sun size={24} color="#CC7755" strokeWidth={2} />
          ) : (
            <Moon size={24} color="#fbbf24" strokeWidth={2} />
          )}
        </Pressable>
      </View>

      <View
        style={tw.style(
          "w-full px-4 pb-8",
          isDesktop && "max-w-6xl mx-auto px-6"
        )}
      >

        <View
          style={tw.style(
            "py-8",
            isDesktop ? "flex-row items-center justify-between" : "items-center"
          )}
        >
          {/* Hero */}
          <View style={tw.style(isDesktop ? "w-1/2 pr-6 items-center" : "w-full items-center")}>
          <Image
            source={require("@/assets/img/profile-avatar.png")}
            style={tw`w-32 h-32 rounded-full mb-4`}
            defaultSource={require("@/assets/img/placeholder.jpg")}
          />
          <Text style={tw.style("text-4xl font-bold text-center mb-2", { color: textColor })}>{profileData.name}</Text>
          <Text style={tw.style("text-lg font-semibold text-center mb-1", { color: "#CC7755" })}>
            {profileData.title}
          </Text>
          <Text style={tw.style("text-sm text-center mb-4", { color: secondaryText })}>📍 {profileData.location}</Text>
          
          {/* Social Icons */}
          <View style={tw`flex-row justify-center mb-6`}>
            {profileData.social?.github && (
              <Pressable
                onPress={() => openLink(profileData.social.github)}
                style={tw`mx-3`}
              >
                <Ionicons name="logo-github" size={22} color={iconColor} />
              </Pressable>
            )}
            {profileData.social?.linkedin && (
              <Pressable
                onPress={() => openLink(profileData.social.linkedin)}
                style={tw`mx-3`}
              >
                <Ionicons name="logo-linkedin" size={22} color={iconColor} />
              </Pressable>
            )}
            {profileData.social?.twitter && (
              <Pressable
                onPress={() => openLink(profileData.social.twitter)}
                style={tw`mx-3`}
              >
                <Ionicons name="logo-twitter" size={22} color={iconColor} />
              </Pressable>
            )}
            {profileData.social?.instagram && (
              <Pressable
                onPress={() => openLink(profileData.social.instagram)}
                style={tw`mx-3`}
              >
                <Ionicons name="logo-instagram" size={22} color={iconColor} />
              </Pressable>
            )}
          </View>
          </View>
        
          <View style={tw.style(isDesktop ? "hidden" : "border-b w-full my-8", { borderColor })} />

          {/* About Me */}
          <View style={tw.style(isDesktop ? "w-1/2 pl-6" : "w-full px-4")}>
            <Text style={tw.style("text-4xl font-bold mb-8 text-center", { color: textColor })}>
              About Me
            </Text>
            <Text
              style={tw.style(
                isDesktop ? "text-base leading-6 text-justify" : "text-sm text-center leading-6",
                { color: secondaryText }
              )}
            >
              {profileData.about}
            </Text>
            <Text
              style={tw.style(
                isDesktop
                  ? "text-base leading-6 text-justify mt-6"
                  : "text-sm leading-6 text-center mt-6 mx-4",
                { color: secondaryText }
              )}
            >
              {profileData.intro}
            </Text>
          </View>
        </View>
       
        <View style={tw.style("border-b w-full my-4", { borderColor })} />

        <View
          style={tw.style(
            "w-full", 
            isDesktop && "flex-row gap-6"
          )}
        >
          <View style={tw.style("w-full", isDesktop && "flex-1")}>
            <SkillsSection isDark={isDark} skills={skills} />
          </View>

          <View style={tw.style("w-full mt-6", isDesktop && "flex-1 mt-0")}>
            
            <ExperienceSection isDark={isDark} experience={experience} />
          </View>
        </View>

        <View style={tw`mt-6`}>
          <AnalyticsSection isDark={isDark} />
        </View>

        <View style={tw`mt-6`}>
          <ProjectsPreview isDark={isDark} projects={projects} />
        </View>

        <View style={tw`mt-8 items-center`}>
          <Pressable
            onPress={() => router.push("/(tabs)/projects")}
            style={tw.style("py-4 px-6 rounded-full", {
              backgroundColor: "#CC7755",
            })}
          >
            <Text style={tw`text-white font-semibold text-base`}>View All Projects</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={tw.style(
        "mt-12 p-6 shadow-lg py-20",
        { backgroundColor: "#fbbf24" }
      )}>
        <Text style={tw`text-white text-4xl font-bold mb-2 text-center`}>
          Ready to Collaborate?
        </Text>
        <Text style={tw`text-white text-base mb-4 text-center opacity-80`}>
          Let’s build something amazing together.
        </Text>
        <Pressable
          onPress={() => router.push("/contact")}
          style={tw`bg-white rounded-full py-3 px-6 mx-auto`}
        >
          <Text style={tw`text-[#cc7755] font-semibold`}>Get in Touch</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}