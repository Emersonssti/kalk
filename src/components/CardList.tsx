import { Text, Image, VStack } from "native-base";
import foto from "@assets/boloaniversario.png";
import { TouchableOpacity } from "react-native";

export function CardList() {
  return (
    <TouchableOpacity>
      <VStack
        w={32}
        h={32}
        rounded="lg"
        mx={3}
        overflow="hidden"
        borderWidth={0.1}
      >
        <Image
          source={foto}
          w="full"
          h="50%"
          resizeMode="cover"
          roundedTop="lg"
          alt="bolos"
        />
        <VStack w="full" px={1}>
          <Text mt={2} color="gray.600" fontSize="s" textAlign="left">
            Título do produto
          </Text>
          <Text color="gray.600" fontSize="sm" fontFamily="heading">
            R$ 100
          </Text>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
}
