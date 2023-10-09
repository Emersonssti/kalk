import { CardListSizeProps, Container, Footer, ImgBolo } from "./styles";

import foto from "@assets/boloaniversario.png";
import { Text, Image } from "native-base";

type Props = {
  size?: CardListSizeProps;
};

export function CardList({ size= "normal" }: Props) {
  return (
    <Container sizeType={size}>
      <Image source={foto} w="full" h="50%" resizeMode="cover" alt="bolos" />
      <Footer>
        <Text color="gray.600" fontSize="s" textAlign="left">
          Título do produto
        </Text>
        <Text color="gray.600" fontSize="sm" fontFamily="heading">
          R$ 100
        </Text>
      </Footer>
    </Container>
  );
}
