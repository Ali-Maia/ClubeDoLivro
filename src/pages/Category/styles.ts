import styled from "styled-components/native";
import colors from "../../utils/colors";
import { Platform, StatusBar } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS == "android" ? StatusBar.currentHeight : 0}px;
  background-color: ${colors.background};
  align-items: center;
  margin: 30px;
`;

export const CardContainer = styled.ScrollView`
  flex: 1;
  margin-top: 20px;
`;

export const Tittle = styled.Text`
  color: ${colors.subtitle};
  font-size: 24px;
  text-align: center;
`;
