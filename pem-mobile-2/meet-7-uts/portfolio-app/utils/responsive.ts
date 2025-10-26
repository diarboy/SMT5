import { useWindowDimensions } from "react-native"

export function useResponsive() {
  const { width, height } = useWindowDimensions()

  return {
    width,
    height,
    isSmall: width < 480,
    isMedium: width >= 480 && width < 768,
    isLarge: width >= 768,
    isPortrait: height > width,
    isLandscape: width > height,
  }
}

export const BREAKPOINTS = {
  small: 480,
  medium: 768,
  large: 1024,
}
