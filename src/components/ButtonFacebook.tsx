import IconFacebook from "@assets/facebook.svg";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export function ButtonFacebook({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={{marginRight: 10}} {...rest}>
      <IconFacebook width={26} height={26}/>
    </TouchableOpacity>
  );
}
