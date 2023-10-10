import { useEffect, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Image,
  Icon,
  FlatList,
  ScrollView,
  Center,
  Pressable,
  Skeleton,
  useToast,
  KeyboardAvoidingView,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { Button } from "@components/Button";
import { CardHome } from "@components/CardHome";
import { CardList } from "@components/CardList";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";

import chefeIllustration from "@assets/chefe.png";
import { NavBar } from "@components/NavBar";
import { Modalize } from "react-native-modalize";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Form } from "@components/Form";
import { useFocusEffect } from "@react-navigation/native";
import { Loading } from "@components/Loading";

export function Home() {
  const [loading, setLoading] = useState(false);
  const [photoLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState<any>(
    "https://github.com/ramonnrocha.png"
  );
  const [service, setService] = useState("");
  const PHOTO_SIZE = 14;
  const toast = useToast();

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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

  if (loading) return <Loading />;
  return (
    <>
      <GestureHandlerRootView>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <VStack flex={1} pb={10}>
            <VStack px={4} pt={12}>
              <HStack mt={4} mb={4} alignItems="center">
                <Text color="gray.600" fontSize="l">
                  Olá Mateus 🤚
                </Text>
              </HStack>
              <Box
                bg="green.500"
                rounded="md"
                h={48}
                px={2}
                py={8}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <VStack flex={1}>
                  <Heading color="white" fontSize="l" fontFamily="heading">
                    Crie suas próprias receitas
                  </Heading>
                  <HStack mt={2} alignItems="center">
                    <Icon
                      as={MaterialIcons}
                      name="bookmark-border"
                      color="gray.600"
                      size={4}
                      mr={2}
                    />
                    <Text>1. Cadastre os ingredientes</Text>
                  </HStack>
                  <HStack mt={2} alignItems="center">
                    <Icon
                      as={MaterialIcons}
                      name="favorite-border"
                      color="gray.600"
                      size={4}
                      mr={2}
                    />
                    <Text>2. Crie suas receitas favoritas</Text>
                  </HStack>
                  <Button mt={2} mr="auto" title={"Criar Receita"} />
                </VStack>
                <Image source={chefeIllustration} size={24} />
              </Box>
              <CardHome title="Todas as Receitas">
                <FlatList
                  data={["1", "2", "3", "4", "5"]}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => <CardList />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </CardHome>
              <CardHome typeTitle="onIcon" title="Top 10 receitas mais fáceis">
                <FlatList
                  data={["1", "2", "3", "4", "5"]}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => <CardList />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </CardHome>
              <CardHome title="Todos os Ingredientes">
                <FlatList
                  data={["1", "2", "3", "4", "5"]}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => <CardList />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </CardHome>
            </VStack>
          </VStack>
        </ScrollView>
        <NavBar onCreate={onOpen} />
        <KeyboardAvoidingView behavior="position">
          <Modalize
            ref={modalizeRef}
            HeaderComponent={
              <Text textAlign="center" fontSize="lg" pt={8}>
                Dados Necessários
              </Text>
            }
            modalHeight={400}
          >
            <VStack>
              <Center my={3} px={8}>
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
                <Pressable
                  onPress={handleUserPhotoSelect}
                  mt={2}
                  mb={8}
                  px={12}
                >
                  <Text color="green.500" fontSize="sm">
                    Alterar Foto
                  </Text>
                </Pressable>
              </Center>
              <Form />
            </VStack>
          </Modalize>
        </KeyboardAvoidingView>
      </GestureHandlerRootView>
    </>
  );
}
