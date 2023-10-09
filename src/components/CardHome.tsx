import { HStack, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function CardHome({ title, children }: Props) {
  return (
    <VStack my={1}>
      <HStack alignItems="center" justifyContent="space-between">
        <Text color="gray.600" fontSize="md">
          Todas as receitas
        </Text>
        <TouchableOpacity>
          <Text color="gray.500" fontSize="xs">
            Ver mais
          </Text>
        </TouchableOpacity>
      </HStack>
      {children}
    </VStack>
  );
}
