import { Input as InputNB, IInputProps, FormControl } from "native-base";

type Props = IInputProps & {
  errorMenssage?: string | null;
};

export function Input({ errorMenssage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMenssage || isInvalid;

  return (
      <InputNB
        bg="white"
        w={'full'}
        h={8}
        rounded="full"
        borderWidth={1}
        fontSize="sm"
        color="gray.600"
        fontFamily="body"
        placeholderTextColor="gray.300"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bg: "white",
          borderWidth: 1,
          borderColor: "blue.300",
        }}
        {...rest}
      />
  );
}
