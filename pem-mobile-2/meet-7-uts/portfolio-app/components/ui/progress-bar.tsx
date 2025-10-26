import { View } from "react-native"
import tw from "twrnc"

interface ProgressBarProps {
  progress: number // 0-100
  isDark: boolean
  height?: number
}

export default function ProgressBar({ progress, isDark, height = 8 }: ProgressBarProps) {
  const bgColor = isDark ? "#333333" : "#e5e7eb"
  const fillColor = "#3b82f6"

  return (
    <View
      style={tw.style("w-full rounded-full overflow-hidden", {
        backgroundColor: bgColor,
        height: height,
      })}
    >
      <View
        style={tw.style("h-full rounded-full", {
          backgroundColor: fillColor,
          width: `${Math.min(progress, 100)}%`,
        })}
      />
    </View>
  )
}
