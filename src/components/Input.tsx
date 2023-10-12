import { dateMask } from "@utils/mask";
import { Input as InputNB, IInputProps } from "native-base";

type Props = IInputProps & {
  errorMenssage?: string | null;
  onInputMaksChange?: (text: string) => void
  mask?: 'date' | 'hour'
};

export function Input({ errorMenssage = null, isInvalid, onInputMaksChange, mask, ...rest }: Props) {
  const invalid = !!errorMenssage || isInvalid;

  function handleChange(text: string) {
    onInputMaksChange &&
      mask === 'date' &&
      onInputMaksChange(dateMask(text))
      
  }

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
        onChangeText={(text) => handleChange(text)}
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
