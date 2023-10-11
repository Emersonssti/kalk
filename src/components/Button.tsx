import { Button as ButtonNB, IButtonProps, Text } from "native-base";

export type ButtonVariantTypeProps = "solid" | "outline" | "blue";

type Props = IButtonProps & {
  title: string;
  variant?: ButtonVariantTypeProps
};

export function Button({ title, variant = "solid", ...rest }: Props) {
  return (
    <ButtonNB
      w="auto"
      p={2}
      h={8}
      bg={variant === "outline" ? "transparent" : variant === "blue" ?  "blue.700" : "gray.700" }
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="blue.500"
      rounded="full"
      _pressed={{ bg: variant === "outline" ? "blue.100" : variant === "blue" ?  "blue.500" : "gray.700" }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "blue.500" : "white"}
        fontFamily="body"
        fontSize="xs"
      >
        {title}
      </Text>
    </ButtonNB>
  );
}
