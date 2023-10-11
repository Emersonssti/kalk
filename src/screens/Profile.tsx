import { GestureHandlerRootView } from "react-native-gesture-handler";
import { VStack, HStack, Text, FlatList, ScrollView } from "native-base";

import { CardHome } from "@components/CardHome";
import { CardList } from "@components/CardList";
import { Modalize } from "react-native-modalize";

import { NavBar } from "@components/NavBar";
import { UserPhoto } from "@components/UserPhoto";
import React, { useRef } from "react";
import { KeyboardAvoidingView } from "react-native";
import { FormCreate } from "@components/FormCreate";
import { Button } from "@components/Button";

export function Profile() {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <GestureHandlerRootView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
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
                    showsHorizontalScrollIndicator={false}
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
                    pt={4}
                    mb={8}
                    showsHorizontalScrollIndicator={false}
                  />
                </VStack>
              </CardHome>
            </VStack>
          </VStack>
        </ScrollView>
        <NavBar onCreate={() => onOpen()} />
        <KeyboardAvoidingView>
          <Modalize
            ref={modalizeRef}
            HeaderComponent={
              <HStack py={4} px={8} justifyContent="space-between" alignItems="center">

              <Text textAlign="center" fontSize="l">
                Criar
              </Text>
              <HStack space={2}>
                <Button variant="outline" w={24} title="Receita" />
                <Button w={28} title="Ingrediente"/>
              </HStack>
              </HStack>
            }
            modalHeight={600}
          >
            <VStack>
              <FormCreate />
            </VStack>
          </Modalize>
        </KeyboardAvoidingView>
      </GestureHandlerRootView>
    </>
  );
}
