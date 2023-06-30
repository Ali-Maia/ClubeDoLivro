import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  padding-top: ${Platform.OS == "android" ? StatusBar.currentHeight : 0}px;
  position: absolute;
  right: 105%;
  top: 5px;
  margin-left: 10px;
  width: 35px;
  height: 35px;
`;
export const Icon = styled.Image`
  width: 35px;
  height: 35px;
`;
