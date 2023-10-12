import { VStack, Text, Pressable, Center, Skeleton, useToast } from "native-base";
import React, { useState } from "react";
import { Modalize } from "react-native-modalize";
import { Button } from "./Button";
import { FormAccount } from "./FormAccount";
import { UserPhoto } from "./UserPhoto";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

type Props = {
  modalizeRef: any;
};

export function ModalDataUsers({ modalizeRef }: Props) {
  const [loading, setLoading] = useState(false);
  const [photoLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState<any>(
    "https://github.com/ramonnrocha.png"
  );
  const PHOTO_SIZE = 14;
  const toast = useToast();
  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );
        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            title: "Essa imagem é muito grande. Escolha uma de até 5MB",
            placement: "top",
            bgColor: "red.500",
          });
        }
        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  return (
    <Modalize
      ref={modalizeRef}
      HeaderComponent={
        <Text textAlign="center" fontSize="lg" pt={8}>
          Dados Necessários
        </Text>
      }
      modalHeight={400}
    >
      <VStack alignItems={"center"} justifyContent={"center"}>
        <Center my={3}>
          {photoLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded={"full"}
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: userPhoto }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}
          <Pressable onPress={handleUserPhotoSelect} mt={2} mb={8} px={12}>
            <Text color="blue.500" fontSize="sm">
              Alterar Foto
            </Text>
          </Pressable>
        </Center>
        <FormAccount />
        <Button
          variant={"blue"}
          mt={8}
          w={32}
          title="Salvar"
          onPress={() => modalizeRef.current?.close()}
        />
      </VStack>
    </Modalize>
  );
}
