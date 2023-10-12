import { useState } from "react";
import { HStack, Select, CheckIcon } from "native-base";

import { Input } from "@components/Input";

export function FormAccount() {
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  return (
    <>
      <HStack alignItems="flex-end" w={"full"} px={8} space={2}>
        <Input
          maxLength={8}
          value={date}
          mask={"date"}
          onChangeText={(text) => setDate(text)}
          inputMode="numeric"
          maxWidth="130"
          placeholder="Data de Nascimento"
        />
        <Select
          selectedValue={service}
          minWidth="130"
          rounded={"full"}
          h={8}
          accessibilityLabel="Choose Service"
          placeholder="Genero"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="1" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="Masculino" value="masculino" />
          <Select.Item label="Feminino" value="feminino" />
          <Select.Item label="Outro" value="outro" />
        </Select>
      </HStack>
      <HStack alignItems="center" w={"full"} pr={8} pl={8} mt={4}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          w={"full"}
          space={2}
          flex={1}
        >
          <Input maxWidth="100" inputMode="numeric" placeholder="CEP" maxLength={8} />
          <Input maxWidth="150" placeholder="Cidade" maxLength={20} />
          <Input maxWidth="16" textTransform="uppercase" placeholder="UF" maxLength={2} />
        </HStack>
      </HStack>
      
    </>
  );
}
