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
  useToast,
  KeyboardAvoidingView,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { Button } from "@components/Button";
import { CardHome } from "@components/CardHome";
import { CardList } from "@components/CardList";

import chefeIllustration from "@assets/chefe.png";
import { NavBar } from "@components/NavBar";
import { Modalize } from "react-native-modalize";

import { Loading } from "@components/Loading";
import { ModalCreate } from "@components/ModalCreate";
import { Platform } from "react-native";
import { ModalDataUsers } from "@components/ModalDataUsers";

export function Home() {
  const [loading, setLoading] = useState(false);
  const modalizeRefCreate = useRef<Modalize>(null);
  const modalizeRef = useRef<Modalize>(null);

  const onOpenCreate = () => {
    modalizeRefCreate.current?.open();
  };

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

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
                  <Button
                    onPress={onOpenCreate}
                    mt={4}
                    w={24}
                    mr="auto"
                    title={"Criar Receita"}
                  />
                </VStack>
                <Image source={chefeIllustration} alt="ilustração" size={24} />
              </Box>
              <CardHome title="Todas as Receitas">
                <FlatList
                  data={["1", "2", "3", "4", "5"]}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => <CardList size={32} />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </CardHome>
              <CardHome typeTitle="onIcon" title="Top 10 receitas mais fáceis">
                <FlatList
                  data={["1", "2", "3", "4", "5"]}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => <CardList size={32} />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </CardHome>
              <CardHome title="Todos os Ingredientes">
                <FlatList
                  data={["1", "2", "3", "4", "5"]}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => <CardList size={32} />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </CardHome>
            </VStack>
          </VStack>
        </ScrollView>
        <NavBar onCreate={onOpenCreate} />
        {Platform.OS === "ios" ? (
          <KeyboardAvoidingView behavior="position" flex={1}>
            <ModalDataUsers modalizeRef={modalizeRef} />
            <ModalCreate modalizeRef={modalizeRefCreate} />
          </KeyboardAvoidingView>
        ) : (
          <>
            <KeyboardAvoidingView>
              <ModalDataUsers modalizeRef={modalizeRef} />
              <ModalCreate modalizeRef={modalizeRefCreate} />
            </KeyboardAvoidingView>
          </>
        )}
      </GestureHandlerRootView>
    </>
  );
}
