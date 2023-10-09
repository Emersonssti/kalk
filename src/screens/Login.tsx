import { ScrollView, Column, Image, Center, Text, Box } from "native-base";

import backgroundImg from "@assets/backgroundImage.png";

import { ButtonFacebook } from "@components/ButtonFacebook";
import { ButtonGoogle } from "@components/ButtonGoogle";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/AuthRoutes";

export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Column flex={1} bg="white" px={8} justifyContent="center">
        <Center>
          <Text color="gray.600" fontSize="l">
            É um prazer te ter aqui!
          </Text>
          <Image
            my={10}
            ml={10}
            source={backgroundImg}
            defaultSource={backgroundImg}
            alt="Chefes de cozinha"
          />
          <Box
            w="full"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <Text mr="2">Acesse com :</Text>
            <ButtonGoogle onPress={() => navigation.navigate('home')} />
            <Text mr="2">ou</Text>
            <ButtonFacebook />
          </Box>
        </Center>
      </Column>
    </ScrollView>
  );
}
