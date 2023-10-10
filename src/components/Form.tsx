import { useState } from "react";
import { Center, HStack, Select, CheckIcon } from "native-base";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Form() {
  const [service, setService] = useState("");

  return (
    <Center>
      <HStack alignItems="center" w={"full"} px={8} space={2}>
        <Input maxWidth="130" placeholder="Data de Nascimento" />
        <Select
          selectedValue={service}
          minWidth="130"
          rounded={"full"}
          accessibilityLabel="Choose Service"
          placeholder="Genero"
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
      </HStack>
      <HStack alignItems="center" w={"full"} px={8} mt={4}>
        <HStack alignItems="center" w={"full"} space={2} flex={1}>
          <Input maxWidth="100" placeholder="CEP" />
          <Input maxWidth="130" placeholder="Cidade" />
        </HStack>
        <Input maxWidth="16" placeholder="UF" />
      </HStack>
      <Button mt={8} title="Salvar" />
    </Center>
  );
}
