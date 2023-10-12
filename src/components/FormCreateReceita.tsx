import { useState } from "react";
import {
  Center,
  HStack,
  VStack,
  Text,
  TextArea,
  FlatList,
  Icon,
} from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TouchableOpacity } from "react-native";

type Props = {
  onCloseModal: () => void
}

export function FormCreateReceita({onCloseModal} : Props) {
  const [service, setService] = useState("");

  return (
    <Center>
      <HStack alignItems="center" w={"full"} px={8} mt={4}>
        <VStack w={"full"}>
          <Text fontSize="lg" mb={2}>
            Titulo da Receita
          </Text>
          <Input mb={4} placeholder="Titulo da Receita" />
          <Text fontSize="lg" mb={2}>
            Descrição
          </Text>
          <TextArea
            mb={2}
            autoCompleteType={undefined}
            placeholder={"Digite aqui.."}
            rounded="md"
            _focus={{
              bg: "white",
              borderWidth: 1,
              borderColor: "blue.300",
            }}
          />
          <Text fontSize="lg" mb={6}>
            Ingredientes
          </Text>
          <FlatList
            data={[
              { name: "Farinha de trigo - 300g", price: "R$2,57" },
              { name: "Ovo - 3 uni.", price: "R$1,80" },
            ]}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <HStack
                py={2}
                justifyContent="space-between"
                alignItems="center"
                borderBottomWidth={0.5}
                borderColor="gray.300"
              >
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </HStack>
            )}
            marginBottom={4}
          />
          <TouchableOpacity>
            <HStack space={2} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="add-circle-outline"
                color="blue.500"
              />
              <Text color="blue.500">Adicionar</Text>
            </HStack>
          </TouchableOpacity>
        </VStack>
      </HStack>
      <HStack w={'full'} px={8} space={2} my={4} alignItems="center" justifyContent="space-between">
        <VStack mt={4}>
          <Text fontSize="md">Valor total</Text>
          <Text fontSize="l">R$ 4,37</Text>
        </VStack>
        <Button variant="blue" mt={8} w={32} title="Salvar" onPress={onCloseModal}/>
      </HStack>
    </Center>
  );
}
