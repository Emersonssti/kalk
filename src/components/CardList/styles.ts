import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 137px;
  height: 148px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  shadow-color: #454545;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.55;
  shadow-radius: 3.84px;
  elevation: 4;
  background-color: #fff;
  overflow: hidden;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const ImgBolo = styled.Image`
  width: 100%;
  height: auto;
`;

export const Footer = styled.View`
  width: 100%;
  height: 40%;
  align-items: left;
  justify-content: center;
  padding: 8px;
  text-align: left;
`;

