import { TouchableOpacity } from "react-native";
import { HStack, Icon, Text, VStack } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  subtitle?: string
  typeTitle?: "normal" | "onIcon";
  children: React.ReactNode;
};

export function CardHome({ title, typeTitle = "normal", subtitle= "Ver mais" ,children }: Props) {
  return (
    <VStack my={1}>
      <HStack alignItems="center" justifyContent="space-between">
        {typeTitle === "onIcon" ? (
          <HStack justifyContent="flex-end" alignItems="center">
            <Icon
              as={MaterialIcons}
              name="access-time"
              color="green.500"
              size={4}
              mr={2}
            />
            <Text color="green.500" fontSize="md" fontFamily="heading">
              {title}
            </Text>
          </HStack>
        ) : (
          <Text color="gray.600" fontSize="md">
            {title}
          </Text>
        )}
        <TouchableOpacity>
          <Text color="gray.500" fontSize="xs">
            {subtitle}
          </Text>
        </TouchableOpacity>
      </HStack>
      {children}
    </VStack>
  );
}
