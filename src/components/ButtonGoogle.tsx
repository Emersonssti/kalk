import { Button, IButtonProps, Icon, Image } from "native-base";

import IconGoogle from "@assets/google.svg";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export function ButtonGoogle({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={{marginRight: 10}} {...rest}>
      <IconGoogle width={26} height={26}/>
    </TouchableOpacity>
  );
}
