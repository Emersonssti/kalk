import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { Loading } from "@components/Loading";
import React from "react";
import { AuthRoutes } from "./AuthRoutes";

export function Routes() {
  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.white;

  return (
    <Box flex={1} bg="white">
      <NavigationContainer theme={theme}>
         <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
