import { Text, Image, VStack } from "native-base";
import foto from "@assets/boloaniversario.png";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  size: 32 | 45;
};

export function CardList({ size }: Props) {
  return (
    <TouchableOpacity style={{ marginTop: 10 }}>
      <VStack
        w={size}
        h={32}
        rounded="lg"
        mx={2}
        my={2}
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
