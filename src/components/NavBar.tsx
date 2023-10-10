import { Box, Icon, Pressable, VStack, useTheme } from "native-base";
import { TouchableOpacity } from "react-native";

import HomeSvg from "@assets/home.svg";
import AddSvg from "@assets/plus-circle.svg";
import Profile from "@assets/user.svg";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/AuthRoutes";

type Props = {
  onCreate?: () => void;
};

export function NavBar({onCreate} : Props) {
  const { colors } = useTheme();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <VStack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      h={12}
      px={6}
      py={4}
      position="absolute"
      bottom={4}
      right={20}
      left={20}
      backgroundColor="rgba(255, 255, 255, 0.9)"
      shadow={1}
      rounded="full"
    >
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <HomeSvg stroke={colors.green[500]} width={40} height={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onCreate}>
        <AddSvg />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("profile")}>
        <Profile stroke={colors.green[500]} width={40} height={40} />
      </TouchableOpacity>
    </VStack>
  );
}
