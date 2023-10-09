import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { THEME } from "./src/theme";

// import { AuthContextProvider } from "@contexts/AuthContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
