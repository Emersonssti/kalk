import { HStack, VStack, Text } from "native-base";
import { Modalize } from "react-native-modalize";
import { FormCreateReceita } from "./FormCreateReceita";
import { FormCreateIngrediente } from "./FormCreateIngrediente";
import { Dimensions } from "react-native";
import { useState } from "react";
import { Button, ButtonVariantTypeProps } from "./Button";

const { width, height } = Dimensions.get("screen");

type Props = {
  modalizeRef: any
}

export function ModalCreate({modalizeRef}: Props) {
  const [pressedReceita, setPressedReceita] = useState(true);
  const [pressedIngrediente, setPressedIngrediente] = useState(false);
  const [variantReceita, setVariantReceita] =
    useState<ButtonVariantTypeProps>("blue");
  const [variantIngrediente, setVariantIngrediente] =
    useState<ButtonVariantTypeProps>("outline");

  function handleCreateReceita() {
    setPressedIngrediente(false);
    setVariantIngrediente("outline");
    setPressedReceita(true);
    setVariantReceita("blue");
  }

  function handleCreateIngrediente() {
    setPressedReceita(false);
    setVariantReceita("outline");
    setPressedIngrediente(true);
    setVariantIngrediente("blue");
  }

  return (
    <Modalize
      ref={modalizeRef}
      HeaderComponent={
        <HStack
          py={4}
          px={8}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text textAlign="center" fontSize="l">
            Criar
          </Text>
          <HStack  space={2}>
            <Button
              onPress={handleCreateReceita}
              variant={variantReceita}
              w={24}
              title="Receita"
            />
            <Button
              onPress={handleCreateIngrediente}
              variant={variantIngrediente}
              w={28}
              title="Ingrediente"
            />
          </HStack>
        </HStack>
      }
      snapPoint={height / 1.4}
      modalHeight={height / 1.4}
    >
      <VStack pb={8}>
        {pressedReceita ? <FormCreateReceita onCloseModal={() => modalizeRef.current?.close()}/> : <FormCreateIngrediente />}
      </VStack>
    </Modalize>
  );
}
