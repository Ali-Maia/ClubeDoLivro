//components estilizados
import styled from "styled-components/native";
import colors from "../../utils/colors";
import { StatusBar, Platform } from "react-native";
export const Container = styled.View`
  flex: 1;
  padding: 10px 30px;
  align-items: center;
  justify-content: space-evenly;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  background-color: ${colors.background};
`;

export const BookImg = styled.Image`
  margin-top: 8px;
  width: 39px;
  height: 25px;
`;

export const WelcomeImg = styled.Image`
  margin-top: 10px;
  width: 330px;
  height: 248px;
`;
export const ContainerBook = styled.View`
  width: 54px;
  height: 52px;
  border-radius: 10px;
  background-color: ${colors.icon};
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: ${colors.title};
`;
export const SubTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.subtitle};
`;

export const Button = styled.TouchableOpacity`
  width: 280px;
  height: 52px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  background-color: ${colors.primary};
`;
export const Text = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: ${colors.white};
`;
export const ArrowImg = styled.Image``;
