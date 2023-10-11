import { GestureHandlerRootView } from "react-native-gesture-handler";
import { VStack, HStack, Text, FlatList } from "native-base";

import { CardHome } from "@components/CardHome";
import { CardList } from "@components/CardList";
import { Modalize } from "react-native-modalize";

import { NavBar } from "@components/NavBar";
import { UserPhoto } from "@components/UserPhoto";
import React, { useRef } from "react";
import { KeyboardAvoidingView } from "react-native";
import { ModalCreate } from "@components/modalCreate";

export function Profile() {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <VStack flex={1} pb={10}>
        <VStack px={4} pt={12}>
          <HStack mt={4} mb={4} alignItems="center">
            <UserPhoto
              size={38}
              mr={2}
              source={{ uri: "https://github.com/ramonnrocha.png" }}
              alt="foto do usuário"
            />
            <Text color="gray.600" fontSize="md">
              Mateus Teixeira
            </Text>
          </HStack>

          <CardHome title="Suas Receitas" subtitle="Filtrar">
            <VStack>
              <FlatList
                data={[
                  { key: "item1", text: "Item 1" },
                  { key: "item2", text: "Item 2" },
                  { key: "item3", text: "Item 3" },
                ]}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <CardList size={45} />}
                numColumns={2}
                h={80}
                showsVerticalScrollIndicator={false}
              />
            </VStack>
          </CardHome>
          <CardHome title="Seus Ingredientes" subtitle="Filtrar">
            <VStack>
              <FlatList
                data={[
                  { key: "item1", text: "Item 1" },
                  { key: "item2", text: "Item 2" },
                  { key: "item3", text: "Item 3" },
                ]}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <CardList size={45} />}
                numColumns={2}
                h={96}
                mb={4}
                showsVerticalScrollIndicator={false}
              />
            </VStack>
          </CardHome>
        </VStack>
      </VStack>
      <NavBar onCreate={() => onOpen()} />
      <ModalCreate modalizeRef={modalizeRef} />
    </GestureHandlerRootView>
  );
}
