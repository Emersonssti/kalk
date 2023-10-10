import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    green: {
      700: "#00875F",
      500: "#36B579",
    },
    gray: {
      700: "#383838",
      600: "#454545",
      500: "#9E9E9E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
    red: {
      500: "#F75A68",
    },
  },
  fonts: {
    heading: "Montserrat_700Bold",
    body: "Montserrat_400Regular",
  },
  fontSizes: {
    xs: 12,
    s: 13,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    l: 24,
  },
  sizes: {
    14: 56,
    28: 115,
    31: 136,
    33: 148,
    45: 170,
  },
});
