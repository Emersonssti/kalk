import { Container, Footer, ImgBolo } from "./styles";

import foto from "@assets/boloaniversario.png";
import { Text, Image } from "native-base";

export function CardList() {
  return (
    <Container>
      <Image source={foto} w="full" h="50%" resizeMode="cover" />
      <Footer>
        <Text color="gray.600" fontSize="xs" textAlign="left">Título do produto</Text>
        <Text color="gray.600" fontSize="xs" fontFamily="heading">R$ 100</Text>
      </Footer>
    </Container>
  );
}
