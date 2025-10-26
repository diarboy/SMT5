import type React from "react"
import { Pressable, Text, type PressableProps } from "react-native"
import tw from "twrnc"

interface ButtonProps extends PressableProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  isDark?: boolean
}

export default function Button({ children, variant = "primary", isDark = false, ...props }: ButtonProps) {
  const getStyles = () => {
    switch (variant) {
      case "secondary":
        return {
          backgroundColor: isDark ? "#333333" : "#e5e7eb",
          textColor: isDark ? "#ffffff" : "#000000",
        }
      case "outline":
        return {
          backgroundColor: "transparent",
          textColor: "#3b82f6",
          borderColor: "#3b82f6",
          borderWidth: 1,
        }
      default:
        return {
          backgroundColor: "#3b82f6",
          textColor: "#ffffff",
        }
    }
  }

  const styles = getStyles()

  return (
    <Pressable
      style={tw.style("py-3 px-6 rounded-lg items-center justify-center", {
        backgroundColor: styles.backgroundColor,
        borderColor: styles.borderColor,
        borderWidth: styles.borderWidth || 0,
      })}
      {...props}
    >
      <Text style={tw.style("font-semibold text-base", { color: styles.textColor })}>{children}</Text>
    </Pressable>
  )
}
