import styled from "styled-components/native";
import colors from "../../utils/colors";
import { StatusBar, Platform } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  background-color: ${colors.background};
`;
export const FormContainer = styled.KeyboardAvoidingView`
  gap: 40px;
  align-items:center;
`;

export const ChoiceFormContainer = styled.KeyboardAvoidingView`
  flex-direction:row;
  align-items: center;
  gap: 3px;
`;

export const BookContainer = styled.View`
  margin: 40px;
`;
export const LoginImg = styled.Image``;
