import { Colors } from "@/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native"

export default function ContactScreen() {
  const colorScheme = useColorScheme()
  const colors = Colors[colorScheme ?? "light"]

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingVertical: 24,
    },
    header: {
      marginBottom: 32,
    },
    title: {
      fontSize: 28,
      fontFamily: "InterBold",
      color: colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: colors.text,
      opacity: 0.6,
      fontFamily: "InterRegular",
    },
    section: {
      marginBottom: 28,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: "InterBold",
      color: colors.text,
      marginBottom: 12,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    contactItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.tabIconDefault,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colors.tint,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
    contactInfo: {
      flex: 1,
    },
    contactLabel: {
      fontSize: 12,
      color: colors.text,
      opacity: 0.6,
      fontFamily: "InterRegular",
      textTransform: "uppercase",
      letterSpacing: 0.5,
      marginBottom: 4,
    },
    contactValue: {
      fontSize: 14,
      fontFamily: "InterSemiBold",
      color: colors.text,
    },
    socialContainer: {
      flexDirection: "row",
      gap: 12,
      marginTop: 8,
    },
    socialButton: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: colors.tint,
      justifyContent: "center",
      alignItems: "center",
    },
    messageButton: {
      backgroundColor: colors.tint,
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 24,
    },
    messageButtonText: {
      color: "#ffffff",
      fontSize: 14,
      fontFamily: "InterBold",
    },
    description: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.text,
      opacity: 0.8,
      fontFamily: "InterRegular",
    },
  })

  const handleEmail = () => {
    Linking.openURL("mailto:alex@example.com")
  }

  const handlePhone = () => {
    Linking.openURL("tel:+1234567890")
  }

  const handleSocial = (url: string) => {
    Linking.openURL(url)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Get In Touch</Text>
          <Text style={styles.subtitle}>Let's discuss your next project</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>

          <TouchableOpacity style={styles.contactItem} onPress={handleEmail}>
            <View style={styles.iconContainer}>
              <Ionicons name="mail" size={24} color="#ffffff" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>alex@example.com</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handlePhone}>
            <View style={styles.iconContainer}>
              <Ionicons name="call" size={24} color="#ffffff" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactValue}>+1 (234) 567-890</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.contactItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="location" size={24} color="#ffffff" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Location</Text>
              <Text style={styles.contactValue}>San Francisco, CA</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow Me</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={() => handleSocial("https://github.com")}>
              <Ionicons name="logo-github" size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => handleSocial("https://linkedin.com")}>
              <Ionicons name="logo-linkedin" size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => handleSocial("https://twitter.com")}>
              <Ionicons name="logo-twitter" size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => handleSocial("https://dribbble.com")}>
              <Ionicons name="logo-dribbble" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About This App</Text>
          <Text style={styles.description}>
            This portfolio app showcases my work as a full-stack developer and UI/UX designer. I'm passionate about
            creating beautiful, functional digital products that solve real-world problems.
          </Text>
          <Text style={[styles.description, { marginTop: 12 }]}>
            Feel free to reach out if you'd like to collaborate or discuss potential opportunities.
          </Text>
        </View>

        <TouchableOpacity style={styles.messageButton} onPress={handleEmail}>
          <Text style={styles.messageButtonText}>Send Me a Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
