import { Button as ButtonNB, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export function Button({ title, variant = "solid", ...rest }: Props) {
  return (
    <ButtonNB
      w="auto"
      px={4}
      py={2}
      h={8}
      bg={variant === "outline" ? "transparent" : "gray.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.700"
      rounded="full"
      _pressed={{ bg: variant === "outline" ? "gray.500" : "green.500" }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="body"
        fontSize="xs"
      >
        {title}
      </Text>
    </ButtonNB>
  );
}
