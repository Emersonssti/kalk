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
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { Button } from "@components/Button";
import { CardHome } from "@components/CardHome";
import { CardList } from "@components/CardList";

import chefeIllustration from "@assets/chefe.png";
import { NavBar } from "@components/NavBar";
import { UserPhoto } from "@components/UserPhoto";
import { GridProfile } from "@components/GridProfile";

export function Profile() {
  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
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
                  renderItem={({ item }) => <CardList size="large" />}
                  numColumns={2}
                  h={80}
                  pt={4}
                  showsHorizontalScrollIndicator={false}
                />
              </VStack>
            </CardHome>
            <CardHome title="Seus Ingredientes" subtitle="Filtrar">
              <ScrollView>
                <VStack>
                  <FlatList
                    data={[
                      { key: "item1", text: "Item 1" },
                      { key: "item2", text: "Item 2" },
                      { key: "item3", text: "Item 3" },
                    ]}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => <CardList size="large" />}
                    numColumns={2}
                    h={96}
                    pt={8}
                    mb={8}
                    showsHorizontalScrollIndicator={false}
                  />
                </VStack>
              </ScrollView>
            </CardHome>
          </VStack>
        </VStack>
      </ScrollView>
      <NavBar />
    </>
  );
}
