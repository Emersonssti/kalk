import { useState } from "react";
import {
  Center,
  HStack,
  Select,
  CheckIcon,
  VStack,
  Text,
  TextArea,
  FlatList,
  Icon,
} from "native-base";


import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function FormCreateIngrediente() {
  const [service, setService] = useState("");

  return (
    <Center>
      <HStack alignItems="center" w={"full"} px={8} mt={4}>
        <VStack w={"full"}>
          <Text fontSize="lg" mb={2}>
          Título do seu ingrediente
          </Text>
          <Input mb={4} placeholder="Digite o titulo" />
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
          <Text fontSize="lg">
          Especificações
          </Text>
        </VStack>
      </HStack>
      <HStack w={'full'} px={8} space={2} my={4} alignItems="center" justifyContent="space-between">
        <VStack >
          <Text fontSize="md">Valor unitário</Text>
          <Text fontSize="l">R$ 0,00</Text>
        </VStack>
      </HStack>
      <HStack w={'full'} px={4} space={4} my={4} alignItems="center" justifyContent="center">
      <Select
          selectedValue={service}
          minWidth="100"
          rounded={"full"}
          h={8}
          accessibilityLabel="Marca"
          placeholder="Marca"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="1" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="Masculino" value="ux" />
          <Select.Item label="Feminino" value="web" />
          <Select.Item label="Outro" value="cross" />
        </Select>
        <Input maxWidth="100" placeholder="Quantidade" />
        <Select
          selectedValue={service}
          minWidth="110"
          rounded={"full"}
          h={8}
          accessibilityLabel="medida"
          placeholder="medida"
          _selectedItem={{
            bg: "teal.600",
            
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="Kilo" value="ux" />
          <Select.Item label="Grama" value="web" />
          <Select.Item label="Quantidade" value="cross" />
        </Select>
      </HStack>
        <Button variant="blue" mt={8} w={32} title="Salvar" />
    </Center>
  );
}
