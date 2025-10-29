"use client"

import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  Linking,
  useWindowDimensions,
} from "react-native"
import tw from "twrnc"
import { useTheme } from "@/context/theme-context"
import { Moon, Sun } from "lucide-react-native"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react-native"
import { profileData } from "@/data/portfolio-data"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const DESKTOP_BREAKPOINT = 768

export default function ContactScreen() {
  const { isDark, toggleTheme } = useTheme()
  const { width } = useWindowDimensions()
  const isDesktop = width >= DESKTOP_BREAKPOINT

  const insets = useSafeAreaInsets()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  // --- Definisi Warna ---
  const bgColor = isDark ? "#0f0f0f" : "#ffffff"
  const textColor = isDark ? "#ffffff" : "#000000"
  const secondaryText = isDark ? "#9ca3af" : "#6b7280"
  const inputBg = isDark ? "#1a1a1a" : "#f9fafb"
  const inputBorder = isDark ? "#333333" : "#e5e5e5"
  const placeholderColor = isDark ? "#6b7280" : "#9ca3af"
  const accentColor = isDark ? "#CC7755" : "#fbbf24"

  const cardStyle = tw.style(
    "p-6 rounded-lg border w-full",
    { backgroundColor: inputBg, borderColor: inputBorder }
  )

  const handleEmail = () => {
    Linking.openURL(`mailto:${profileData.email}`).catch(() => Alert.alert("Error", "Could not open link"))
  }

  const handlePhone = () => {
    Linking.openURL(`tel:${profileData.phone}`).catch(() => Alert.alert("Error", "Could not open link"))
  }

  const handleSocialPress = (url: string) => {
    Linking.openURL(url).catch(() => Alert.alert("Error", "Could not open link"))
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }
    setLoading(true)
    setTimeout(() => {
      Alert.alert("Success", "Message sent successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setLoading(false)
    }, 1000)
  }

  const socialLinks = [
    { icon: Github, label: "GitHub", url: profileData.social.github },
    { icon: Linkedin, label: "LinkedIn", url: profileData.social.linkedin },
    { icon: Twitter, label: "Twitter", url: profileData.social.twitter },
  ]

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
      showsVerticalScrollIndicator={false}
    >
      <View style={tw`px-8 pt-4 pb-2 flex-row justify-end items-center`}>
        <Pressable onPress={toggleTheme} style={tw`p-2 rounded-full`} hitSlop={8}>
          {isDark ? (
            <Sun size={24} color="#cc7755" strokeWidth={2} />
          ) : (
            <Moon size={24} color="#fbbf24" strokeWidth={2} />
          )}
        </Pressable>
      </View>
      
      {/* Header */}
      <View style={tw`px-4 pt-10 pb-8 items-center`}>
        <Text style={tw.style("text-4xl font-bold", { color: textColor })}>Get In Touch</Text>
        <Text style={tw.style("text-base mt-2", { color: secondaryText })}>Have a project in mind? Let's talk!</Text>
      </View>

      <View
        style={tw.style(
          "w-full px-4 pb-12",
          isDesktop && "max-w-6xl mx-auto px-6"
        )}
      >
        <View style={tw.style("w-full", isDesktop && "flex-row gap-8")}>
          
          <View style={tw.style("w-full", isDesktop && "flex-1")}>
            
            <View style={tw.style(cardStyle, "mb-6")}>
              <Text style={tw.style("text-2xl font-bold mb-6 text-center", { color: textColor })}>Contact Information</Text>

              <Pressable onPress={handleEmail} style={tw`flex-row items-center mb-5`}>
                <Mail size={22} color={accentColor} strokeWidth={2} />
                <Text style={tw.style("ml-4 text-base", { color: textColor })}>{profileData.email}</Text>
              </Pressable>
              <Pressable onPress={handlePhone} style={tw`flex-row items-center mb-5`}>
                <Phone size={22} color={accentColor} strokeWidth={2} />
                <Text style={tw.style("ml-4 text-base", { color: textColor })}>{profileData.phone}</Text>
              </Pressable>
              <View style={tw`flex-row items-center mb-8`}>
                <MapPin size={22} color={accentColor} strokeWidth={2} />
                <Text style={tw.style("ml-4 text-base", { color: textColor })}>{profileData.location}</Text>
              </View>

              <View style={tw.style("border-b mb-8", { borderColor: inputBorder })} />

              <Text style={tw.style("text-2xl font-bold mb-6 text-center", { color: textColor })}>Follow Me</Text>
              <View style={tw`flex-row gap-4 justify-center`}>
                {socialLinks.map((social) => (
                  <Pressable
                    key={social.label}
                    onPress={() => handleSocialPress(social.url)}
                    style={tw.style("p-3 rounded-full", {
                        backgroundColor: isDark ? "#2a2a2a" : "#f0f0f0", 
                    })}
                  >
                    <social.icon size={24} color={accentColor} strokeWidth={2} />
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={cardStyle}>
              <Text style={tw.style("text-2xl font-bold mb-5 text-center", { color: textColor })}>About This App</Text>
              <Text style={tw.style("text-base leading-6 opacity-90 text-center", { color: textColor })}>
                This portfolio app showcases my work as a full-stack developer and UI/UX designer. I'm passionate about
                creating beautiful, functional digital products that solve real-world problems.
              </Text>
              <Text style={tw.style("text-base font-semibold leading-6 opacity-90 mt-4 text-center", { color: textColor })}>
                Feel free to reach out if you'd like to collaborate or discuss potential opportunities.
              </Text>
            </View>
          </View>

          <View style={tw.style("w-full mt-6", isDesktop && "flex-1 mt-0")}>
            
            <View style={cardStyle}>
              <Text style={tw.style("text-2xl font-bold mb-8 text-center", { color: textColor })}>Send Me a Message</Text>

              <TextInput
                placeholder="Your Name"
                placeholderTextColor={placeholderColor}
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                style={tw.style("w-full px-4 py-3 rounded-lg mb-4 border", {
                  backgroundColor: inputBg,
                  borderColor: inputBorder,
                  color: textColor,
                })}
              />
              <TextInput
                placeholder="Your Email"
                placeholderTextColor={placeholderColor}
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                keyboardType="email-address"
                style={tw.style("w-full px-4 py-3 rounded-lg mb-4 border", {
                  backgroundColor: inputBg,
                  borderColor: inputBorder,
                  color: textColor,
                })}
              />
              <TextInput
                placeholder="Subject"
                placeholderTextColor={placeholderColor}
                value={formData.subject}
                onChangeText={(text) => setFormData({ ...formData, subject: text })}
                style={tw.style("w-full px-4 py-3 rounded-lg mb-4 border", {
                  backgroundColor: inputBg,
                  borderColor: inputBorder,
                  color: textColor,
                })}
              />
              <TextInput
                placeholder="Your Message"
                placeholderTextColor={placeholderColor}
                value={formData.message}
                onChangeText={(text) => setFormData({ ...formData, message: text })}
                multiline
                numberOfLines={6}
                style={tw.style("w-full px-4 py-3 rounded-lg mb-6 border", {
                  backgroundColor: inputBg,
                  borderColor: inputBorder,
                  color: textColor,
                  textAlignVertical: "top",
                })}
              />
              <Pressable
                onPress={handleSubmit}
                disabled={loading}
                style={tw.style("flex-row items-center justify-center py-3 px-6 rounded-full w-full",
                  { backgroundColor: accentColor,
                })}
              >
                <Text style={tw`text-white font-semibold text-base`}>{loading ? "Sending..." : "Send Message"}</Text>
                {!loading && <Send size={20} color="white" strokeWidth={2} style={tw`ml-2`} />}
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}