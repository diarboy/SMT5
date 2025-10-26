import type React from "react"
import { View, type ViewProps } from "react-native"
import tw from "twrnc"

interface CardProps extends ViewProps {
  isDark: boolean
  children: React.ReactNode
}

export default function Card({ isDark, children, style, ...props }: CardProps) {
  const bgColor = isDark ? "#1a1a1a" : "#f9fafb"
  const borderColor = isDark ? "#333333" : "#e5e5e5"

  return (
    <View
      style={tw.style("p-4 rounded-lg border", {
        backgroundColor: bgColor,
        borderColor: borderColor,
      })}
      {...props}
    >
      {children}
    </View>
  )
}
